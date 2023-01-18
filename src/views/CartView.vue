<template>
  <div class="font-sans font-normal text-sm">
    <div class="container mx-auto"><product-cart></product-cart></div>
  </div>
</template>
<script>
import ProductCart from "@/components/ProductCart.vue";
export default {
  name: "CartView",
  components: { ProductCart },

  data() {
    return {};
  },
};
</script>
<style lang="" scoped></style>
