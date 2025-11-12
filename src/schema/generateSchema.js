import {glob} from 'glob'
import $RefParser from "@apidevtools/json-schema-ref-parser"
import {mergeDeepRight,indexBy,prop,andThen,tap,pipe,map} from 'ramda'
import {resolve} from 'path'
import {validate} from './validate.js'
import isoLanguage from './isoLanguage.json'
import isoCountry from './isoCountry.json'

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

const schema = mergeDeepRight
  ( {...base, "$defs": components}
  , { properties:
      { meta: {properties: {iso_language: {enum: isoLanguage.map(x=>x["alpha2"])},iso_country: {enum: Object.keys(isoCountry)}}}
      , global:
        { type: "array"
        , description: "A List of Global Components"
        , items: {
            anyOf: Object.keys(components).map(componentName=>({$ref: "#/$defs/" + componentName}))
          }
        }
      }
    }
  )

const siteData = await loadFile(resolve(import.meta.dirname,"../../site/site.yaml"))
const valid = validate(schema)(siteData)
console.log(valid)
