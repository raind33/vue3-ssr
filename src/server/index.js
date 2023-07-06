import { renderToString } from '@vue/server-renderer'
import { createApp } from '../app'
import createRouter from "../router/index";
import { createMemoryHistory } from "vue-router";
const express = require('express')

const app = express()
app.use(express.static('build'))
app.get('/', async (req, res) => {
  const app = createApp()
  // 安装路由
  const router = createRouter(createMemoryHistory());
  app.use(router);
  await router.push(req.url || "/"); // 跳转首页
  await router.isReady(); // 在客户端 和服务端我们都需要 等待路由器 先解析 异步路由组件
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
    <div id="app">
    ${htmlStr}
    </div>
    <script src="/client/client.bundle.js"></script>
  </body>
  </html>
  `)

})
app.listen(3009, () => {
  console.log('server is running port 3000....')

})