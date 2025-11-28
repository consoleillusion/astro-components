import path from 'path'
import $RefParser from '@apidevtools/json-schema-ref-parser'

export { default as Accordion } from './src/components/Accordion/index.astro'
export { default as Button } from './src/components/Button/index.astro'
export { default as Card } from './src/components/Card/index.astro'
export { default as CardGrid } from './src/components/CardGrid/index.astro'
export { default as Column } from './src/components/Column/index.astro'
export { default as Field } from './src/components/Field/index.astro'
export { default as Figure } from './src/components/Figure/index.astro'
export { default as Footer } from './src/components/Footer/index.astro'
export { default as Hero } from './src/components/Hero/index.astro'
export { default as Link } from './src/components/Link/index.astro'
export { default as Markdown } from './src/components/Markdown/index.astro'
export { default as Map } from './src/components/Map/index.astro'
export { default as Navbar } from './src/components/Navbar/index.astro'
export { default as OpeningHours } from './src/components/OpeningHours/index.astro'
export { default as PullQuote } from './src/components/PullQuote/index.astro'
export { default as Quote } from './src/components/Quote/index.astro'
export { default as Review } from './src/components/Review/index.astro'
export { default as SEO } from './src/components/SEO/index.astro'
export { default as Theme } from './src/components/Theme/index.astro'
export { default as WebPage } from './src/components/WebPage/index.astro'

import {schema as WebPageSchema} from  './src/components/WebPage/config.js'
const loadSchema = async p => await $RefParser.dereference(path.resolve(import.meta.dir, 'src/components',p, 'config.yaml'))
/*
console.log(await configPath('Quote'))
const loadSchema = 
const schema = await $RefParser.dereference(configPath)
console.log(schema)
*/
const componentList = ["Accordion","Button","Card","CardGrid","Column","Field","Figure","Footer","Hero","Link","Markdown","Map","Navbar","OpeningHours","PullQuote","Quote","Review","SEO","Theme"]
export const schema =
  { ...(await componentList.reduce(async (acc,name)=>Object.assign(await acc,{[name]: await loadSchema(name)}),{}))
  , WebPage: WebPageSchema 
  }
