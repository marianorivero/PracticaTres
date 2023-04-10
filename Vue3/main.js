const API = "https://jsonplaceholder.typicode.com/users";


Vue.createApp({

  data() {
    return {
      message: 'Hello Vue!'
    };
  },

  methods:{
    saludar(){
      fetch(API)
      .then(res => res.json())
      .then(res => console.log(res));
    }
  },

}).mount('#app')



