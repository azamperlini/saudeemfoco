export const logoutMixin = {
  methods: {
    efetuarLogout() {
      this.$store.commit('DESLOGAR_USUARIO');
      this.$router.push({ name: 'login' });
    },
  },
};

export const loginMixin = {
  methods: {
    efetuarLogin() {
      const url = '/login';
      this.$http.post(url, this.usuario)
        .then((response) => {
          this.$store.state.token = response.headers.authorization;
          this.$store.state.usuario = response.data.user;
          console.log(this.$store.state.usuario);
          console.log(this.$store.state.token);
          this.$router.push({ name: 'MedicalRecords' });
        }).catch((error) => {
          if (error) {
            this.checkLogin = true;
          } else {
            this.checkLogin = false;
          }
        });
    },
  },
};
