const vm = new Vue({
    created(){
        const url = 'https://jsonplaceholder.typicode.com/users';

        fetch(url)
        .then(res => res.json())
        .then(res => this.usuarios =res)
    },
    
    el: "#lista",
    data: {
        mayores:[],
        usuarios:[],
    },
});

Vue.config.devtools=true