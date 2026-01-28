import $RefParser from "@apidevtools/json-schema-ref-parser"
import {glob} from 'glob'
import {resolve} from 'path'
import Z from '@consoleillusion/zamda'
import {base} from './base.js'

const componentSchemas = await Z.pipeSync(
  [ glob 
  , Z.map($RefParser.dereference)
  , Z.promiseAll
  ]) (resolve(import.meta.dirname , '../*/config.yaml'))

const ComponentList =
  { type: 'array'
  , items: { anyOf: componentSchemas }
  }

export const Website = await $RefParser.dereference(
  { ...base
    /*
  , global: {items: ComponentList}
  , "$defs":
    { ...Z.indexBy(Z.prop('title'))(componentSchemas)
    , ComponentList
    }
    */
  })

Z.log(JSON.stringify((Website)))
