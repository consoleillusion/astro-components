global.location = new URL(import.meta.url)
import makeSynchronous from 'make-synchronous'
import jsf from 'json-schema-faker'

const generateMessage =
  schema => 'Create JSON matching the json schema i give you. Do not give any commentary, markdown, explanations. Give only a single line of json matching that jsonschema. The Schema: \n' + JSON.stringify(schema)

const ask = (val,schema) => generateMessage(schema)

const schema =
  { type:"string"
  , "faker": ask
  } 

const x = (await jsf.resolve(schema))
console.log(x)

/*
 
 */
