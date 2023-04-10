const API = "https://api.github.com/users/";


const app = Vue.createApp({

  data(){
    return {
      nombre:"",
      datos:null,
      resultado:false,
    }
  },

  methods:{
    async buscar() {
      const response = await fetch(API+this.nombre)
      const data = await response.json()
      this.datos = data;
      this.resultado=true;
      console.log(data)
    }
  }

}).mount('#app')






