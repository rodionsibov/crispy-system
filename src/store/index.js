import { createStore } from 'vuex'
import shop from "@/api/shop";

export default createStore({
  // data
  state: {
    products: []
  },
  // computed properties
  getters: {
    availableProducts(state) {
      return state.products.filter(product => product.inventory > 0)
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
    fetchProducts({ commit }) {
      shop.getProducts((products) => {
        commit('setProducts', products)
      });
    },
  },
  modules: {
  }
})
