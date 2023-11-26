import { createStore } from 'vuex'

export default createStore({
  state: {
      product : []
  },
  getters: {
  },
  mutations: {
    GetData : (state, data) => {
        state.product = data
    }
  },
  actions: {
      getProduct : async ({ commit }) => {
        const req = await fetch('http://localhost:3000/produtos')
        const res = await req.json()

        commit("GetData", res)
      }
  },
  modules: {
  }
})
