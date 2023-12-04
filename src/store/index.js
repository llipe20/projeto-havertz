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
      console.log(state.cart)
    },

    // remover produto do carrinho
    RemoveCart : (state, data) => {
      const newCart = state.cart.filter(product => product.id == data.id)
      state.cart = newCart
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
