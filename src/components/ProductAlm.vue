<template>
  <div>
    <div class="product flex flex-col items-center justify-end gap-2 h-full w-full p-2.5 bg-white rounded-md shadow-xl hover:translate-y-[-2px] transition-all">
      <div>
        <img class="w-full object-cover h-40 cursor-pointer" :src="info.photo" alt="">
      </div>
      <h2 class="text-center font-sans font-normal text-sm">{{info.name}}</h2>
      <span class="text-[#0070E0] font-sans text-base font-semibold">${{info.price}}</span>
      <button class="pt-0.5 pl-3 pb-0.5 pr-3 w-max text-[#0070E0] bg-white border border-solid border-[#0070E0] rounded hover:bg-[#0070E0] hover:text-white hover:duration-500">Agregar Al Carrito</button>
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'ProductAlm',
  props: ["info"],

}
</script>
<style scoped>

</style>


