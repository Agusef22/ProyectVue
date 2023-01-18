<template>
  <div>
    <div
      class="product flex flex-col items-center justify-end gap-2 h-full w-full p-2.5 bg-white rounded-md shadow-xl hover:translate-y-[-2px] transition-all"
    >
      <div>
        <img
          class="w-full object-cover h-40 cursor-pointer"
          :src="product.photo"
          alt=""
        />
      </div>
      <h2 class="text-center font-sans font-normal text-sm">
        {{ product.name }}
      </h2>
      <span class="text-[#0070E0] font-sans text-base font-semibold"
        >${{ product.price }}</span
      >

      <div v-show="extraInfoProduct">
        <p class="font-extralight">
          Description:
          <span class="font-semibold">{{ product.description }}</span>
        </p>
        <p class="font-extralight">
          Material: <span class="font-semibold">{{ product.material }}</span>
        </p>
      </div>

      <div class="flex justify-center items-center gap-x-3">
        <button
          class="pt-0.5 pl-3 pb-0.5 pr-3 w-max text-[#0070E0] bg-white border border-solid border-[#0070E0] rounded hover:bg-[#0070E0] hover:text-white hover:duration-500"
          @click="addToCart"
        >
          Add Cart
        </button>
        <button
          @click="extraInfoProduct = !extraInfoProduct"
          class="pt-0.5 pl-3 pb-0.5 pr-3 w-max text-[#0070E0] bg-white border border-solid border-[#0070E0] rounded hover:bg-[#0070E0] hover:text-white hover:duration-500"
        >
          More Info
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ProductsSell",
  props: ["product"],
  data() {
    return {
      extraInfoProduct: false,
    };
  },
  methods: {
    addToCart() {
      if (!this.user) {
        this.$router.push("login");
        return;
      }
      const tempProduct = this.product;
      let tempCart = this.cart;

      const productExists = this.cart.some((p) => p.id === tempProduct.id);
      if (productExists) {
        tempCart = this.cart.map((p) => {
          if (p.id === tempProduct.id) {
            p.amount++;
          }
          return p;
        });
        this.$store.commit("SET_CART", tempCart);
      } else {
        tempProduct.amount = 1;

        this.$store.commit("ADD_TO_CART", tempProduct);
      }
    },
  },
  computed: {
    ...mapState(["cart", "user"]),
  },
};
</script>
