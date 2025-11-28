import {glob} from 'glob'
import $RefParser from "@apidevtools/json-schema-ref-parser"
import {filter,mergeDeepRight,indexBy,prop,andThen,tap,pipe,map} from 'ramda'
import {resolve} from 'path'
import {validate} from './validate.js'
import isoLanguage from './isoLanguage.json' with {type: 'json'}
import isoCountry from './isoCountry.json' with {type: 'json'}
import {colors} from './colors.js'
import Z from '@consoleillusion/zamda'


const loadFile = async file => await $RefParser.dereference(file)

const components = await pipe
  ( async path => await glob(path)
  , andThen(map(loadFile))
  , andThen( x => Promise.all(x))
  , andThen(indexBy(prop('title')))
  ) (resolve(import.meta.dirname , '../*/config.yaml'))

const blockComponents = await pipe
  ( async path => await glob(path)
  , andThen(map(loadFile))
  , andThen( x => Promise.all(x))
  , andThen(filter(x=>x.properties.block.default))
  , andThen(indexBy(prop('title')))
  ) (resolve(import.meta.dirname , '../*/config.yaml'))

let schemaBase = await $RefParser.dereference(resolve(import.meta.dirname, "base.yaml"))
let ComponentList = 
  { type: 'array'
  , items: { anyOf: Object.keys(components).map(componentName=>({$ref: "#/$defs/" + componentName })) }
  }
let BlockComponentList = 
  { type: 'array'
  , items: { anyOf: Object.keys(blockComponents).map(componentName=>({$ref: "#/$defs/" + componentName })) }
  }

let schema1 =
  { ...schemaBase
  , $defs: {...components, ComponentList }
  }

schema1["properties"]["global"]["items"] = ComponentList.items //{ anyOf: {$ref: "#/$defs/" + componentName })) }
schema1["properties"]["pages"]["patternProperties"]["^/(?:[a-z0-9\\-_.~]+(?:/[a-z0-9\\-_.~]+)*)?$"]["properties"]["blocks"]["items"] = BlockComponentList.items
schema1 = await loadFile(schema1)
export const schema = schema1
/*
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
const valid = validate(schema)(siteData)
//console.log(JSON.stringify(valid))
export { schema }
//console.log(JSON.stringify(schema))
//

console.log(schema["$defs"].ComponentList)
*/
