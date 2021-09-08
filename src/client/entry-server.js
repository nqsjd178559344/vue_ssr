import createApp from './app'

export default (params) => {
    const { app, router, store } = createApp()
    return {
        app, router, store
    }
}
