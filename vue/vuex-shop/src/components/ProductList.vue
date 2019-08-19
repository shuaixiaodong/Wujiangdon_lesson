<template>
  <div>
    <ul>
      <li 
        v-for="product in products"
        :key="product.id">
        {{product.title}}
        <br/>
        <button
          @click="addProductToCart(product)"
        >Add to Cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex';
// import {mapActions}
export default {
  computed: mapState({
    products: state => state.products.all
  }),
  methods: mapActions('cart',[
    'addProductToCart'
  ]),
  created() {
    this.$store.dispatch('products/getAllProducts');
  }
}
</script>

<style>

</style>
