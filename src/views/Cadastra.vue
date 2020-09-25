<template>
  <div class="cadastra">
    <div
      id="ConteudoPrincipal"
      :style="{ backgroundImage: 'url(' + backgroundimg + ')' }"
    >
      <div :class="{ cadastro: !fornecedor, Fornecedor: fornecedor }">
        <b-container>
          <b-row class="justify-content-md-center">
            <b-col cols="12" md="12">
              <div>
                <b-img
                  id="img"
                  :src="require('../assets/imgs/logo2.png')"
                  fluid
                  alt="Responsive image"
                >
                </b-img>
              </div>
            </b-col>

            <b-col cols="12" md="12">
              <p class="texto">
                Já possui uma conta?<router-link id="link" to="/login">
                  Entrar</router-link
                >
              </p>
            </b-col>

            <b-col cols="12" md="12">
              <div>
                <button
                  type="button"
                  class="mb-3 botao1"
                  @click="BotaoFornecedor"
                >
                  Fornecedor
                </button>

                <button type="button" class="mb-3 botao" @click="BotaoCliente">
                  Cliente
                </button>
              </div>
            </b-col>
            <!--------------------Form------------>
            <form v-on:submit="Validacao">
              <b-col cols="12" md="12">
                <div class="campoTexto">
                  <b-icon class="icones" icon="person-fill"></b-icon>
                  <input
                    v-model="nome"
                    class="texto"
                    type="text"
                    placeholder="Nome"
                    size="md"
                  />
                </div>
              </b-col>

              <b-col cols="12" md="12">
                <div class="campoTexto">
                  <b-icon class="icones" icon="envelope-fill"></b-icon>
                  <input
                    v-model="email"
                    class="texto"
                    type="email"
                    placeholder="Email"
                    size="md"
                    required
                  />
                </div>
              </b-col>

              <b-col cols="12" md="12">
                <div id="campoTexto">
                  <b-icon class="icones" icon="telephone-fill"></b-icon>
                  <input
                    v-model="telefone"
                    type="tell"
                    class="texto"
                    placeholder="Telefone"
                    size="md"
                    required
                  />
                </div>
              </b-col>

              <b-col cols="12" md="12">
                <div class="campoTexto">
                  <b-icon class="icones" icon="lock-fill"></b-icon>
                  <input
                    v-model="senha"
                    type="password"
                    class="texto"
                    placeholder="Senha"
                    size="md"
                    required
                  />
                </div>
              </b-col>

              <b-col cols="12" md="12">
                <div id="campoTexto">
                  <b-icon class="icones" icon="lock-fill"></b-icon>
                  <input
                    v-model="confirmSenha"
                    type="password"
                    class="texto"
                    placeholder="Confirmar Senha"
                    size="md"
                    required
                  />
                </div>
                <small v-show="senhaIncorreta == true" class="texto"
                  >A senha é diferente</small
                >
              </b-col>

              <b-col cols="12" md="auto">
                <p>
                  <b-form-checkbox :state="checkbox" v-model="aceitar">
                    Aceitar os termos de uso de privacidade</b-form-checkbox
                  >
                </p>
              </b-col>

              <b-col cols="11" md="11">
                <button
                  type="button"
                  size="md"
                  @click="Validacao"
                  class="mb-3 btn"
                >
                  Criar Conta
                </button>
              </b-col>
            </form>
          </b-row>
        </b-container>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Cadastra',
  components: {},
  data() {
    return {
      nome: '',
      email: '',
      telefone: '',
      senha: '',
      confirmSenha: '',
      aceitar: false,
      backgroundimg: require('@/assets/imgs/wedding-room.jpg'),
      senhaIncorreta: false,
      fornecedor: false,
    }
  },
  computed: {
    checkbox() {
      return Boolean(this.aceitar)
    },
  },
  props: {},
  methods: {
    BotaoCliente: function () {
      return (this.fornecedor = false)
    },
    BotaoFornecedor: function () {
      return (this.fornecedor = true)
    },
    Validacao: function () {
      if (
        this.nome.length < 4 ||
        this.senha.length < 4 ||
        this.telefone == ''
      ) {
        this.aceitar = false
        alert('Preencha os dados corretamente')
      } else if (this.senha != this.confirmSenha) {
        this.senhaIncorreta = true
      } else {
        console.log('Dados enviados')
      }
    },
  },
}
</script>
<style scoped>
#ConteudoPrincipal {
  height: auto;
  min-height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  width: auto;
  min-width: 100vw;
  position: absolute;
}
#img {
  padding: 4%;
}
#link {
  color: #cfaf58;
}
p {
  margin-top: 8px;
  margin-left: 12px;
  color: #ffffff;
}
input {
  background: transparent;
  border: 0;
  color: #ffffff;
  font-size: 20px;
  height: 30px;
  line-height: 30px;
  outline: none !important;
  width: 100%;
  border-bottom: 1px solid rgb(248, 246, 246);
}
.cadastro {
  width: 390px;
  background: rgba(63, 59, 59, 0.8) !important;
  margin: 50px auto;
  padding: 10px;
  box-shadow: 1px 2px 7px rgb(32, 25, 25);
  height: 100%;
}
.Fornecedor {
  width: 390px;
  background: rgba(68, 65, 65, 0.8) !important;
  margin: auto;
  padding: 15px;
  border: 1px solid #000000;
  box-shadow: 1px 2px 7px rgb(32, 29, 25);
  height: 100%;
}
.campoTexto {
  margin: 15px auto;
  color: #ffffff;
}
.texto {
  width: 85%;
  color: #ffffff;
}

.btn {
  color: rgb(255, 255, 255);
  background-color: #cc990d;
  margin-left: 9px;
  border-color: none !important;
  width: 300px;
  border-radius: 10px;
}
.btn:active {
  color: #ffffff;
  background-color: #744e07;
}
.btn:hover {
  color: #ffffff;
  background-color: #744e07;
}
.btn:focus {
  color: #ffffff;
  background-color: #744e07;
}

.btn-secondary {
  border-color: none;
}
.btn-secondary:not(:disabled):not(.disabled):active,
.btn-secondary:not(:disabled):not(.disabled).active,
.show > .btn-secondary.dropdown-toggle {
  color: #fff;
  background-color: #744e07;
}
.botao {
  color: rgb(255, 255, 255);
  background-color: #cc990d;
  border-color: none;
  border: none;
  border-left: 1px solid black;
  font-size: 20px;
  width: 150px;
  text-align: center;
}
.botao1 {
  color: rgb(255, 255, 255);
  background-color: #cc990d;
  border-color: none;
  border: none;
  font-size: 20px;
  width: 150px;
  text-align: center;
}
.icones {
  color: #cfaf58;
  font-size: 25px;
  margin-right: 10px;
}
</style>
