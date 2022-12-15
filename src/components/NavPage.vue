<template>
  <div class="bg-white shadow sticky top-0 z-50">
    <div class="flex justify-between items-center pt-4 pb-4 container mx-auto">
      <product-cart
        @back="back"
        :productList="productList"
        v-show="compDis"
      ></product-cart>

      <div class="flex justify-center items-center gap-2">
        <img class="w-10 h-10" src="../assets/img/logo.png" alt="" />
        <h1><span>Ez</span>shop</h1>
      </div>
      <div class="flex justify-center items-center gap-4">
        <login-page v-show="login" ref="loginPage"></login-page>
        <register-page v-show="register"></register-page>
        <button
          @click="(login = !login), (register = false)"
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
      </div>
    </div>
  </div>
</template>
<script>
import LoginPage from "./LoginPage.vue";
import ProductCart from "./ProductCart.vue";
import RegisterPage from "./RegisterPage.vue";

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
    };
  },
  mounted() {
    const onClick = (evt) => {
      if (this.login && !evt.target.isSameNode(this.$refs.loginPage.$el)) {
        this.login = false;
      }
    };
    window.addEventListener("click", onClick);
  },
  methods: {
    back(compDis) {
      this.compDis = false;
      return compDis;
    },
  },
};
</script>
<style scoped></style>
