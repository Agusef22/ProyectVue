<template>
  <div class="bg-white shadow sticky top-0 z-50">
    <div class="flex justify-between items-center pt-4 pb-4 container mx-auto">
      <product-cart @back="back" v-show="compDis"></product-cart>

      <div class="flex justify-center items-center gap-2">
        <img class="w-10 h-10" src="../assets/img/logo.png" alt="" />
        <h1><span>Ez</span>shop</h1>
      </div>
      <div class="flex justify-center items-center gap-4">
        <login-page v-show="opened"></login-page>
        <register-page v-show="register"></register-page>
        <button
          v-click-outside="hide"
          @click="toggle"
          class="pt-0.5 pl-3 pb-0.5 pr-3 w-max text-[#0070E0] bg-white border border-solid border-[#0070E0] rounded hover:bg-[#0070E0] hover:text-white hover:duration-500"
        >
          Login
        </button>
        <button
          @click="(register = !register), (login = false)"
          class="pt-0.5 pl-3 pb-0.5 pr-3 w-max text-[#0070E0] bg-white border border-solid border-[#0070E0] rounded hover:bg-[#0070E0] hover:text-white hover:duration-500"
        >
          Register
        </button>

        <div class="flex justify-center items-center gap-1 cursor-pointer">
          <img class="w-8 h-8" src="../assets/img/ars.png" alt="" />
          <span>ARS</span>
        </div>
        <img
          @click="compDis = !compDis"
          class="cursor-pointer"
          src="../assets/img/shopping-cart.png"
          alt=""
        />
        <div
          class="absolute right-14 top-2 font-light font-sans bg-[#0070E0] rounded px-1 text-white"
        >
          {{ totalItemsProducts() }}
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import LoginPage from "./LoginPage.vue";
import ProductCart from "./ProductCart.vue";
import RegisterPage from "./RegisterPage.vue";
import ClickOutside from "vue-click-outside";

export default {
  name: "NavPage",
  props: ["productList"],
  components: {
    ProductCart,
    LoginPage,
    RegisterPage,
  },
  data() {
    return {
      compDis: false,
      login: false,
      register: false,
      opened: false,
      totalItems: 0,
    };
  },
  mounted() {
    // const onClick = (evt) => {
    //   if (this.login && !evt.target.isSameNode(this.$refs.loginPage.$el)) {
    //     this.login = false;
    //   }
    // };
    // window.addEventListener("click", onClick);
    // this.popupItem = this.$el;
  },
  methods: {
    back(compDis) {
      this.compDis = false;
      return compDis;
    },
    toggle() {
      this.opened = true;
    },
    hide() {
      this.opened = false;
    },
    totalItemsProducts() {
      this.totalItems = this.$store.state.productList.length;
      return this.totalItems;
    },
  },
  directives: {
    ClickOutside,
  },
};
</script>
<style scoped></style>
