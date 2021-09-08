import {
    createApp,
    createSSRApp
} from 'vue'
import App from './App.vue'
// import { createRouter } from 'vue-router' 
import createRouter from './router'
import createStore from './store'

export default function () {
    const router = createRouter()
    const store = createStore()
    const isSSR = typeof window === 'undefined' // dom亦可
    const app = (isSSR ? createSSRApp : createApp)(App)
    app.use(router).use(store)
    return {
        app,
        router,
        store
    }
}
