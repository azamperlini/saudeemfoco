<template>
  <ul class="navBar">
    <router-link to="/informativo"><li>Informativos</li></router-link>
    <router-link to="/prontuario"><li>Prontuário</li></router-link>
    <li class="welcome">Seja bem-vindo(a),<p class="upper">{{user}}!</p></li>
    <a href="#"
      @click.prevent="makeLogout"
    >
      <li class="btn-sair">Sair</li>
    </a>
  </ul>
</template>

<script>

import { logoutMixin } from '../../mixins';

export default {
  name: 'NavBarUser',
  mixins: [logoutMixin],
  props: {
    user: {
      type: String,
    },
  },
  data() {
    return {
    };
  },
  methods: {

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

.upper {
  margin: 0;
  font-weight: bold;
  text-transform: uppercase;
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
