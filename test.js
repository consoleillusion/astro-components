import {last,dropLast, prop, sortBy,replace,evolve, pipe, pick, map, andThen} from 'ramda'
import Color from 'color'

const url = "https://www.colourlovers.com/api/palettes/top?format=json&numResults=1"
const getThemes = async url => await (await fetch(url)).json()
const categorizeColors =
  colors => {
    let cs = colors.map(c => Color('#'+c))
                   .map(c => (
                       { luminosity: c.luminosity()
                       , chroma: c.chroma()
                       , css: c.hex()
                       }))
    const base = cs.pop(sortBy(prop('luminosity'),cs),cs).css
    const surface = cs.pop(sortBy(prop('luminosity'),cs),cs).css
    const accent = cs.pop(sortBy(prop('chroma'),cs),cs).css
    const brand = cs.pop(sortBy(prop('chroma'),cs)).css
    const support = cs.pop(sortBy(prop('chroma'),cs)).css

    return {base,surface,brand,accent,support}
  }

const transform = pipe
  ( pick(["id","title","userName","rank","dateCreated","colors","description","url","imageUrl","badgeUrl"])
  , evolve(
    { url: replace('http','https')
    , imageUrl: replace('http','https')
    , badgeUrl: replace('http','https')
    , colors: categorizeColors
    })
  )

const palettes = (await getThemes(url)).map(transform)
console.log(palettes)
