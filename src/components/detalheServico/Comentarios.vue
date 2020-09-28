<template>
  <div class="container pl-5 mx-0 text-left">
    <h5>Comentários:</h5>
    <ComentarioItem />
    <ComentarioItem />
    <ComentarioItem />
    <div class="text-right da-comment">
      <b-form-textarea
        class="da-orcamento-input"
        id="da-orcamento-textarea"
        placeholder="Comentar"
        rows="3"
        max-rows="6"
      ></b-form-textarea>
      <button class="btn btn-comentar">Comentar</button>
    </div>
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
<style scoped>
#da-orcamento-textarea,
.btn-comentar {
  overflow-y: auto !important;
  font-size: 0.9rem;
}
.da-comment {
  font-size: 0.9rem;
  width: 80%;
}
</style>
