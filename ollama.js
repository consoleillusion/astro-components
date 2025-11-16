import ollama from 'ollama'

import {fullSchema} from './src/schema/generateSchema.js'
/*
import OpenAI from "openai"
const client = new OpenAI()

const messages =
  [ (categories,loc,description,schema) => `I am creating a website described in its most reduced by this schema {"gmb_categories": "${categories.join(', ')}", "location": "${loc}", "description": "${description}"}
 I need you to expand on this by creating a whole new JSON document containing the information required for a websites head section. It must conform to a JSON Schema document that I will give below. Please make sure to include the required parts of the document. Here is the schema:

${JSON.stringify(schema)}`]
const firstMessage = messages[0](["restaurant","high end restaurant","Italian"],"Auckland","A high class Italian restaurant",fullSchema.properties.meta)

const response = await client.responses.create(
  { model: "gpt-5"
  , input: firstMessage
  })



console.log(firstMessage)
console.log(response.message.content)
 *
 *
*/
const schema = fullSchema["$defs"]["Button"]
console.log(schema)
const firstMessage = 'Create JSON matching the json schema i give you. Do not give any commentary, markdown, explanations. Give only a single line of json matching that jsonschema. The Schema: \n' + JSON.stringify(schema)
console.log(firstMessage)

const response1 = await ollama.chat(
  { model: 'gpt-oss:20b'
  , messages: [{ role: 'user', content: firstMessage }]
  })

console.log(response1.message.content)

const response2 = await ollama.chat(
  { model: 'codellama:13b'
  , messages: [{ role: 'user', content: firstMessage }]
  })

console.log(response2.message.content)
