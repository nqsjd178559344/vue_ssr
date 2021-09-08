import {
    createRouter,
    createWebHistory,
    createMemoryHistory
} from 'vue-router'

import Home from '../views/Home/index.vue' // index.vue node不可识别
import About from '../views/About/index.vue'

const isSSR = typeof window === 'undefined'
const history = isSSR ? createMemoryHistory() : createWebHistory()

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
]

// 注意状态单例
export default () => createRouter({
    history,
    routes
})
