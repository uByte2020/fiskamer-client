<template>
  <div class="da-home-category mt-5">
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="category-item col col-lg-2">
          <p class="category-item--icon"></p>
          <p class="category-item--description">What is Lorem Ipsum</p>
        </div>
        <div class="category-item col col-lg-2">
          <p class="category-item--icon"></p>
          <p class="category-item--description">Lorem Ipsum</p>
        </div>
        <div class="category-item col col-lg-2">
          <p class="category-item--icon"></p>
          <p class="category-item--description">Lorem Ipsum</p>
        </div>
        <div class="category-item col col-lg-2">
          <p class="category-item--icon"></p>
          <p class="category-item--description">Lorem Ipsum</p>
        </div>
        <div class="category-item col col-lg-2">
          <p class="categary-item--icon"></p>
          <p class="categary-item--description">Lorem Ipsum</p>
        </div>
      </div>
      <div class="row justify-content-md-center">
        <div class="col-md-auto">
          <button class="btn">Organize o seu Evento</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: {
    msg: String,
  },
}
</script>

<style scoped>
.da-home-category button {
  background-color: #ffcd03;
  color: #2c3e50;
}
</style>
