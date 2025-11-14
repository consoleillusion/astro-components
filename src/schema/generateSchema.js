import {glob} from 'glob'
import $RefParser from "@apidevtools/json-schema-ref-parser"
import {mergeDeepRight,indexBy,prop,andThen,tap,pipe,map} from 'ramda'
import {resolve} from 'path'
import {validate} from './validate.js'
import isoLanguage from './isoLanguage.json'
import isoCountry from './isoCountry.json'
import {colors} from './colors.js'

const componentsPath = resolve(import.meta.dirname , '../components/*/*.yaml')
const getFilePaths = async path => await glob(path)
const loadFile = async file => await $RefParser.dereference(file)

const base = await $RefParser.dereference(resolve(import.meta.dirname, "base.yaml"))

const components = await pipe
  ( getFilePaths
  , andThen(map(loadFile))
  , andThen( x => Promise.all(x))
  , andThen(indexBy(prop('title')))
  ) (componentsPath)

let schema = base
schema["$defs"] =
  { ...components
  , Colors: {type: "string", enum: colors}
  , ComponentList:
    { type: 'array'
    , items:
      { anyOf: Object.keys(components).map(componentName=>({$ref: "#/$defs/" + componentName })) }
    }
  }
schema["properties"]["meta"]["properties"]["iso_language"]["enum"] = isoLanguage.map(x=>x["alpha2"])
schema["properties"]["meta"]["properties"]["iso_country"]["enum"] = Object.keys(isoCountry)
//schema["properties"]["global"]["items"] = { anyOf: [{"$ref": "#/$defs/ComponentList"} }]
schema["properties"]["global"]["items"] = { anyOf: Object.keys(components).map(componentName=>({$ref: "#/$defs/" + componentName })) }
schema["properties"]["meta"]["properties"]["color"] =
  { type: "object"
  , required: ["base","surface","brand","accent","support"]
  , properties:
    { "base": { "$ref": "#/$defs/Colors" }
    , "surface": { "$ref": "#/$defs/Colors" }
    , "accent": { "$ref": "#/$defs/Colors" }
    , "accent-2": { "$ref": "#/$defs/Colors" }
    , "accent-3": { "$ref": "#/$defs/Colors" }
    , "theme": { "$ref": "#/$defs/Colors" }
    , "themeLight": { "$ref": "#/$defs/Colors" }
    , "themeDark": { "$ref": "#/$defs/Colors" }
    }
  }
schema = await loadFile(schema)

const siteData = await loadFile(resolve(import.meta.dirname,"../../site/site.yaml"))
const valid = validate(schema)(siteData)
//console.log(JSON.stringify(valid))
console.log(JSON.stringify(schema))
