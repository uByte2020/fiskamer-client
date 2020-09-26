<template>
  <div class="da-home-aboutus mt-5 mb-5">
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="aboutus-item col col-sm-12 col-md-6 col-lg-6">
          <div class="card" style="width: 100%">
            <div class="card-body">
              <h3 class="aboutus-item--title card-title">É um Fornecedor?</h3>
              <p class="aboutus-item--description card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">Comece a Divulgar!</a>
            </div>
          </div>
        </div>
        <div class="aboutus-item col col-sm-12 col-md-6 col-lg-6">
          <div class="card" style="width: 100%">
            <div class="card-body">
              <h3 class="aboutus-item--title card-title">Quem Somos?</h3>
              <p class="aboutus-item--description card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutUs',
  props: {
    msg: String,
  },
}
</script>

<style scoped>
.aboutus-item > div {
  -webkit-box-shadow: 0px 0px 4px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 4px -2px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 4px -2px rgba(0, 0, 0, 0.75);
}

.aboutus-item--title {
  text-align: left;
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 500;
}
.aboutus-item--description {
  text-align: justify;
}
.aboutus-item .btn {
  background-color: #2c3e50;
  color: #fff;
  border: none;
}
</style>
