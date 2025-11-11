import { parse } from 'yaml'
import fs from 'fs'

export const loadPropDefaults = 
  (configPath,passedProps) => {
    const openui = parse(fs.readFileSync(configPath, 'utf8'))
    const propDefaults = Object.entries(openui.props).reduce( (acc,prop) => {
      const propName = prop[0]
      const propConfig = prop[1]
      acc[propName] = ((typeof propConfig.default) != undefined) ? propConfig.default : ""
      return acc
    }, {})
    return { ...propDefaults
           , ...passedProps
           , block: (typeof passedProps.block) === "boolean"
                  ? passedProps.block
                  : (openui.block || false)
           }
  }
