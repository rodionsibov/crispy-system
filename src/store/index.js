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
    fetchProducts(context) {
      shop.getProducts((products) => {
        context.commit('setProducts', products)
      });
    },
    addToCart(context, product) {
      if(product.inventory > 0) {
        context.commit('pushProductToCart', product)
      } else {
        // show out of stock message
      }
    }
  },
  modules: {
  }
})
