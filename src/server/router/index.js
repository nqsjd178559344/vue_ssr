const Router = require("@koa/router")
const fs = require('fs')
const { resolve } = require('path')
const { renderToString } = require('@vue/server-renderer') // vue组件渲染为string,通过服务端直接返回
const serverBundle = require('../../../dist/server-bundle').default
const template = fs.readFileSync(resolve(__dirname, '../../../dist/index.html'), 'utf-8')

const router = new Router()

const renderState = (state, windowKey) => { // 先将数据放入redux,挂载于window上,
    return `<script>window.${windowKey} = ${JSON.stringify(state)}</script>`
}

module.exports = (app) => {
    router.get(['/about', '/'], async (ctx, next) => {
        // ctx.body = "服务端路由成功"
        const { app: appComponent, router: r, store } = serverBundle()
        await r.push(ctx.req.url)
        await r.isReady()
        let appContent = await renderToString(appComponent)
        appContent = `<div id="app">${renderState(store.state,"__INITIAL_STATE__")}${appContent}</div>`
        let html = template.replace('<div id="app"></div>', appContent)
        ctx.body = html
        // ctx.router available
    });
    app
        .use(router.routes())
        .use(router.allowedMethods());
}