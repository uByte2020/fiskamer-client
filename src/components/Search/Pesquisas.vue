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
        <Spaces />
      </div>
    </div>
  </div>
</template>

<script>
import Spaces from './Spaces'
export default {
  components: {
    Spaces,
  },
  data() {
    return {
      Buscar: '',
      Localizacao: [{ espaco: 'Luanda' }, { espaco: 'Bié' }],
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
  border-right: 1px rgb(155, 151, 151) solid;
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
@media (max-width: 700px) {
  #Pesquisas {
    float: left;
    width: 100%;
    margin: auto auto 10px auto;
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