import {glob} from 'glob'
import $RefParser from "@apidevtools/json-schema-ref-parser"
import {indexBy,prop,andThen,tap,pipe,map} from 'ramda'
import {resolve} from 'path'

const componentsPath = resolve(import.meta.dirname , '../components/*/*.yaml')
const getFilePaths = async path => await glob(path)
const loadFile = async file => await $RefParser.dereference(file)

const base = await $RefParser.dereference(resolve(import.meta.dirname, "base.yaml"))

const components = await pipe
  ( getFilePaths
  , andThen(map(loadFile))
  , andThen( x => Promise.all(x))
  , andThen(indexBy(prop('name')))
  ) (componentsPath)

const schema =
  { ...base
  , global: 
    { type: "array"
    , description: "A List of Global Components"
    , anyOf: Object.keys(components).map(componentName=>({$ref: "#/$defs/" + componentName}))
    }
  , "$defs": components
  }

console.log(JSON.stringify(schema))
    /*
  */

/*
const loadComponents =
  async () => await Promise.all(files.map( async file => await $RefParser.dereference(file)))

*/

//console.log(await getFilePaths('/mnt/marduck/Development/astro-components/src/components/*/*.yaml'))
