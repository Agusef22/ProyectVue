<template>
  <div
    class="absolute top-[4.5rem] bg-white flex flex-col p-3 rounded-md overflow-y-scroll h-[700px]"
  >
    <div class="flex justify-center items-center gap-x-48">
      <div class="flex justify-center items-center">
        <img
          @click="$emit('back', compDis)"
          class="h-6 cursor-pointer"
          src="../assets/img/back.png"
          alt=""
        />
        <h2 class="font-sans font-normal text-sm">My Order</h2>
      </div>
      <button
        class="pt-0.5 pl-3 pb-0.5 pr-3 w-max text-[#0070E0] bg-white border border-solid border-[#0070E0] rounded hover:bg-[#0070E0] hover:text-white hover:duration-500"
      >
        Empty Cart
      </button>
    </div>
    <div
      v-for="product in productList"
      :key="product.id"
      class="flex justify-center items-center pt-8 gap-x-6"
    >
      <div>
        <img class="h-28 w-28 object-cover" :src="product.photo" alt="" />
      </div>
      <div>
        <h2 class="w-52">{{ product.name }}</h2>
        <span class="font-semibold text-[#0070E0]">${{ product.price }}</span>
        <h3>Amount: {{ product.amount }}</h3>
      </div>
      <img class="h-6 cursor-pointer" src="../assets/img/close.png" alt="" />
    </div>

    <div class="flex justify-center items-center gap-48 pt-8">
      <h2>Total</h2>
      <span>Total Price</span>
    </div>
    <div class="pt-8 pb-4">
      <button
        class="pt-0.5 pl-3 pb-0.5 pr-3 w-max text-[#0070E0] bg-white border border-solid border-[#0070E0] rounded hover:bg-[#0070E0] hover:text-white hover:duration-500"
      >
        Proceed to Pay
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductCart",
  components: {},
  props: ["productList"],
  data() {
    return {
      compDis: false,
    };
  },
};
</script>
<style scoped></style>
