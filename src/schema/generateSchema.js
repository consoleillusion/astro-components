import {glob} from 'glob'
import $RefParser from "@apidevtools/json-schema-ref-parser"
import {mergeDeepRight,indexBy,prop,andThen,tap,pipe,map} from 'ramda'
import {resolve} from 'path'
import {validate} from './validate.js'
import isoLanguage from './isoLanguage.json' with {type: 'json'}
import isoCountry from './isoCountry.json' with {type: 'json'}
import {colors} from './colors.js'

const componentsConfigPath = resolve(import.meta.dirname , '../components/*/*.yaml')
const getFilePaths = async path => await glob(path)
const loadFile = async file => await $RefParser.dereference(file)

const base = await $RefParser.dereference(resolve(import.meta.dirname, "base.yaml"))

const components = await pipe
  ( getFilePaths
  , andThen(map(loadFile))
  , andThen( x => Promise.all(x))
  , andThen(indexBy(prop('title')))
  ) (componentsConfigPath)

let schema = base
schema["$defs"] =
  { ...components
  , ComponentList:
    { type: 'array'
    , items:
      { anyOf: Object.keys(components).map(componentName=>({$ref: "#/$defs/" + componentName })) }
    }
  }
schema["properties"]["global"]["items"] = { anyOf: Object.keys(components).map(componentName=>({$ref: "#/$defs/" + componentName })) }
schema["properties"]["pages"]["patternProperties"]["^/(?:[a-z0-9\\-_.~]+(?:/[a-z0-9\\-_.~]+)*)?$"]["properties"]["blocks"]["items"] = schema["$defs"]["ComponentList"]["items"]
schema = await loadFile(schema)

const siteData = await loadFile(resolve(import.meta.dirname,"../../site/site.yaml"))
console.log(schema)
const valid = validate(schema)(siteData)
//console.log(JSON.stringify(valid))
export const fullSchema = schema
//console.log(JSON.stringify(schema))
