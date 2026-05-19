let map = https://prelude.dhall-lang.org/List/map

let components = map Text { mapKey : Text, mapValue : { astro : Text, default : Text, import : Text } }
        ( λ(name : Text) →
            let path = "./src/components/${name}/index.astro"
            in  { mapKey  = "./${name}.astro"
                , mapValue = { astro = path, default = path, import = path }
                }
        )
      [ "Accordion", "Button", "Card", "CardGrid", "Column", "Field", "Figure", "Footer", "FullPageTitle", "Hero", "Link", "Map", "Markdown", "MediaText", "Meter", "Navbar", "OpeningHours", "Progress", "PullQuote", "Quote", "Review", "Seo", "SocialButton", "Style", "Webpage" ]

in
{ astro = "./index.js"
, dependencies =
  { `@apidevtools/json-schema-ref-parser` = "^14.2.1"
  , `@astrojs/svelte` = "^7.2.5"
  , `@consoleillusion/what-revenge` = "^0.0.3"
  , `@consoleillusion/zamda` = "^0.0.972"
  , `@iconify-json/line-md` = "^1.2.11"
  , `@iconify-json/ri` = "^1.2.6"
  , `@rollup/plugin-yaml` = "^4.1.2"
  , `@vercel/speed-insights` = "^1.2.0"
  , ajv = "^8.17.1"
  , ajv-formats = "^3.0.1"
  , astro = "^5.16.15"
  , astro-icon = "^1.1.5"
  , change-case = "^5.4.4"
  , `chart.js` = "^4.5.1"
  , glob = "^11.0.3"
  , json-schema-faker = "^0.5.9"
  , leaflet = "^1.9.4"
  , lightningcss = "^1.32.0"
  , ramda = "^0.32.0"
  , sass = "^1.93.3"
  , svelte = "^5.43.2"
  , typescript = "^5.9.3"
  }
, devDependencies =
  { `@iconify-json/bxs` = "^1.2.2", `@iconify-json/lucide` = "^1.2.73" }
, exports = toMap
  ({ `.` = { astro = "./index.js", default = "./index.js", import = "./index.js" }
   , `./schema` = { default = "./schema.js", astro = "", import = ""} 
   }) # components
, main = "./index.js"
, name = "@consoleillusion/astro-components"
, scripts =
  { astro = "astro"
  , build = "astro build"
  , dev = "astro dev"
  , postpublish = "bunx npm version patch --no-git-tag-version && git add . && git commit -m \"Auto version bump\""
  , prep = "sh -c 'git add . && git commit -m \"\$*\"' --"
  , preview = "astro preview"
  , pub = "bunx npm version patch --no-git-tag-version; git push"
  }
, type = "module"
, version = "0.0.41"
}
