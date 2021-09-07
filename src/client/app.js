import {
    createApp,
    createSSRApp
} from 'vue'
import App from './App.vue'

export default function () {
    const isSSR = typeof window === 'undefined' // dom亦可
    const app = (isSSR ? createSSRApp : createApp)(App)
    return {
        app
    }
}
