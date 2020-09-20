<template>
  <div class="home">
    <Header />
    <HomeCarrousel />
  </div>
</template>

<script>
// @ is an alias to /src
import { Header, HomeCarrousel } from '@/components'

export default {
  name: 'Home',
  components: {
    Header,
    HomeCarrousel,
  },
}
</script>
