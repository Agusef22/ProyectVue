<template>
  <div>
    <h2 class="text-center text-lg mt-2">Administration Panel</h2>
    <div class="flex justify-center items-center gap-6">
      <div class="flex flex-col gap-2 ml-6 w-96 shadow-md rounded-md p-6">
        <h3>ABM of Products</h3>
        <label class="font-extralight">Photo:</label>
        <input
          class="border border-black rounded-md p-1"
          type="text"
          placeholder="Url Image"
          v-model="photoProduct"
          required
        />
        <label class="font-extralight">Name:</label>
        <input
          class="border border-black rounded-md p-1"
          type="text"
          v-model="nameProduct"
          required
        />
        <label class="font-extralight">Price:</label>
        <input
          class="border border-black rounded-md p-1"
          type="number"
          placeholder="0"
          v-model="priceProduct"
          required
        />

        <button
          class="mt-2 pt-0.5 pl-3 pb-0.5 pr-3 w-max text-[#0070E0] bg-white border border-solid border-[#0070E0] rounded hover:bg-[#0070E0] hover:text-white hover:duration-500"
          @click="postProduct()"
        >
          Add Product
        </button>
      </div>
      <div class="flex flex-col items-start shadow-md rounded-md p-6">
        <div class="flex justify-center items-center gap-10">
          <p class="text-xl">Product</p>
          <p class="text-xl">Name</p>
          <p class="text-xl">Price</p>
        </div>
        <div
          class="flex flex-col gap-2 ml-6 w-96 shadow-md rounded-md p-6 absolute bg-white right-72 z-0"
          v-show="opened"
        >
          <h3>Modify Product</h3>
          <label class="font-extralight">Photo:</label>
          <input
            class="border border-black rounded-md p-1"
            type="text"
            placeholder="Url Image"
            v-model="productModify.photo"
            required
          />
          <label class="font-extralight">Name:</label>
          <input
            class="border border-black rounded-md p-1"
            type="text"
            v-model="productModify.name"
            required
          />
          <label class="font-extralight">Price:</label>
          <input
            class="border border-black rounded-md p-1"
            type="number"
            placeholder="0"
            v-model="productModify.price"
            required
          />
          <div class="flex">
            <button
              class="mt-2 pt-0.5 pl-3 pb-0.5 pr-3 w-max text-[#0070E0] bg-white border border-solid border-[#0070E0] rounded hover:bg-[#0070E0] hover:text-white hover:duration-500"
              @click="modifyProduct(productId)"
            >
              Accept
            </button>
            <button
              class="ml-2 mt-2 pt-0.5 pl-3 pb-0.5 pr-3 w-max text-white bg-red-600 border border-solid rounded"
              @click="opened = !opened"
            >
              Cancel
            </button>
          </div>
        </div>
        <div class="overflow-y-scroll h-[300px]">
          <div class="mt-2" v-for="product in products" :key="product.id">
            <div class="flex gap-8">
              <img class="h-16" :src="product.photo" alt="" />
              <p>{{ product.name }}</p>
              <p>${{ product.price }}</p>
            </div>

            <div>
              <button
                class="mt-2 pt-0.5 pl-3 pb-0.5 pr-3 w-max text-[#0070E0] bg-white border border-solid border-[#0070E0] rounded hover:bg-[#0070E0] hover:text-white hover:duration-500"
                v-click-outside="hide"
                @click="toggle"
                v-on="
                  onModal(
                    product.id,
                    product.photo,
                    product.name,
                    product.price
                  )
                "
              >
                Modify
              </button>
              <button
                class="ml-2 mt-2 pt-0.5 pl-3 pb-0.5 pr-3 w-max text-white bg-red-600 border border-solid rounded"
                @click="removeProduct(product.id)"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h2>Orders</h2>
    <pre>{{ orders }}</pre>
    <div>
      <p></p>
      <p></p>
      <p></p>
    </div>
  </div>
</template>
<script>
import ClickOutside from "vue-click-outside";
import axios from "axios";
import { mapState } from "vuex";
export default {
  name: "AdminView",
  components: {},

  data() {
    return {
      opened: false,
      orders: null,
      productModify: {
        id: 0,
        photo: "",
        name: "",
        price: 0,
      },
      productId: 0,
      photoProduct: "",
      nameProduct: "",
      priceProduct: "",
    };
  },
  methods: {
    toggle() {
      this.opened = true;
    },

    hide() {
      this.opened = false;
    },
    onModal(id, photo, name, price) {
      this.productId = id;
      this.productModify.id = id;
      this.productModify.photo = photo;
      this.productModify.name = name;
      this.productModify.price = price;
    },
    async postProduct() {
      const APIURL = "https://63b9d9504482143a3f1ce926.mockapi.io/";
      if (
        this.photoProduct === "" ||
        this.nameProduct === "" ||
        this.priceProduct === ""
      ) {
        alert("Complete the inputs");
      } else {
        await axios({
          method: "post",
          url: APIURL + "products",
          data: {
            photo: this.photoProduct,
            name: this.nameProduct,
            price: this.priceProduct,
          },
        });
        this.photoProduct = "";
        this.nameProduct = "";
        this.priceProduct = "";
        alert("added product");
      }

      this.$store.dispatch("getProducts");
    },
    async modifyProduct(id) {
      const APIURL = "https://63b9d9504482143a3f1ce926.mockapi.io/products/";
      if (id === this.productModify.id) {
        await axios({
          method: "put",
          url: APIURL + id,
          data: this.productModify,
        });
      }

      this.opened = false;

      alert("modified product");
    },
    async removeProduct(id) {
      const APIURL = "https://63b9d9504482143a3f1ce926.mockapi.io/products/";
      await axios({
        method: "delete",
        url: APIURL + id,
      });

      alert("product removed");
      this.$store.dispatch("getProducts");
    },
  },
  async created() {
    const { data } = await axios.get(
      "https://63c3271ab0c286fbe5f9b0b1.mockapi.io/orders"
    );
    this.orders = data;
    this.$store.dispatch("getProducts");
  },
  mounted() {
    // prevent click outside event with popupItem.
    this.popupItem = this.$el;
  },
  directives: {
    ClickOutside,
  },
  computed: {
    ...mapState({
      products: (state) => state.products,
    }),
  },
};
</script>
