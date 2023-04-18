const API = "https://api.github.com/users/";


const app = Vue.createApp({

  data(){
    return {
      nombre:"",
      datos:null,
    }
  },

  methods:{
    async buscar() {
      const response = await fetch(API+this.nombre)
      const data = await response.json()
      this.datos = data;
      console.log(data)
    }
  }

}).mount('#app')


/**
      const response = await fetch(API+this.nombre)
      const data = await response.json()
      this.datos = data;
      console.log(data)
 */



