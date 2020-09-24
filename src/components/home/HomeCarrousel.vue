<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        v-for="(item, i) in carousel"
        v-bind:key="i"
        class="da-carousel-slide"
        :img-src="item.image"
      >
        <div class="da-carousel-caption">
          <h1 class="da-carousel-caption-header">{{ item.title }}</h1>
          <p class="da-carousel-caption-content">{{ item.content }}</p>
        </div>
      </b-carousel-slide>
      <HomeSearch />
    </b-carousel>
  </div>
</template>
<script>
import HomeSearch from './HomeSearch.vue'
export default {
  name: 'HomeCarrousel',
  components: { HomeSearch },
  props: ['carouselProp'],
  data() {
    return {
      slide: 0,
      sliding: null,
      carouselData: [
        {
          image: require('../../assets/imgs/salao.jpg'),
          title: 'Encontre tudo que precisa para o seu evento',
          content: `Diga-nos o serviço de que precisa, receba orçamentos, contrate os fornecedores adequados e organize o seu evento sem sair de casa`,
        },
      ],
    }
  },
  methods: {
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    },
  },
  computed: {
    carousel() {
      return this.carouselProp || this.carouselData
    },
  },
  created() {},
  mounted() {
    document.getElementsByClassName('carousel-caption').forEach((element) => {
      element.setAttribute('style', 'bottom: 30%; left: 12%;')
    })
  },
}
</script>

<style scoped>
.da-carousel-caption {
  width: 60%;
}
.da-carousel-caption .da-carousel-caption-header,
.da-carousel-caption .da-carousel-caption-content {
  text-align: left;
}

.da-carousel-caption .da-carousel-caption-header {
  font-weight: 500;
}

.da-carousel-caption .da-carousel-caption-content {
  font-size: 1.2rem;
}
</style>
