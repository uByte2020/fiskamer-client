<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-4 col-lg-4" id="Pesquisas">
        <b-form-input
          type="text"
          placeholder="Search"
          v-model="Buscar"
          id="search"
        ></b-form-input>
        <div class="row">
          <div
            class="col-sm-12 col-md-12 col-lg-12"
            v-for="(search, index) in SearchElement"
            :key="index"
          >
            <div v-if="search.espaco == Buscar">
              {{ search.espaco }}
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-8 col-lg-8">
        <Service v-for="service in services" :key="service._id" :service="service"/>
      </div>
    </div>
  </div>
</template>

<script>
import Service from './Service'
export default {
  components: {
    Service,
  },
  data() {
    return {
      Buscar: '',
      Localizacao: [{ espaco: 'Luanda' }, { espaco: 'Bié' }],
      services:[
        {
          _id:1,
          nome: 'Why do we use it',
          descricao:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
          coverImage:require('@/assets/imgs/salao.jpg'),
          categoria:{
            categoria:'Salão'
          },
          classification:4,
          location:'Av 21 de Janeiro, Morro Bento',
          price:0.0,
          fornecedor:{
            telemovel:940363168
          }
        },
        {
          _id:2,
          nome: 'What is Lorem Ipsum',
          descricao:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
          coverImage:require('@/assets/imgs/salao.jpg'),
          categoria:{
            categoria:'Buffet'
          },
          classification:4,
          location:'Av 21 de Janeiro, Morro Bento',
          price:0.0,
          fornecedor:{
            telemovel:940363168
          }
        }
      ]
    }
  },
  props: {
    name: Object,
    local: String,
  },
  computed: {
    SearchElement() {
      return this.Localizacao.filter((Search) =>
        Search.espaco.match(this.Buscar)
      )
    },
  },
}
</script>

<style scoped>
#Pesquisas {
  margin-bottom: 10px;
  float: left;
  width: 100%;
}
#itens {
  width: 75%;
  margin: 4px 0px;
}
#Search_txt {
  width: 75%;
}
#drop {
  width: 200px;
  font-weight: 200;
  color: #0000 !important;
  text-decoration: none;
}
@media (max-width: 600px) {
  #Pesquisas {
    width: 100%;
    margin: auto auto 10px auto;
    border: none;
  }

  #Search_txt {
    width: 75%;
    margin: auto;
  }

  #itens {
    width: 75%;
    margin: auto;
  }
}
</style>