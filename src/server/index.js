import { renderToString } from '@vue/server-renderer'
import { createApp } from '../app'

const express = require('express')

const app = express()

app.get('/', async (req, res) => {
  const app = createApp()
  const htmlStr = await renderToString(app)
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <div>vue3 server render</div>
    <div>${htmlStr}</div>
  </body>
  </html>
  `)

})
app.listen(3000, () => {
  console.log('server is running port 3000....')

})