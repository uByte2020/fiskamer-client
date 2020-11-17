<template>
  <div>
    <b-navbar id="home-nav" toggleable="lg" type="dark">
      <b-navbar-brand id="navbar-brand" href="#" class="ml-4">
        <router-link :to="{ name: 'home' }"><img
          class="fiskamer-logo"
          src="@/assets/imgs/logo2.png"
          alt="fiskamer-logo"
        /></router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-5">
          <b-nav-item class="da-nav-item">
            <router-link :to="{ name: 'home' }">HOME</router-link>
          </b-nav-item>
          <b-nav-item class="da-nav-item">
            <router-link :to="{ name: 'search' }">SERVIÇOS</router-link>
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="da-nav-item da-rght-nav-item">
            <router-link :to="{ name: 'cadastrar' }">
              <b-icon icon="person-plus-fill" class="rounded"></b-icon>&nbsp;CRIAR CONTA
            </router-link>
          </b-nav-item>
          <b-nav-item class="da-nav-item da-rght-nav-item">
            <router-link :to="{ name: 'login' }">
              <b-icon icon="person-fill" class="rounded"></b-icon>&nbsp;ENTRAR
            </router-link>
          </b-nav-item>
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
  font-size: 0.8rem;
}

/* .da-rght-nav-item a {
  color: #ffcd03 !important;
} */
.da-nav-item a:hover {
  color: #ffcd03 !important;
}
</style>
