<template>
  <div>
    <Header />
    <DetalheServicoHeader />
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
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
  props: {},
  data() {
    return {}
  },
  methods: {},
  computed: {},
}
</script>

<style scoped></style>
