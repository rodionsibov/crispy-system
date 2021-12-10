<template>
  <div>
    <h1>Shopping Cart</h1>
    <ul>
      <li v-for="product in cartProducts" :key="product.id">
        {{ product.title }} - {{ product.price }} - {{ product.quantity }}
      </li>
    </ul>
    <p id="total">Total: {{ cartTotal }}</p>
    <button @click="$store.dispatch('checkout')">Checkout</button>
    <p v-if="checkoutStatus">{{ checkoutStatus }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(["checkoutStatus"]),
    ...mapGetters(["cartProducts", "cartTotal"]),
  },
};
</script>

<style>
#total {
  font-weight: bold;
}
</style>