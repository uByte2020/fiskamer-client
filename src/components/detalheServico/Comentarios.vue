<template>
  <div class="container pl-5 mx-0 text-left">
    <h5>Comentários:</h5>
    <ComentarioItem />
  </div>
</template>

<script>
import ComentarioItem from './ComentarioItem.vue'
export default {
  name: 'Comentarios',
  components: { ComentarioItem },
  props: {},
  data() {
    return {}
  },
  methods: {},
  computed: {},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
