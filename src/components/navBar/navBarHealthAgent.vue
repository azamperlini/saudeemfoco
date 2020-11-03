<template>
  <ul class="navBar">
    <router-link to="/informative"><li>Informativos</li></router-link>
    <router-link to="/user"><li>Prontuário</li></router-link>
    <router-link to="/health-agent"><li>AG. Saúde</li></router-link>
    <li class="welcome">Seja bem-vindo,<br><b>ALEXANDRE!</b></li>
    <a href="/login"
      @click.prevent="makeLogout"
    >
      <li class="btn-sair">Sair</li>
    </a>  </ul>
</template>

<script>

export default {
  name: 'NavBarHealthAgent',
  data() {
    return {
    };
  },
  methods: {
    makeLogout() {
      localStorage.removeItem('token');
      this.$router.push({ name: 'Login' });
    },
  },
  computed: {

  },
};

</script>

<style scoped>

.welcome {
  border: none;
  text-align: right;
}

.welcome:hover {
  background-color: white;
  color: var(--txtblack70-color);
  font-weight: normal;
}

.navBar .btn-sair {
  border-right: 0;
  border-bottom: 4px solid #92cd01;
  border-radius: 0;
}

.navBar .btn-sair:hover {
  background-color: #78a115;
}

</style>
