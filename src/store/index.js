import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import router from '../router/index'


Vue.use(Vuex)

export default new Vuex.Store({
  state : {
      cart: [],
      products: [],
      user: null,
  },
  mutations : {
    ADD_TO_CART(state, product) {
        state.cart.push(product);
    },
    REMOVE_FROM_CART(state,product) {
      //Encuentra el indice y desde ahi elimina uno 
      state.cart.splice(state.cart.findIndex(p => p.id == product.id), 1);
    },
    EMPTY_CART(state) {
      state.cart = []
    },
    SET_PRODUCTS(state,products){
      state.products = products
    },
    SET_USER(state, user) {
      state.user = user
    },
    SET_CART(state, cart) {
      state.cart = cart
    },
    
  },
  actions: {
    async getProducts({commit}) {
      const {data} = await axios.get("https://63b9d9504482143a3f1ce926.mockapi.io/products")
      commit("SET_PRODUCTS", data)
    },
    logout({commit}) {
      commit("SET_USER", null)
      router.push('/')
    },
    
  }
})

