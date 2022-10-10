const MeuApp = {
    data(){
        return{
            name: "João Vitor", //dado que é chamado pelo html
            idade: 19
        }
    }
}

Vue.createApp(MeuApp).mount("#app") //monta o app 'MeuApp' dentro da div com id #app