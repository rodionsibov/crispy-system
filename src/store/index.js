import { createStore } from 'vuex'
import shop from "@/api/shop";

export default createStore({
  // data
  state: {
    products: [],
    cart: []
  },
  // computed properties
  getters: {
    availableProducts(state) {
      return state.products.filter(product => product.inventory > 0)
    },
    cartProducts(state) {
      return state.cart.map(cartItem => {
        const product = state.products.find(product => product.id === cartItem.id)
        return {
          title: product.title,
          price: product.price,
          quantity: cartItem.quantity
        }
      })
    },
    cartTotal(state, getters) {
      return getters.cartProducts.reduce((total, product) => total += product.price * product.quantity, 0)
    }
  },
  // are responsible for single state changes
  mutations: {
    setProducts(state, products) {
      state.products = products
    },
    pushProductToCart(state, productId) {
      state.cart.push({
        id: productId,
        quantity: 1
      })
    },
    incrementItemQuantity(state, cartItem) {
      cartItem.quantity++
    },
    decrementProductInventory(state, product) {
      product.inventory--
    },
  },
  // methods
  actions: {
    fetchProducts({ commit }) {
      return new Promise((resolve) => {
        shop.getProducts((products) => {
          commit('setProducts', products)
          resolve()
        })
      })
    },
    addProductToCart(context, product) {
      if (product.inventory > 0) {
        const cartItem = context.state.cart.find(item => item.id === product.id)

        if (!cartItem) {
          context.commit('pushProductToCart', product)
        } else {
          context.commit('incrementItemQuantity', cartItem)
        }

        context.commit('decrementProductInventory', product)
      }
    }
  },
  modules: {
  }
})
