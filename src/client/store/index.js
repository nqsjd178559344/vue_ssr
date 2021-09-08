import { createStore } from 'vuex'
import demoModule from './module/demo'
export default () => (
    createStore({
        modules: {
            demo: demoModule()
        }
    })
)
