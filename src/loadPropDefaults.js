//import { parse } from 'yaml'
//import fs from 'fs'
import {mergeDeepRight} from 'ramda'
import $RefParser from "@apidevtools/json-schema-ref-parser";

export const loadPropDefaults = 
  async (configPath,passedProps) => {
//    const openui = parse(fs.readFileSync(configPath, 'utf8'))
    const openui = await $RefParser.dereference(configPath)
    console.log('openui')
    console.log(Object.keys(openui))
    const propDefaults = Object.entries(openui.props).reduce( (acc,prop) => {
      const propName = prop[0]
      const propConfig = prop[1]
      acc[propName] = ((typeof propConfig.default) != undefined) ? propConfig.default : ""
      return acc
    }, {})
    return { ...mergeDeepRight(propDefaults, passedProps)
           , block: (typeof passedProps.block) === "boolean"
                  ? passedProps.block
                  : (openui.block || false)
           }
  }

loadPropDefaults('./site/site.yaml',{})
