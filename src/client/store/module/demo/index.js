import store from './store'
import actions from './action'
import getters from './getter'
import mutations from './mutations'

export default () => ({
    namespaced: true,
    state: store(),
    getters,
    actions,
    mutations
})
