import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import express from 'express'

import homeRouter from './routes/home.js'

const pwd = dirname(fileURLToPath(import.meta.url))
const server = express()
const port = process.env.PORT ?? 3000

server.use(express.static(join(pwd, 'public')))
server.set('view engine', 'ejs')
server.set('views', join(pwd, 'views'))

server.use('/', homeRouter)

server.listen(port, () => {
  console.log(`⚡ Server is running at http://localhost:${port}`)
})
