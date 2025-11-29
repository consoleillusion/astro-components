/*
import {glob} from 'glob'
import {filter,mergeDeepRight,indexBy,prop,andThen,tap,pipe,map} from 'ramda'
import {validate} from './validate.js'
import isoLanguage from './isoLanguage.json' with {type: 'json'}
import isoCountry from './isoCountry.json' with {type: 'json'}
import {colors} from './colors.js'
*/
import $RefParser from "@apidevtools/json-schema-ref-parser"
import {resolve} from 'path'
import Z from '@consoleillusion/zamda'
import {base} from './base.js'

const components = await Z.pipeSync(
  [ path => glob(path)
  , Z.map(loadFile)
  , x => Promise.all(x)
  ]) (resolve(import.meta.dirname , '../*/config.yaml'))

Z.log(base)

/*
let schemaBase = await $RefParser.dereference(base)
let schemaBase = await $RefParser.dereference(resolve(import.meta.dirname, "base.yaml"))
let schemaBase = await $RefParser.dereference(resolve(import.meta.dirname, "base.yaml"))

let ComponentList = 
  { type: 'array'
  , items: { anyOf: Object.keys(components).map(componentName=>({$ref: "#/$defs/" + componentName })) }
  }

let schema1 =
  { ...schemaBase
  , $defs: {...components, ComponentList }
  }

schema1["properties"]["global"]["items"] = ComponentList.items //{ anyOf: {$ref: "#/$defs/" + componentName })) }
schema1 = await loadFile(schema1)
export const schema = schema1
Z.log(JSON.stringify(schema))
Z.log(schema["$defs"]["ComponentList"]["items"]["anyOf"])
    ["properties"]["global"]["items"] = componentList.items //{ anyOf: {$ref: "#/$defs/" + componentName })) }
  { ...
  , "$defs":
    {
    , ComponentList:
      { type: 'array'
      , items:
        { anyOf: Object.keys(components).map(componentName=>({$ref: "#/$defs/" + componentName })) }
      }}
  }
schema["properties"]["global"]["items"] = { anyOf: {$ref: "#/$defs/" + componentName })) }
schema["properties"]["pages"]["patternProperties"]["^/(?:[a-z0-9\\-_.~]+(?:/[a-z0-9\\-_.~]+)*)?$"]["properties"]["blocks"]["items"] = schema["$defs"]["ComponentList"]["items"]
schema = await loadFile(schema)
Z.log(JSON.stringify(schema))
 
Z.log(components)
schema["$defs"] =
  { ComponentList:
    { type: 'array'
    , items:
      { anyOf: Object.keys(components).map(componentName=>({$ref: "#/$defs/" + componentName })) }
    }
  }
schema["properties"]["global"]["items"] = { anyOf: Object.keys(components).map(componentName=>({$ref: "#/$defs/" + componentName })) }
schema["properties"]["pages"]["patternProperties"]["^/(?:[a-z0-9\\-_.~]+(?:/[a-z0-9\\-_.~]+)*)?$"]["properties"]["blocks"]["items"] = schema["$defs"]["ComponentList"]["items"]
schema = await loadFile(schema)

const siteData = await loadFile(resolve(import.meta.dirname,"../../site/site.yaml"))
//console.log(schema)
*/
