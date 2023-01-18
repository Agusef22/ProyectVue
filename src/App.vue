<template>
  <div id="app">
    <div class="bg-white shadow sticky top-0 z-50">
      <div
        class="flex justify-between items-center pt-4 pb-4 container mx-auto"
      >
        <div class="flex justify-center items-center gap-2">
          <img class="w-10 h-10" src="./assets/img/logo.png" alt="" />

          <router-link to="/"
            ><h1><span>Ez</span>shop</h1></router-link
          >
        </div>
        <div class="flex justify-center items-center gap-4">
          <div v-if="!user" class="flex items-center gap-4">
            <router-link to="login"
              ><button
                class="pt-0.5 pl-3 pb-0.5 pr-3 w-max text-[#0070E0] bg-white border border-solid border-[#0070E0] rounded hover:bg-[#0070E0] hover:text-white hover:duration-500"
              >
                Login
              </button></router-link
            >
            <router-link to="register"
              ><button
                class="pt-0.5 pl-3 pb-0.5 pr-3 w-max text-[#0070E0] bg-white border border-solid border-[#0070E0] rounded hover:bg-[#0070E0] hover:text-white hover:duration-500"
              >
                Register
              </button></router-link
            >
          </div>

          <div v-else>
            <button
              class="pt-0.5 pl-3 pb-0.5 pr-3 w-max text-[#0070E0] bg-white border border-solid border-[#0070E0] rounded hover:bg-[#0070E0] hover:text-white hover:duration-500"
              @click="$store.dispatch('logout')"
            >
              Logout
            </button>
          </div>

          <div class="flex justify-center items-center gap-1 cursor-pointer">
            <img class="w-8 h-8" src="./assets/img/ars.png" alt="" />
            <span class="text-sm">ARS</span>
          </div>

          <router-link to="/cart"
            ><img
              class="cursor-pointer"
              src="./assets/img/shopping-cart.png"
              alt=""
          /></router-link>
          <!-- <div
            class="absolute right-14 top-2 font-light font-sans bg-[#0070E0] rounded px-1 text-white"
          ></div> -->
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["user"]),
  },
};
</script>

<style></style>
