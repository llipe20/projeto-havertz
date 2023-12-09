import { createStore } from 'vuex'

export default createStore({
  state: {
      product : Array,
      idProduct : Number,
      cart : []
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

    // adicionar produto no carrinho
    AddCart : (state, data) => {
      state.cart.push(data)
    },

    // remover produto do carrinho
    RemoveCart : (state, data) => {
      const newCart = state.cart.filter(product => product.id !== data)
      state.cart = newCart
    }
  },
  actions: {
      getProduct : async ({ commit }) => {
        const req = await fetch(`https://json-serve-projeto-havertz-api.vercel.app/produtos`)
        const res = await req.json()

        commit("GetData", res)
      }
  },
  modules: {
  }
})
