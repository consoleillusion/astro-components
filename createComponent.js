import { stringify } from 'yaml'
import {writeFileSync} from 'node:fs'
import {access,mkdir} from 'node:fs/promises'
import {kebabCase} from 'change-case'

const astroTemplate = (name,props) =>
`---
import {loadPropDefaults} from "../../loadPropDefaults.js"
import "./style.scss"
const props = await loadPropDefaults(import.meta.dirname + '/config.yaml',Astro.props)
---

${props.includes('block') ? '<section class="block ' + kebabCase(name) + '">\n\t<slot/>\n</section>' : ''}
`
const configTemplate = (name,props) => stringify(
  { name: name
  , type: "object"
  , description: ""
  , properties:
    { id: {type: "string", description: "Specify an id attribute for the component", default: null}
    , block: { type: "boolean", description: "Whether this is a block component or not", default: props.block=== true ? true : false} 
    , ...props.reduce((acc,propName)=>{acc[propName]={type:'string',default:""};return acc},{})
    , headline: {type: "string",description:"A header for this component"}
    , subheadline: {type: "string",description:"A subheadline for this component"}
    }
  })

const scssTemplate = (name) => '.' + kebabCase(name) + '{\n}'

export const createComponent = 
  async (name,props) => {
    const componentPath = import.meta.dirname + '/src/components/' + name
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
      writeFileSync(componentPath + "/index.astro", astroTemplate(name,props))
    }

    const scssPath = componentPath + '/style.scss'
    try {
      await access(cssPath)
    } catch {
      console.log("Writing " + scssPath)
      writeFileSync(componentPath + "/style.scss", scssTemplate(name,props))
    }

    return ''
  }

//createComponent('Hero',["headline","subheadline","ctaPrimaryText","ctaPrimaryAction","ctaSecondaryText","ctaSecondaryAction","googleReviewLink","imageSrc","style","imageOpacity","backgroundColor","height"],'block')
createComponent('Theme',["color","font"])
