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
        <div v-show="hasCaption" class="da-carousel-caption">
          <h1 class="da-carousel-caption-header">{{ item.title }}</h1>
          <p class="da-carousel-caption-content">{{ item.content }}</p>
        </div>
      </b-carousel-slide>
      <HomeSearch v-show="hasHomeSearch" class="da-home-search" />
    </b-carousel>
  </div>
</template>
<script>
import HomeSearch from './HomeSearch.vue'
export default {
  name: 'HomeCarrousel',
  components: { HomeSearch },
  props: {
    carouselProp: Array,
    hasCaption: { type: Boolean, default: true },
    hasHomeSearch: { type: Boolean, default: true },
  },
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
      element.setAttribute('style', 'bottom: 27%; left: 12%;')
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

@media (min-width: 1281px) {
  .card-carousel--card {
    min-width: 32%;
  }
}

@media (min-width: 1025px) and (max-width: 1280px) {
  .card-carousel--card {
    min-width: 32%;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .card-carousel--card {
    min-width: 32%;
  }
}

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .card-carousel--card {
    min-width: 32%;
  }
}

@media (min-width: 481px) and (max-width: 767px) {
  .da-carousel-caption {
    width: 80%;
  }
  .da-carousel-caption-header {
    font-size: 1.2rem;
  }
  .da-carousel-caption-content {
    font-size: 1rem !important;
  }
  #home-search > div {
    margin-top: 1% !important;
  }
}

@media (min-width: 320px) and (max-width: 480px) {
}

@media (max-width: 480px) {
  .da-home-search {
    display: none;
  }
  .da-carousel-caption {
    width: 80%;
  }
  .da-carousel-caption-header {
    font-size: 1rem;
  }
  .da-carousel-caption-content {
    font-size: 0.8rem !important;
  }
}
</style>
