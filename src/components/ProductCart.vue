<template>
  <div class="pt-6">
    <div class="flex justify-between items-center">
      <div>
        <h2 class="font-sans font-normal text-xl">My Order</h2>
      </div>
      <button
        class="pt-0.5 pl-3 pb-0.5 pr-3 w-max text-[#0070E0] bg-white border border-solid border-[#0070E0] rounded hover:bg-[#0070E0] hover:text-white hover:duration-500"
        @click="$store.commit('EMPTY_CART')"
      >
        Empty Cart
      </button>
    </div>
    <div
      v-for="product in $store.state.cart"
      :key="product.id"
      class="flex justify-between items-center pt-8 gap-x-6"
    >
      <div>
        <img class="h-32 w-32 object-cover" :src="product.photo" alt="" />
      </div>
      <div>
        <h2 class="w-64">{{ product.name }}</h2>
        <span class="font-semibold text-[#0070E0]">${{ product.price }}</span>
        <h3>Amount: {{ product.amount }}</h3>
      </div>
      <img
        @click="$store.commit('REMOVE_FROM_CART', product)"
        class="h-6 cursor-pointer"
        src="../assets/img/close.png"
        alt=""
      />
    </div>
    <div class="flex justify-between items-center">
      <div>
        <h2 class="text-lg">Total ${{ totalPriceProducts() }}</h2>
      </div>
      <div class="pt-8 pb-4">
        <button
          class="pt-0.5 pl-3 pb-0.5 pr-3 w-max text-[#0070E0] bg-white border border-solid border-[#0070E0] rounded hover:bg-[#0070E0] hover:text-white hover:duration-500"
        >
          Proceed to Pay
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "ProductCart",
  data() {
    return {
      totalPrice: 0,
    };
  },
  methods: {
    totalPriceProducts() {
      this.totalPrice = this.$store.state.cart.reduce(
        (acc, prod) => acc + prod.amount * prod.price,
        0
      );
      return this.totalPrice.toFixed(1);
    },
    // createOrder() {
    //   const order = {
    //     userId: this.user.id,
    //     products: this.cart,
    //   };

    //   // mockAPI.post(order)
    // },
  },
  computed: {
    ...mapState(["user", "cart"]),
  },
};
</script>
