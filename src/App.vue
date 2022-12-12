<template>
  <div class="bg-[#f5f5f5] font-sans font-normal text-sm" id="app">
    <NavPage :productList="productList" />
    <div class="container mx-auto">
      <h2 class="font-sans text-4xl pt-4">Almacen</h2>
      <div class="container-products">
        <ProductAlm v-for="product in products" :key="product.id" :product="product" @addToCart="addToCart" />
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
    NavPage,
  
  },
    data() {
      return {
      products: null,
      productList: [],
    }
  },
  mounted() {
    axios
      .get('https://challenge-api.aerolab.co/products')
      .then(response => console.log((this.products = response.data.products)))
    
  },
  methods: {
    addToCart(product) {
      // pasarle a NavPage product
      this.productList.push(product)
      
    },
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .container-products {
    display: grid;
    grid-template-columns: repeat(auto-fill, 195px);
    grid-gap: 1rem;
    justify-content: space-between;
    padding: 1em 0;
  }

  @media (max-width: 1024px) { 
    .container-products {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
   }
   @media (max-width: 768px) { 
    .container-products {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
   }
   @media (max-width: 425px) { 
    .container-products {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
   }
</style>
