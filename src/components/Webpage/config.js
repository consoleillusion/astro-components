import {filter,mergeDeepRight,indexBy,prop,map} from 'ramda'
import {resolve} from 'path'
import {glob} from 'glob'
import $RefParser from "@apidevtools/json-schema-ref-parser"
import Z from '@consoleillusion/zamda'

const blockComponents = await Z.pipeSync(
  [ glob 
  , map($RefParser.dereference)
  , Z.promiseAll
  , filter(x=>x.properties.block.default)
  ]) (resolve(import.meta.dirname , '../*/config.yaml'))

//schema1["properties"]["pages"]["patternProperties"]["^/(?:[a-z0-9\\-_.~]+(?:/[a-z0-9\\-_.~]+)*)?$"]["properties"]["blocks"]["items"] = BlockComponentList.items

export const Webpage = 
{ title: "Page"
, type: "object"
, required: ["title","blocks"]
, additionalProperties: true
, properties:
  { meta:
    { type: "object"
    , description: "metadata for the specific page, by default it will take the websites metadata."
    , default: null
    , "x-generator": "default"
    }
  , globals:
    { type: "array"
    , description: "An array specifying which globals to include. This is an array of strings, referencing the globals to include, which must be defined in the websites global section."
    , default: ["Navbar","Footer"]
    , "x-generator": "default"
    }
  , title:
    { type: "string"
    , "x-generator": "default"
    }
  , blocks:
    { type: "array"
    , items: { anyOf: blockComponents}
    }
  }
}
//console.log(Webpage.properties.blocks.items.anyOf)
