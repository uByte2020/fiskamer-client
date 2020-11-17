<template>
  <div id="v-carousel" class="mt-5">
    <h3>Serviços em Destaques</h3>
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
            <ServiceItem
              v-bind:key="i"
              v-for="(item, i) in items"
              :service="item"
            />
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
import ServiceItem from './ServiceItem.vue'

export default {
  name: 'TopService',
  components: {
    ServiceItem,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      items: [
        {
          name: 'Kin Khao',
          category: 'Salão de Festa',
          localizacao: 'Mainga, Luanda',
          preco: 250000,
          description:
            ' is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          moeda: 'AKZ',
        },
        {
          name: 'Jū-Ni',
          category: 'Salão de Festa',
          localizacao: 'Mainga, Luanda',
          preco: 250000,
          description:
            ' is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          moeda: 'AKZ',
        },
        {
          name: 'Delfina',
          category: 'Salão de Festa',
          localizacao: 'Mainga, Luanda',
          preco: 250000,
          description:
            ' is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          moeda: 'AKZ',
        },
        {
          name: 'San Tung',
          category: 'Salão de Festa',
          localizacao: 'Mainga, Luanda',
          preco: 250000,
          description:
            ' is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          moeda: 'AKZ',
        },
        {
          name: 'Anchor Oyster Bar',
          category: 'Salão de Festa',
          localizacao: 'Mainga, Luanda',
          preco: 250000,
          description:
            ' is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          moeda: 'AKZ',
        },
        {
          name: 'Locanda',
          category: 'Salão de Festa',
          localizacao: 'Mainga, Luanda',
          preco: 250000,
          description:
            ' is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          moeda: 'AKZ',
        },
        {
          name: 'Garden Creamery',
          category: 'Salão de Festa',
          localizacao: 'Mainga, Luanda',
          preco: 250000,
          description:
            ' is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          moeda: 'AKZ cream',
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
    )[0].offsetWidth
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
</style>
