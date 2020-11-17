<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-6 col-sm-4">
          <img :src="service.coverImage" class="img-fluid img service-coverImage" alt="" @click="goToDetalhe(service)"/>
        </div>
        <div class="col-6 col-sm-8" id="conteudo">
          <h4 @click="goToDetalhe(service)" class="service-name">{{service.nome}}</h4>
          <h6 class="service-category">{{service.categoria.categoria}}</h6>
          <p class="servico-desc">
            {{service.descricao}}
          </p>
          <div class="service-btn">
            <button type="button" class="btn btn-link icones">
              <b-icon icon="suit-heart"></b-icon>
            </button>
            <button type="buttom" class="btn bot">Orçamento</button>
            <button type="buttom" class="btn bot">Solicitar</button>
          </div>
        </div>
      </div>
      <hr style="border-top: 1px solid rgba(0, 0, 0, 0.3)"/>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    service: Object
  },
  data:()=>{
    return{
    }
  },
  methods:{
      goToDetalhe(service){
        this.$router.push({ name: 'detalhe-servico', params: { service } })
      }
  }
}
</script>

<style scoped>
.service-btn {
  float: right;
  margin-right: 5px;
  margin-top: 4px;
}
.icones {
  font-size: 18px;
  margin-right: 5px;
  color: black;
}
.bot {
  margin: 5px;
  background-color: rgb(230, 168, 0);
  color: #ffff;
}
.bot:hover{
  background-color: rgb(230, 168, 0);
  color: #ffff;
}

p {
  text-align: left;
  font-size: 0.9rem;
}

.service-name, .service-coverImage{
  cursor: pointer;
}

h4,
h6 {
  text-align: left;
}

.servico-desc{
  height: 65px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: justify;
    font-size: .9rem;
}

.service-category{
  font-size: .7rem;
  text-transform: uppercase;
    font-weight: 700;
}
</style>