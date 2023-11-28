import { createStore } from 'vuex'

export default createStore({
  state: {
      product : Array,
      idProduct : Number,
      cart : Array
  },
  getters: {
  },
  mutations: {
    GetData : (state, data) => {
        state.product = data
    },

    UpdateId : (state, data) => {
        state.idProduct = data
    },

    UpdateCart : (state, data) => {
      state.cart.push(data)
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
