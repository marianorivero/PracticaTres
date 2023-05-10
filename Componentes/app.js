/* Componente global
Vue.component('Titulo',{
    props: ["texto", "textColor"],
    template:`<h1> {{texto}} </h1>`,
});
*/

//Componente local
const titulo = {
    props:['texto'],
    tamplate:`<h1> {{ texto }} </h1>`,
};



new Vue({
    el:'#app',
    data:{},
    components:{//el componente local se especifica
        titulo,
    }
});

Vue.config.devtools = true;