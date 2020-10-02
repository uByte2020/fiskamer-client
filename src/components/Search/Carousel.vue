<template>
  <div id="v-carousel" class="mt-5">
    <h3>Nossos serviços</h3>
    <div class="card-carousel-wrapper">
      <div
        class="card-carousel--nav__left"
        @click="moveCarousel(-1)"
        :disabled="atHeadOfList"
      ></div>

      <div class="card-carousel">
        <div class="card-carousel--overflow-container">
          <div
            class="card-carousel-cards"
            :style="{
              transform: 'translateX' + '(' + currentOffset + 'px' + ')',
            }"
            @resize="updatePaginationFactor()"
          >
            <div
              v-bind:key="i"
              v-for="(item, i) in items"
              :service="item"
              class="card-carousel--card"
            >
              <img v-bind:src="item.foto" class="img-fluid" />
              <div id="texto">
                <h2>{{ item.Nome }}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="card-carousel--nav__right"
        @click="moveCarousel(1)"
        :disabled="atEndOfList"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  components: {
    // carouselitem,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      items: [
        {
          foto: require('@/assets/imgs/dj-1.jpg'),
          Nome: 'Djs',
        },
        {
          foto: require('@/assets/imgs/dj-1.jpg'),
          Nome: 'Djs',
        },
        {
          foto: require('@/assets/imgs/logo.png'),
          Nome: 'Djs',
        },
        {
          foto: require('@/assets/imgs/pattern.jpg'),
          Nome: 'Djs',
        },
        {
          foto: require('@/assets/imgs/services.jpg'),
          Nome: 'Djs',
        },
        {
          foto: require('@/assets/imgs/supplies.jpg'),
          Nome: 'Djs',
        },
        {
          foto: require('@/assets/imgs/pattern.jpg'),
          Nome: 'Djs',
        },
        {
          foto: require('@/assets/imgs/services.jpg'),
          Nome: 'Djs',
        },
        {
          foto: require('@/assets/imgs/supplies.jpg'),
          Nome: 'Djs',
        },
      ],
      currentOffset: 0,
      windowSize: 3,
      paginationFactor: 268.66,
    }
  },
  computed: {
    atEndOfList() {
      return (
        this.currentOffset <=
        this.paginationFactor * -1 * (this.items.length - this.windowSize)
      )
    },
    atHeadOfList() {
      return this.currentOffset >= 0
    },
  },
  methods: {
    moveCarousel(direction) {
      // Find a more elegant way to express the :style. consider using props to make it truly generic
      if (direction === 1 && !this.atEndOfList) {
        this.currentOffset -= this.paginationFactor
      } else if (direction === -1 && !this.atHeadOfList) {
        this.currentOffset += this.paginationFactor
      }
    },
    updatePaginationFactor() {
      console.log('Changed')
    },
  },
  mounted() {
    const firstCardItem = document.getElementsByClassName(
      'card-carousel--overflow-container'
    )[1].offsetWidth
    this.paginationFactor = firstCardItem / 3
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  background: #f8f8f8;
  color: #2c3e50;
  font-family: 'Source Sans Pro', sans-serif;
}
#v-carousel h3 {
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 600;
}
#texto {
  margin: -120px auto auto 125px;
  font-size: 20px;
  font-family: New Century Schoolbook, TeX Gyre Schola, serif;
  color: rgb(230, 168, 0);
  position: absolute;
}
.card-carousel-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0 40px;
  color: #666a73;
}
.card-carousel {
  display: flex;
  justify-content: center;
  /* width: 640px; */
  width: 80%;
}
.card-carousel--overflow-container {
  overflow: hidden;
}
.card-carousel--nav__left,
.card-carousel--nav__right {
  display: inline-block;
  width: 15px;
  height: 15px;
  padding: 10px;
  box-sizing: border-box;
  border-top: 2px solid #ffcd03;
  border-right: 2px solid #ffcd03;
  font-weight: 700;
  cursor: pointer;
  margin: 0 20px;
  transition: transform 150ms linear;
}
.card-carousel--nav__left[disabled],
.card-carousel--nav__right[disabled] {
  opacity: 0.2;
  border-color: black;
}
.card-carousel--nav__left {
  transform: rotate(-135deg);
}
.card-carousel--nav__left:active {
  transform: rotate(-135deg) scale(0.9);
}
.card-carousel--nav__right {
  transform: rotate(45deg);
}
.card-carousel--nav__right:active {
  transform: rotate(45deg) scale(0.9);
}
.card-carousel-cards {
  display: flex;
  transition: transform 150ms ease-out;
  transform: translatex(0px);
}

h1 {
  font-size: 3.6em;
  font-weight: 100;
  text-align: center;
  margin-bottom: 0;
  color: #42b883;
}

.card-carousel--card {
  margin: 0 1%;
  cursor: pointer;
  box-shadow: 0 4px 15px 0 rgba(40, 44, 53, 0.06),
    0 2px 2px 0 rgba(40, 44, 53, 0.08);
  background-color: #fff;
  border-radius: 4px;
  z-index: 3;
  margin-bottom: 2px;
  flex-grow: 1;
  min-width: 32%;
  padding-bottom: 15px;
}
.card-carousel--card:first-child {
  margin-left: 0;
}
.card-carousel--card:last-child {
  margin-right: 0;
}
.card-carousel--card img {
  vertical-align: bottom;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  transition: opacity 150ms linear;
  user-select: none;
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.card-carousel--card img:hover {
  opacity: 0.5;
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
  .card-carousel--card {
    min-width: 50%;
  }
}

@media (min-width: 320px) and (max-width: 480px) {
  .card-carousel--card {
    min-width: 100%;
  }
}

@media (max-width: 320px) {
  .card-carousel--card {
    min-width: 100%;
  }
}
</style>
