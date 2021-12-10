<template>
<div>
  <h1>Shopping Cart</h1>
    <ul>
        <li v-for="product in products" :key="product.id">
            {{product.title}} - {{product.price}} - {{product.quantity}}
        </li>
    </ul>
    <p id="total">Total: {{ total }}</p>
</div>
</template>

<script>
export default {
computed: {
    products() {
        return this.$store.getters.cartProducts
    },
    total() {
        return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(this.$store.getters.cartTotal)
    }
}
}
</script>

<style>
#total {
    font-weight: bold;
}
</style>