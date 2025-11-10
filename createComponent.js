import { stringify } from 'yaml'
import {writeFileSync} from 'node:fs'
import {access,mkdir} from 'node:fs/promises'
import {kebabCase} from 'change-case'

const astroTemplate = (name,props,type) =>
`---
import {loadPropDefaults} from "../../loadPropDefaults.js"
import "./index.scss"
const {${props.join(',')}} = loadPropDefaults(import.meta.dirname + '/config.yaml',Astro.props)
---

${type === 'block' ? '<section class="block ' + kebabCase(name) + '">' : ''}
`
const configTemplate = (name,props) => stringify(
  { name: name
  , description: ""
  , props: props.reduce((acc,propName)=>{acc[propName]={type:'string',default:''};return acc},{})
  })

const scssTemplate = (name) => kebabCase(name) + '{\n}'

export const createComponent = 
  async (name,props,type) => {
    const componentPath = import.meta.dirname + '/src/' + type + 's/' + name
    await mkdir(componentPath,{recursive: true})

    const configPath = componentPath + '/config.yaml'
    try {
      await access(configPath)
    } catch {
      console.log("Writing " + configPath)
      writeFileSync(componentPath + "/config.yaml", configTemplate(name,props))
    }

    const astroPath = componentPath + '/index.astro'
    try {
      await access(astroPath)
    } catch {
      console.log("Writing " + astroPath)
      writeFileSync(componentPath + "/index.astro", astroTemplate(name,props,type))
    }

    const scssPath = componentPath + '/index.scss'
    try {
      await access(cssPath)
    } catch {
      console.log("Writing " + scssPath)
      writeFileSync(componentPath + "/index.scss", scssTemplate(name,props))
    }

    return ''
  }

createComponent('Column',["background","text"],'block')
