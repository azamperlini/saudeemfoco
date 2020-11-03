<template>
  <header>
    <div class="content">
      <div class="nav">
        <router-link to="/">
          <img v-show="changeImage" alt="Quem Somos Logo" src="../assets/brand_whoAreYou_home.png">
          <img v-show="!changeImage" alt="Quem Somos Logo" src="../assets/brand_whoAreYou.png">
        </router-link>
        <NavBarLogout />
        <NavBarUser />
        <NavBarHealthAgent />
      </div>
    </div>
  </header>
</template>

<script>

import NavBarLogout from './navBar/navBarLogout.vue';
import NavBarUser from './navBar/navBarUser.vue';
import NavBarHealthAgent from './navBar/navBarHealthAgent.vue';

export default {
  name: 'Header',
  data() {
    return {
    };
  },
  components: {
    NavBarLogout,
    NavBarUser,
    NavBarHealthAgent,
  },
  computed: {
    changeImage() {
      // router.$
      const urlBase = window.location.pathname;
      if (urlBase === '/') {
        return true;
      }
      return false;
    },
  },
};
</script>

<style>
header {
  background-color: white;
  padding: 0;
  margin: 0;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
}

header .content {
  padding-top: 0;
  padding-bottom: 30px;
}

header .content .nav {
  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;
  align-items:center;
  width: 100%;
}

.navBar ul {
  list-style-type: none;
  margin: 60px 0 0 0;
  padding: 0;
}

.btn-register {
  border-right: 0;
  border-bottom: 4px solid #92cd01;
  border-radius: 0 0 15px 15px;
}

.btn-login {
  background-color: var(--verde-backgruond-color);
  border-radius: 10px;
  color: black;
  border: none;
}

.btn-register:hover, .btn-login:hover {
  background-color: #78a115;
}

li {
  display: inline-block;
  margin: 0 0 0 30px;
  border-right: var(--padraobordacinza-border-right);
  border-bottom: var(--padraobordacinza-border-bottom);
  padding: 3px;
  width: 130px;
  border-radius: var(--padraoborda-border-radius);
  text-align: center;
  font-size: 0.9em;
  color: var(--txtblack70-color);
}

li:hover {
  background-color: var(--black20-background-color);
  color: black;
  font-weight: bold;
}

.router-link-exact-active li {
  font-weight: bold;
  color: white;
  background-color: var(--azul-background-color);
  border-right: var(--padraobordaverde-border-right);
  border-bottom: var(--padraobordaverde-border-bottom);
}

</style>
