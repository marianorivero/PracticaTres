const API = "https://api.github.com/users/";


const app = Vue.createApp({

  data(){
    return {
      nombre:"",
      datos:null,
      favoritos:new Map()
    };
  },


  computed:{
    esFavorito(){
      return this.favoritos.has(this.datos.id);
    }
  },


  methods:{
    async buscar() {
      const response = await fetch(API+this.nombre);
      const res = await response.json();
      this.datos = res;
      //console.log(res)
    },


    agregarFavoritos(){
      this.favoritos.set(this.datos.id, this.datos);
      //console.log(this.favoritos)
    },

    eliminarFavoritos(){
      this.favoritos.delete(this.datos.id);
      //console.log(this.favoritos)
    }

  }


}).mount('#app')




