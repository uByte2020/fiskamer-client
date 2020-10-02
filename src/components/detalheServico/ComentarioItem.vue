<template>
  <div class="da-comentario">
    <div class="d-flex flex-row align-items-center da-photo-name">
      <div style="max-width: 5%" class="mr-1 da-photo">
        <b-img
          v-bind="mainProps"
          src="https://picsum.photos/250/250/?image=58"
          rounded="circle"
          fluid
          alt="Responsive image"
        ></b-img>
      </div>
      <span class="mr-4 da-name">Daniel Almeida</span>
      <span class="mr-4 da-data-hora">Data e Hora</span>
      <!-- <button class="btn">Responder</button> -->
    </div>
    <div class="da-comments pl-5 text-justify">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComentarioItem',
  components: {},
  props: {},
  data() {
    return {
      mainProps: {
        // blank: true,
        blankColor: '#777',
        width: 75,
        height: 75,
        class: 'm1',
      },
    }
  },
  methods: {},
  computed: {},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.da-name {
  font-weight: 600;
  color: rgba(44, 62, 80, 1);
  font-size: 0.9rem;
}
.da-data-hora {
  font-size: 0.8rem;
  color: rgba(44, 62, 80, 0.5);
  font-weight: 600;
}
.da-comments {
  font-size: 0.9rem;
  width: 80%;
}
</style>
