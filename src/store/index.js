import { createStore } from 'vuex'

export default createStore({
  // data
  state: {
    products: []
  },
  // computed properties
  getters: {
    productsCount() {

    }
  },
  // are responsible for single state changes
  mutations: {
    setProducts(state, products) {
      state.products = products
    }
  },
  // methods
  actions: {
    fetchProducts() {

    }
  },
  modules: {
  }
})
