var v = new Vue({
    el: "#evento",
    data: {
        nuevoNombre: "",
        contador: 0,
        agregadosRecientes: [],
        personas: [
            {nombre:"Marcos"},
            {nombre:"Pedro"},
            {nombre:"Jose"},
            {nombre:"Julia"},
            {nombre:"Felix"},
            {nombre:"Alfredo"}
        ]
    },
    methods:{
        agregarNombre(){
            this.personas.unshift({nombre:this.nuevoNombre});
            this.agregadosRecientes.unshift(this.nuevoNombre);
            this.contador++;
        }
    }
})

Vue.config.devtools=true
