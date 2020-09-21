<template>
  <div>
<<<<<<< HEAD
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">NavBar</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-item>INICIO</b-nav-item>
            <b-nav-item>SERVIÇOS</b-nav-item>
            <b-nav-item>FORNECEDORES</b-nav-item>
=======
    <b-navbar id="home-nav" toggleable="lg" type="dark">
      <b-navbar-brand id="navbar-brand" href="#">
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
>>>>>>> 01214135779b08071d4535bfb146472b0efae8f2
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
<<<<<<< HEAD
            <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
                <template v-slot:button-content>
                    <em>User</em>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    </div>
=======
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
>>>>>>> 01214135779b08071d4535bfb146472b0efae8f2
</template>

<script>
export default {
  name: 'Header',
<<<<<<< HEAD
  props: {
  }
=======
  props: {},
  data() {
    return {}
  },
>>>>>>> 01214135779b08071d4535bfb146472b0efae8f2
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
<<<<<<< HEAD

=======
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
>>>>>>> 01214135779b08071d4535bfb146472b0efae8f2
</style>
