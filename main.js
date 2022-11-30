const app = new Vue({
    el:"#app",
    data (){
        return {
            title1:'Mis Productos',
            info: null
          }
        
    },
    mounted () {
        axios
          .get('https://api.escuelajs.co/api/v1/products?offset=6&limit=6')
          .then(response => (this.info = response.data))
    }
})