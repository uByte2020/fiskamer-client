<template>
  <div id="home-search" :style="{ 'background-color': getBackgroundColor }">
    <div>
      <b-form inline class="home-search-form">
        <b-input
          id="inline-form-input-what"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="O que está a procura?"
        ></b-input>
        <b-input
          id="inline-form-input-where"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="Onde?"
        ></b-input>
        <b-button
          class="search-btn"
          :style="{ 'background-color': getBtnColor }"
          ><b-icon icon="search" class="rounded"></b-icon
          >&nbsp;Procurar</b-button
        >
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSearch',
  props: {
    backgroundColor: String,
    btnColor: String,
  },
  mounted() {},
  computed: {
    getBackgroundColor() {
      return this.backgroundColor || 'rgba(255, 205, 3, 0.8)'
    },
    getBtnColor() {
      return this.btnColor || '#212529'
    },
  },
}
</script>

<style scoped>
#home-search {
  position: absolute;
  right: 15%;
  bottom: 8%;
  left: 15%;
  z-index: 10;
  padding-top: 0;
  padding-bottom: 0;
  color: #fff;
  text-align: center;
  border-radius: 15px;
  height: 100px;
  width: 65%;
}
#home-search > div {
  margin-top: 4%;
}
.home-search-form {
  justify-content: center;
}

#inline-form-input-what:focus,
#inline-form-input-where:focus {
  border-color: rgba(255, 205, 3, 0.8);
  box-shadow: 0 1px 1px rgba(255, 205, 3, 0.8) inset,
    0 0 8px rgba(255, 205, 3, 0.8);
  outline: 0 none;
}

@media (max-width: 767px) {
  #home-search > div {
    margin-top: 1% !important;
  }
  #inline-form-input-what,
  #inline-form-input-where {
    width: 60% !important;
  }
}
</style>
