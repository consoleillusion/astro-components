import {mergeDeepRight} from 'ramda'
import $RefParser from "@apidevtools/json-schema-ref-parser";
import Ajv from 'ajv'
const ajv = new Ajv()

const schema = {
  type: "object",
  properties: {
    foo: {type: "integer"},
    bar: {type: "string"}
  },
  required: ["foo"],
  additionalProperties: false
}


export const loadPropDefaults = 
  async (configPath,passedProps) => {
    const openui = await $RefParser.dereference(configPath)
    const validate = ajv.compile(openui)
    const propDefaults = Object.entries(openui.properties).reduce( (acc,prop) => {
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

//loadPropDefaults('./site/site.yaml',{})
