//import { parse } from 'yaml'
//import {readFileSync} from 'fs'
import path from 'node:path'

import $RefParser from "@apidevtools/json-schema-ref-parser";

const readYaml = p => $RefParser.dereference(p,x=>x) //p => parse(readFileSync(p,'utf8'))

export const loadSiteData = 
  async siteDataPath => {
    const site = await readYaml(path.join(siteDataPath,"site.yaml"))
    console.log(site)
    site.pages = Object.entries(site.pages).map( async ([page,filePath]) => await readYaml(path.join(siteDataPath,filePath)))
    /*
    console.log(siteDataPath)
    const siteData= parse(readFileSync(dataPath, 'utf8'))
    const propDefaults = Object.entries(openui.props).reduce( (acc,prop) => {
      const propName = prop[0]
      const propConfig = prop[1]
      acc[propName] = ((typeof propConfig.default) != undefined) ? propConfig.default : ""
      return acc
    }, {})
    return {...propDefaults,...passedProps, block: (typeof passedProps.block) === "boolean" ? passedProps.block : (openui.block || false)}
    console.log(JSON.stringify(site))
    */
    return site
  }

//loadSiteData(path.join(import.meta.dirname,"../site"))
