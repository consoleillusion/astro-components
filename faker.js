global.location = new URL(import.meta.url)
import jsf from 'json-schema-faker'
import makeSynchronous from 'make-synchronous'
import {schema as siteSchema} from './src/schema/generateSchema.js'

import {mapObjIndexed,omit} from 'ramda'

const ask = 
  async (value,schema) => {
    const ollama = (await import('ollama')).default
    const omit = (await import('ramda')).omit
    const generateMessage =
      schema => 'Create JSON matching the json schema i give you. Do not give any commentary, markdown, explanations. Give only a single line of json matching that jsonschema. The Schema: \n' + JSON.stringify(schema)
    console.log(omit(['default','enum'],schema))
    return (await ollama.chat(
      { model: 'gpt-oss:20b'
      , messages: [{ role: 'user', content: generateMessage(omit(['default'],schema)) }]
      })).message?.content ?? ""
  }

jsf.define('generator', makeSynchronous(ask)) //makeSynchronous( async(v,s) => await ask(v,s) ))

const schema = (siteSchema.properties.meta.properties.theme.properties.fonts) 
const x = (await jsf.resolve(schema))
console.log(x)
/*
console.log(JSON.stringify(schema))
const schema = {
      type: 'string',
      description: "A name of kind of ancient musical instrument",
      'x-generator': 'myFruit'
    }
    */


/*
const schema = siteSchema.properties.meta.properties.theme.properties.fonts
const x = (await jsf.resolve(schema))
console.log(x)

const schema =
  { type: 'string'
  , description: "Should be a name of a cute girl from a madmax scifi"
  , "x-generator": "llm"
  }

console.log(response1.message.content)
  */
