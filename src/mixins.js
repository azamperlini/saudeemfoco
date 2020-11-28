export const logoutMixin = {
  methods: {
    makeLogout() {
      this.$store.commit('DESLOGAR_USUARIO');
      this.$router.push({ name: 'Home' });
    },
  },
};

export const loginMixin = {
  methods: {
    makeLogin() {
      const url = '/login';
      this.$http
        .post(url, this.user)
        .then((response) => {
          this.$store.state.token = response.headers.authorization;
          this.$router.push({ name: 'MedicalRecords' });
        })
        .catch((error) => {
          if (error) {
            this.checkLogin = true;
          } else {
            this.checkLogin = false;
          }
        });
    },
  },
};
