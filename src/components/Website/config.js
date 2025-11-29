import $RefParser from "@apidevtools/json-schema-ref-parser"
import {glob} from 'glob'
import {resolve} from 'path'
import Z from '@consoleillusion/zamda'
import {base} from './base.js'

const components = await Z.pipeSync(
  [ path => glob(path)
  , Z.map(x => $RefParser.dereference(x))
  , x => Promise.all(x)
  ]) (resolve(import.meta.dirname , '../*/config.yaml'))

const ComponentList =
  { type: 'array'
  , items: { anyOf: components }
  }

export const schema = await $RefParser.dereference(
  { ...base
  , global: {items: ComponentList}
  , "$defs":
    { ...Z.indexBy(Z.prop('title'))(components)
    , ComponentList
    }
  })
Z.log(schema)
