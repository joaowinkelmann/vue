const MeuApp = {
    data(){
        return{
            name: "João Vitor", //dado que é chamado pelo html
            idade: 19,
            input_name: "" // está bindado com o input v-model
        }
    },
    methods: {
        submitForm(e){
            e.preventDefault();
            console.log(this.input_name);

            this.name = this.input_name;
        }
    }
}

Vue.createApp(MeuApp).mount("#app") //monta o app 'MeuApp' dentro da div com id #app