import {parse} from 'yaml'
import {readFileSync} from 'fs'

const x = parse(readFileSync(import.meta.dirname + '/dependency_doula/index.yaml','utf8'))
console.log(x)
