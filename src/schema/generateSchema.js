import {glob} from 'glob'
import $RefParser from "@apidevtools/json-schema-ref-parser"

const files = await glob(import.meta.dirname + '/../components/*/*.yaml')

const schema = await Promise.all(files.map( async file => await $RefParser.dereference(file)))

console.log(schema)
