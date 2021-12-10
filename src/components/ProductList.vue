<template>
  <div>
    <h1>Product List</h1>
    <img v-if="isLoading" src="https://i.imgur.com/JfPpwOA.gif" alt="" />
    <ul v-else>
      <li v-for="product in products" :key="product.id">
        {{ product.title }} - {{ product.price }}
        <button
          :disabled="!productIsInStock(product)"
          @click="addProductToCart(product)"
        >
          Add to cart
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    ...mapState(["products", "productIsInStock"]),
    ...mapGetters(["productIsInStock"]),
  },
  methods: {
    ...mapActions(["fetchProduct", "addProductToCart"]),
  },
  created() {
    this.isLoading = true;
    this.fetchProduct();
  },
};
</script>

<style>
</style>