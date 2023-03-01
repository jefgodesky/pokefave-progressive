import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import { writeFileSync } from 'fs'
import sass from 'sass'

const dir = dirname(fileURLToPath(import.meta.url))
const compiled = sass.compile(resolve(dir, './scss/index.scss'))
writeFileSync(resolve(dir, '../build/public/style.css'), compiled.css, { encoding: 'utf8' })
