<template>
  <div class="home">
    <Header />
    <HomeCarrousel />
    <TopService />
  </div>
</template>

<script>
// @ is an alias to /src
import { Header, HomeCarrousel, TopService } from '@/components'

export default {
  name: 'Home',
  components: {
    Header,
    HomeCarrousel,
    TopService,
  },
}
</script>
