export default {
    setData({ commit }) {
        const payload = {
            name: "new data",
            address: "北京"
        }
        commit("setData", payload)
    }
}
