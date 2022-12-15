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
          Brand: <span class="font-semibold">{{ product.brand }}</span>
        </p>
        <p class="font-extralight">
          Weight: <span class="font-semibold">{{ product.presentation }}</span>
        </p>
      </div>

      <div class="flex justify-center items-center gap-x-3">
        <button
          class="pt-0.5 pl-3 pb-0.5 pr-3 w-max text-[#0070E0] bg-white border border-solid border-[#0070E0] rounded hover:bg-[#0070E0] hover:text-white hover:duration-500"
          @click="$emit('addToCart', product)"
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
export default {
  name: "ProductAlm",
  props: ["product"],
  data() {
    return {
      extraInfoProduct: false,
    };
  },
};
</script>
<style scoped></style>
