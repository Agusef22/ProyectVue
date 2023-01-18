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
          @click="createOrder()"
        >
          Proceed to Pay
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import axios from "axios";
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
    async createOrder() {
      const APIURL = "https://63c3271ab0c286fbe5f9b0b1.mockapi.io/orders";
      const order = {
        userId: this.user.id,
        userName: this.user.firstname,
        products: this.cart,
      };
      if (this.cart.length === 0) {
        alert("please put at least one product in the cart");
      } else {
        await axios({
          method: "post",
          url: APIURL,
          data: order,
        });
        alert("successful purchase, Thanks you");
        this.$store.commit("EMPTY_CART");
        this.$router.push("/");
      }
    },
  },
  computed: {
    ...mapState(["user", "cart"]),
  },
};
</script>
