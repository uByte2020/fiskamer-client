<template>
  <div class="home">
    <Header />
    <HomeCarrousel />
    <TopService />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import { Header, HomeCarrousel, TopService, Footer } from '@/components'

export default {
  name: 'Home',
  components: {
    Header,
    HomeCarrousel,
    TopService,
    Footer,
  },
}
</script>
