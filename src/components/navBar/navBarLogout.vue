<template>
  <ul class="navBar">
    <router-link to="/informative"><li>Informativos</li></router-link>
    <router-link to="/register"><li class="btn-register">Cadastrar</li></router-link>
    <router-link to="/login"><li class="btn-login">Login</li></router-link>
  </ul>
</template>

<script>

export default {
  name: 'NavBarLogout',
  data() {
    return {
    };
  },
  computed: {
  },
};

</script>

<style scoped>

</style>
