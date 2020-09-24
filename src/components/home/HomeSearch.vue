<template>
  <div id="home-search">
    <div>
      <b-form inline class="home-search-form">
        <b-input
          id="inline-form-input-name"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="O que está a procura?"
        ></b-input>
        <b-input
          id="inline-form-input-name"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="Onde?"
        ></b-input>
        <b-button class="search-btn"
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
    msg: String,
  },
  mounted() {},
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
  background-color: rgba(255, 205, 3, 0.8);
}
#home-search > div {
  margin-top: 5%;
}
.home-search-form {
  justify-content: center;
}
.search-btn {
  background-color: #212529;
}
</style>
