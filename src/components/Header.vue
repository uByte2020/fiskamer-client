<template>
  <div>
    <b-navbar id="home-nav" toggleable="lg" type="dark">
      <b-navbar-brand id="navbar-brand" href="#" class="ml-4">
        <img
          class="fiskamer-logo"
          src="@/assets/imgs/logo2.png"
          alt="fiskamer-logo"
        />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-5">
          <b-nav-item class="da-nav-item">INICIO</b-nav-item>
          <b-nav-item class="da-nav-item">SERVIÇOS</b-nav-item>
          <b-nav-item class="da-nav-item">FORNECEDORES</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="da-nav-item da-rght-nav-item"
            ><b-icon icon="person-plus-fill" class="rounded"></b-icon
            >&nbsp;CRIAR CONTA</b-nav-item
          >
          <b-nav-item class="da-nav-item da-rght-nav-item"
            ><b-icon icon="person-fill" class="rounded"></b-icon
            >&nbsp;ENTRAR</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {},
  data() {
    return {}
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home-nav {
  background-color: #212529;
}
#navbar-brand {
  width: 10%;
}
.fiskamer-logo {
  width: 100%;
}
.da-nav-item a {
  color: #fff !important;
  transition: 0.1s linear 0.1s;
}

/* .da-rght-nav-item a {
  color: #ffcd03 !important;
} */
.da-nav-item a:hover {
  color: #ffcd03 !important;
}
</style>
