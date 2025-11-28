import path from 'path'
import $RefParser from '@apidevtools/json-schema-ref-parser'
import {schema as WebPageSchema} from  './src/components/WebPage/config.js'
const loadSchema = async p => await $RefParser.dereference(path.resolve(import.meta.dir, 'src/components',p, 'config.yaml'))
const componentList = ["Accordion","Button","Card","CardGrid","Column","Field","Figure","Footer","Hero","Link","Markdown","Map","Navbar","OpeningHours","PullQuote","Quote","Review","SEO","Theme"]
export const schema =
  { ...(await componentList.reduce(async (acc,name)=>Object.assign(await acc,{[name]: await loadSchema(name)}),{}))
  , WebPage: WebPageSchema 
  }
