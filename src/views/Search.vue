<template>
  <div id="Search">
    <Header />
    <div
      id="Conteudo"
      :style="{ backgroundImage: 'url(' + backgroundimg + ')' }"
      class="mb-5"
    >
      <b-img
        id="img"
        :src="require('../assets/imgs/logo2.png')"
        fluid
        alt="Fiskamer"
      >
      </b-img>
      <HomeSearch backgroundColor="rgba(255, 205, 3, 0.8)" BtnColor="#212529" />
    </div>
    <!-- <Carousel /> -->
    <Pesquisas />
    <Footer />
  </div>
</template>

<script>
import { Header, HomeSearch, Pesquisas, Footer } from '@/components'

export default {
  name: 'Search',
  components: {
    Header,
    HomeSearch,
    // Carousel,
    Footer,
    Pesquisas,
  },
  data() {
    return {
      backgroundimg: require('@/assets/imgs/dj-1.jpg'),
    }
  },
  props: {},
}
</script>

<style scoped>
#Conteudo {
  height: auto;
  min-height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;
}
#img {
  padding: 10px;
  width: 70%;
  height: 65%;
  margin: 50px auto;
}
</style>