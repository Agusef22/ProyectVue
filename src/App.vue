<template>
  <div class="container-bg" id="app">
    <NavPage/>
    <div class="container">
      <h2 class="font-sans text-4xl pt-4">Almacen</h2>
      <div class="container-products">
        <ProductAlm v-for="product in info" :key="product.id" :info="product"/>
      </div>
    </div>
  </div>
</template>

<script>
import ProductAlm from './components/ProductAlm'
import axios from "axios";
import NavPage from './components/NavPage.vue';

export default {
  name: 'App',
  components: {
    ProductAlm,
    NavPage
  },
  data() {
    return {
      info: null
    }
  },
  mounted() {
    axios
      .get('https://challenge-api.aerolab.co/products')
      .then(response => console.log((this.info = response.data.products)))
    
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .container{
    margin: 0 auto;
    width: 80%;
    max-width: 1200px;
  }

  .container-bg {
    background-color: #f5f5f5;
  }

  .container-products {
    display: grid;
    grid-template-columns: repeat(auto-fill, 195px);
    grid-gap: 1rem;
    justify-content: space-between;
    padding: 1em 0;
  }

</style>
