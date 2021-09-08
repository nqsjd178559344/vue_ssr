const Koa = require('koa')
const server = require('koa-static')
const app = new Koa()
const { resolve } = require('path')

const router = require("./router")
router(app)

app.use(server(resolve(__dirname,'../../dist')))
app.listen(3000, () => {
    console.log('server is running 3000')
})
