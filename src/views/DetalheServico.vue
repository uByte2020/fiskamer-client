<template>
  <div>
    <Header />
    <DetalheServicoHeader :service="service"/>
    <div class="row pl-5 mx-0">
      <div class="col col-md-8 col-lg-8 ml-0 pl-0">
        <div class="row ml-0 pl-0">
          <div class="col-md-12 ml-0 pl-0">
            <HomeCarrousel :hasHomeSearch="false" :hasCaption="false" />
          </div>
        </div>
        <div class="row py-3 mx-0 px-0">
          <div class="col col-md-12 ml-0 pl-0">
            <div class="text-left">
              <h5>Descrição:</h5>
              <p class="text-justify">
                {{service.descricao}}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col col-md-4 mr-0 pr-5">
        <PedirOrcamento />
      </div>
    </div>
    <Comentarios />

    <Footer />
  </div>
</template>

<script>
import {
  Header,
  DetalheServicoHeader,
  HomeCarrousel,
  PedirOrcamento,
  Comentarios,
  Footer,
} from '@/components'
export default {
  name: 'DetalheServico',
  components: {
    Header,
    DetalheServicoHeader,
    PedirOrcamento,
    HomeCarrousel,
    Comentarios,
    Footer,
  },
  props:{
    service: {
      type:Object,
      default: function(){
        return {}
      }
    }
  },
  data() {
    return {}
  },
  methods: {},
  computed: {},
}
</script>

<style scoped></style>
