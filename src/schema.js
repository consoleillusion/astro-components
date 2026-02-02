//const glob = new Glob("**/config.yaml")
/*
import { Glob } from "bun";
import $RefParser from '@apidevtools/json-schema-ref-parser'
import Z from '@consoleillusion/zamda'


const loadSchema = async p => await $RefParser.dereference(p)


const globOptions = 
  { cwd: import.meta.dirname +  "/components"
  , absolute: true
  }

export const Schema = {}
for await (const file of glob.scan(globOptions)){
  const s = await loadSchema(file)
  Schema[Z.camelCase(s.title)] = s
}
*/
import { Glob } from "bun";
import $RefParser from "@apidevtools/json-schema-ref-parser";
import Z from "@consoleillusion/zamda";
import path from "node:path";
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const componentsDir = path.resolve(__dirname, "../src/components");

const glob = new Glob("**/config.yaml");
const Schema = {};

for await (const file of glob.scan({ cwd: componentsDir, absolute: true })) {
  const s = await $RefParser.dereference(file);
  Schema[Z.camelCase(s.title)] = s;
}

await writeFile(
  path.resolve(__dirname, "../schema.js"),
  `export const Schema = ${JSON.stringify(Schema, null, 2)};\n`
);

