<template>
    <div id="ConteudoPrincipal" :style="{backgroundImage:'url('+backgroundimg+')'}">
        <div id="ConteudoSecundario">

            <div :class="{'cadastro':!fornecedor,'Fornecedor':fornecedor}">
                <b-container>
                    <b-row class="justify-content-md-center">
                        <b-col cols="12" md="12">
                            <div>
                                <b-img :src="require('../assets/imgs/logo2 copy.png')"  fluid  alt = "Responsive image" > </b-img > 
                            </div>
                        </b-col>

                        <b-col cols="12" md="12">
                            <div  class="campoTexto" >
                                <b-icon class="icones" icon="envelope"></b-icon>
                            <input v-model="email" class="texto"
                                type="email" placeholder="Digite o Email" size="md" required/>
                            </div>
                        </b-col>
                        
                        <b-col cols="12" md="12">
                                <div class="campoTexto">
                                    <b-icon class="icones" icon="lock-fill"></b-icon>
                                    <input v-model="senha" type="password" class="texto"
                                    placeholder="Digite o senha" size="md" required/>
                                </div>
                            </b-col>

                        <b-col cols="12" md="auto">
                            <p><b-form-checkbox v-model="aceitar"> Aceitar os termos de uso de privacidade</b-form-checkbox></p>
                        </b-col>

                        <b-col cols="12" md="12">
                            <b-button type="submit" pill block size="md" class="mb-3 btn"
                            @click="Validacao">
                                <b-icon icon="file-person" aria-hidden="true"></b-icon>
                                Entrar
                            </b-button>
                        </b-col>
                    </b-row>
                </b-container>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            email:null,
            senha:null,
            aceitar:null,
            backgroundimg: require('@/assets/imgs/wedding-room.jpg'),   
            senhaIncorreta:false,
        }
    },
    computed:{
        
    },
    props:{
        add:Object,
    },
    methods:{
        Validacao:function(){
            if(this.nome.length<4||this.senha.length<4){
                alert("incorreto")
            }else if( this.senha!=this.confirmSenha){
                this.senhaIncorreta=true
            }else{
                console.log('Dados enviados')
            }
        }
    },
}
</script>

<style scoped>
    #ConteudoPrincipal{
        height: auto;
        min-height: 100vh;
        background-size: cover;
        background-repeat: no-repeat;
    }
    #ConteudoSecundario{
        position: relative;
        top: 0;
        color: #ffffff;
        height: 100vh;
    }
    .cadastro{
        width: 390px;
        background: rgba(37, 35, 35, 0.8)!important;
        margin: auto;
        padding: 15px;   
        border: 1px solid #050505;
        box-shadow:1px 2px 7px rgb(32, 25, 25);
    }
    .Fornecedor{
        width: 390px;
        background: rgba(68, 65, 65, 0.8)!important;
        margin: auto;
        padding: 15px;   
        border: 1px solid #000000;
        box-shadow:1px 2px 7px rgb(32, 29, 25);
       height: 100vh;
    }
    .campoTexto{
        margin:15px auto;
    }
    
    .btn{
        color: black;
        border-radius: 10px;
        background-color:#cc990d;
    }
    .btn:hover{
        color: rgb(8, 43, 141);
        background-color:#744e07;
        border-radius: 10px;
    }
    .icones{
        color: #cc990d;
        font-size: 25px;
        margin-right: 10px;
    }
    input{
        background: transparent;
        border: 0;
        color: #f2f2f2;
        font-size: 18px;
        height: 30px;
        line-height: 30px;
        outline: none !important;
        width: 85%;
        border-bottom: 1px solid rgb(248, 246, 246); 
    }
</style>