import { Glob } from "bun";
import $RefParser from '@apidevtools/json-schema-ref-parser'
import Z from '@consoleillusion/zamda'

const glob = new Glob("**/config.yaml")

const loadSchema = async p => await $RefParser.dereference(p)


const globOptions = 
  { cwd: import.meta.dirname +  "/components"
  , absolute: true
  }

export const Schema = {}
for await (const file of glob.scan(globOptions)){
  const s = await loadSchema(file)
  Schema[Z.camelCase(s.title)] = s
}
/*
*/
