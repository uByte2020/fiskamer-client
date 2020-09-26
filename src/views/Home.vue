<template>
  <div class="home">
    <Header />
    <HomeCarrousel />
    <Category />
    <TopService />
    <AboutUs />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import {
  Header,
  HomeCarrousel,
  Category,
  AboutUs,
  TopService,
  Footer,
} from '@/components'

export default {
  name: 'Home',
  components: {
    Header,
    HomeCarrousel,
    Category,
    AboutUs,
    TopService,
    Footer,
  },
}
</script>
