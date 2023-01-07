import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state : {
      productList: []
  },
  mutations : {
    ADD_TO_CART(state, product) {
      const productExists = state.productList.some((p) => p.id === product.id);
      if (productExists) {
          state.productList = state.productList.map((p) => {
            if (p.id === product.id) {
              p.amount++;
            }
            return p;
          });
        } else {
          product.amount = 1;
          state.productList.push(product);
        }
    },
    REMOVE_FROM_CART(state,product) {
      //Encuentra el indice y desde ahi elimina uno 
      state.productList.splice(state.productList.findIndex(p => p.id == product.id), 1);
    },
    EMPTY_CART(state) {
      state.productList = []
    }      
  },
  actions: {

  }
})

