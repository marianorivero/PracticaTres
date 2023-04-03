var vm = new Vue({
    el: "#form",
    data:{
        select:"",
        paises: ['Argentina', 'Uruguay'],
        provinciasArgentinas: ['Buenos Aires','Mendoza','Entre Rios','Chubut'],
        provinciasUruguayas:['Montevideo','Artigas','Canelones','Flores'],
    },
});

Vue.config.devtools=true