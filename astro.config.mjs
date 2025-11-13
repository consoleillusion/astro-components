// @ts-check
import { defineConfig, fontProviders } from 'astro/config'
import { kebabCase } from 'change-case'
import svelte from '@astrojs/svelte'
import icon from 'astro-icon'
import yaml from '@rollup/plugin-yaml'
//import adapter from '@astrojs/adapter-static'
  
const fontsourceFonts = ["Mulish", "Fraunces", "Manrope", "Playfair Display", "Source Sans Pro", "Alice", "Quattrocento", "Quattrocento Sans", "Fanwood Text", "Oswald", "Fjalla One", "Libre Baskerville", "Lustria", "Lato", "Cormorant", "Cormorant Garamond", "Proza Libre", "EB Garamond", "Cinzel", "Fauna One", "Sacramento", "Yeseva One", "Josefin Sans", "Montserrat", "Cardo", "Lora", "Roboto", "Spectral", "Karla", "Halant", "Nunito Sans", "Merriweather", "Nunito", "Quicksand", "Ubuntu", "Open Sans", "Hind", "PT Sans", "Crimson Text", "Open Sans", "Arvo", "Abril Fatface", "Poppins", "Playfair Display", "Inconsolata", "Ultra", "Slabo 27px", "Nixie One", "Ledger", "Stint Ultra Expanded", "Pontano Sans", "Amatic SC", "Andika", "Unica One", "Philosopher", "Source Serif Pro", "Cantarell", "Work Sans", "Oxygen", "PT Sans", "Cabin", "Roboto Condensed", "Raleway", "Inter"]
const adobeFonts = ["Muli Regular"]


// https://astro.build/config
export default defineConfig(
  { integrations: [svelte(), icon()]
  , vite: {
        plugins: [yaml()]
    }
  , site: "https://consoleillusion.github.io"
  , base: "/astro-components"
  , experimental:
    { fonts:
      [ ...fontsourceFonts.map( f => (
        { provider: fontProviders.fontsource()
        , name: f
        , cssVariable: "--font-" + kebabCase(f)
        }))
      , ...adobeFonts.map( f => (
        { provider: fontProviders.adobe()
        , name: f
        , cssVariable: "--font-" + kebabCase(f)
        }))
      ]
    }
  })
