import path from 'path'
import $RefParser from '@apidevtools/json-schema-ref-parser'
import {Webpage} from  './src/components/Webpage/config.js'
import {Website} from  './src/components/Website/config.js'
const loadSchema = async p => await $RefParser.dereference(path.resolve(import.meta.dirname, 'src/components',p, 'config.yaml'))
const componentList = ["Accordion","Button","Card","CardGrid","Column","Field","Figure","Footer","Hero","Link","Markdown","Map","Navbar","OpeningHours","PullQuote","Quote","Review","SEO","Theme"]
export const schema =
  { ...(await componentList.reduce(async (acc,name)=>Object.assign(await acc,{[name]: await loadSchema(name)}),{}))
  , Webpage: await $RefParser.dereference(Webpage)
  , Website: await $RefParser.dereference(Website)
  }

console.log(schema.Website)
