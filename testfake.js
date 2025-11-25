global.location = new URL(import.meta.url)
import makeSynchronous from 'make-synchronous'
import jsf from 'json-schema-faker'

jsf.define('myFruit', async () => 'apple2')
jsf.define('x-faker', async () => 'apple3')
jsf.option({ extend: true})

jsf.extend('generator', makeSynchronous(async () => 'apple'))

const schema = {
      type: 'string',
      'x-generator': 'myFruit'
    }

const result = await jsf.resolve(schema)
console.log(result)

