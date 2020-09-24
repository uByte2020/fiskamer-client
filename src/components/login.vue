<template>
    <div id="ConteudoPrincipal" :style="{backgroundImage:'url('+backgroundimg+')'}">
        <div id="login">
            <b-container>
                <b-row class="justify-content-md-center">
                    <b-col cols="12" md="12">
                        <div>
                            <b-img id="img" :src="require('../assets/imgs/logo2 copy.png')"  fluid  alt = "Responsive image" > </b-img > 
                        </div>
                    </b-col>

                    <b-col cols="12" md="12">
                        <p>Não possui uma conta? <router-link class="link" to="/cadastrar">Criar conta</router-link></p>
                    </b-col>

                    <form v-on:submit="Validacao">
                        <b-col cols="12" md="12">
                            <div  class="texto" >
                                <b-icon class="icones" icon="envelope-fill"></b-icon>
                            <input v-model="email" class="texto"
                                type="email" placeholder="Email" size="md" required/>
                            </div>
                        </b-col>
                        
                        <b-col cols="12" md="12">
                                <div class="texto">
                                    <b-icon class="icones" icon="lock-fill"></b-icon>
                                    <input v-model="senha" type="password" class="texto"
                                    placeholder="Senha" size="md" required/>
                                </div>
                            </b-col>

                        <b-col cols="12" md="auto">
                            <p><b-form-checkbox :state="checkbox" v-model="concordo"> Mantenha-se conectado 
                                <router-link class="link" to="/">Esqueci a senha</router-link></b-form-checkbox>   
                            </p>
                        </b-col>

                        <b-col cols="12" md="12">
                            <b-button type="submit" pill block size="md" class="mb-3 btn"
                            @click="Validacao()">
                                Login
                            </b-button>
                        </b-col>
                    </form>
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            email:"",
            senha:"",
            concordo:false,
            backgroundimg: require('@/assets/imgs/wedding-room.jpg'),   
            
        }
    },
    computed:{
        checkbox(){
            return Boolean(this.concordo)
        }
    },
    props:{
        add:Object,
    },
    methods:{
        Validacao:function(){
            return console.log('Dados enviados')
        }
    },
}
</script>

<style scoped>
    #ConteudoPrincipal{
        height: auto;
        min-height: 100vh;
        width:auto;
        min-width: 100vw;
        background-size:cover;
        background-repeat: no-repeat;
        position: absolute;
    }
    #login{
        width: 390px;
        background: rgba(37, 35, 35, 0.8)!important;
        margin:60px auto;
        padding: 15px;   
        border: 1px solid #050505;
        box-shadow:1px 2px 7px rgb(32, 25, 25);
    }
    .texto{
        margin:10px auto;
    }
    
    .btn{
        color: rgb(255, 255, 255);
        border-radius: 10px;
        background-color:rgb(230, 168, 0);
    }
    .btn:hover{
        color: rgb(255, 255, 255);
        background-color:rgb(235, 191, 71);
        border-radius: 10px;
    }
    .btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active, .show > .btn-secondary.dropdown-toggle {
    color: #fff;
    background-color:#744e07;
    border: none;
    }
    .icones{
        color: rgb(235, 191, 71);
        font-size: 25px;
        margin-right: 10px;
    }
    #img{
        padding: 4%;
    }
    .link{
        color:rgb(235, 191, 71) !important;
    }
    input{
        background: transparent;
        border: 0;
        color: #f2f2f2;
        font-size: 18px;
        outline: none !important;
        width: 85%;
        border-bottom: 1px solid rgb(248, 246, 246);
    }
    p{
        margin-top:10px;
        margin-left: 7px;
        color:#ffffff;
    }
</style>