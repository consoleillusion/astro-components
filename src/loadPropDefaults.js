import {mergeDeepRight} from 'ramda'
import $RefParser from "@apidevtools/json-schema-ref-parser"

import {validate} from './schema/validate.js'
/*
import Ajv from 'ajv'
import addFormats from "ajv-formats"
const ajv = new Ajv()
addFormats(ajv)
*/

export const loadPropDefaults = 
  async (configPath,passedProps) => {
    console.log(configPath)
    const openui = await $RefParser.dereference(configPath)
    //const validate = ajv.compile(openui)
    const propDefaults = Object.entries(openui.properties).reduce( (acc,prop) => {
      const propName = prop[0]
      const propConfig = prop[1]
      acc[propName] = ((propConfig.default) != undefined) ? propConfig.default : ""
      return acc
    }, {})
    return { ...mergeDeepRight(propDefaults, passedProps)
           , block: (typeof passedProps.block) === "boolean"
                  ? passedProps.block
                  : (openui.block || false)
           }
  }

//loadPropDefaults('./site/site.yaml',{})
