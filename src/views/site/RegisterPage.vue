<template>
  <div class="container">
    <div class="containerRegister">
      <div class="bar"></div>
      <div class="registerBrand">
        <router-link to="/">
          <img class="linkBrand" alt="Link Home" src="../../assets/login/brandLogin.png" />
        </router-link>
        <h3>O Portal da Saúde Universitária.</h3>
        <div class="content-formRegister">
          <form class="formRegister" @submit.prevent="registerUser">
            <div class="inputBox">
              <input
                type="text"
                required=""
                oninvalid="setCustomValidity('Campo Obrigatório')"
                oninput="setCustomValidity('')"
                v-model="user.userName"
              />
              <label>Usuário:</label>
            </div>
            <p class="confirmUserName" v-if="checkUserName">(Usuário já utilizado! Tente outro.)</p>
            <div class="inputBox">
              <input
                class="upper"
                type="text"
                required=""
                oninvalid="setCustomValidity('Campo Obrigatório')"
                oninput="setCustomValidity('')"
                v-model="user.firstName"
              />
              <label>Nome:</label>
            </div>
            <div class="inputBox">
              <input
                class="upper"
                type="text"
                required=""
                oninvalid="setCustomValidity('Campo Obrigatório')"
                oninput="setCustomValidity('')"
                v-model="user.lastName"
              />
              <label>Sobrenome:</label>
            </div>
            <div class="inputBox">
              <input
                type="password"
                pattern=".{6,}"
                required=""
                oninvalid="setCustomValidity('Campo Obrigatório. Com o mínimo de 6 caracteres')"
                oninput="setCustomValidity('')"
                v-model="user.password"
              />
              <label>Senha:</label>
            </div>
            <div class="inputBox">
              <input
                type="password"
                pattern=".{6,}"
                required=""
                oninvalid="setCustomValidity('Campo Obrigatório')"
                oninput="setCustomValidity('')"
                v-model="user.retypePassword"
              />
              <label>Confirmar Senha:</label>
            </div>
            <p class="confirmPassWord" v-if="checkPassword">(As senhas precisam ser idênticas!)</p>
            <p class="politics">
              <input type="checkbox" v-model="user.privacy" />
              Li e estou de acordo com a
              <a href="/privacidade"> Política de Privacidade e de Uso de Informações</a>.
            </p>
            <button type="submit" v-if="!checkPassword">Cadastrar</button><br />
          </form>
          <p>Já possuo conta. <router-link to="/login">Entrar</router-link>.</p>
          <div class="brandPartner">
            <img alt="Icone Parceiro" src="../../assets/login/brandPartner.png" />
          </div>
        </div>
      </div>
      <div class="bar"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      checkUserName: false,
      user: {
        userName: '',
        firstName: '',
        lastName: '',
        password: '',
        retypePassword: '',
        statusPassword: false,
        privacy: '',
      },
    };
  },
  methods: {
    registerUser() {
      const url = '/user';
      this.$http
        .post(url, this.user)
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: 'Login' });
        })
        .catch((error) => {
          if (error) {
            this.checkUserName = true;
          } else {
            this.checkUserName = false;
          }
        });
    },
  },
  computed: {
    checkPassword() {
      return this.user.password === this.user.retypePassword
        ? this.statusPassword
        : !this.statusPassword;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  width: 100vw;
  height: 100vh;
}

.containerRegister {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 60vh;
}

.bar {
  background-color: var(--verde-backgruond-color);
  width: 3%;
  height: 391px;
}

.registerBrand {
  background-color: white;
  width: 760px;
  height: 391px;
  margin: 0 auto;
  padding: 0 60px;
}

.linkBrand {
  margin-top: 80px;
}

h3 {
  font-size: 1.4em;
  font-weight: normal;
  color: var(--txtblack70-color);
}

.content-formRegister {
  position: relative;
  top: -475px;
  left: 400px;
  width: 38%;
  background-color: white;
  padding: 45px 45px 0 45px;
  border: 2px solid #92cd01;
  border-radius: 30px;
  box-shadow: var(--shadow-box-shadow);
  text-align: center;
}

.content-formRegister p,
a {
  margin: 25px 0;
  color: var(--txtblack70-color);
}

.content-formRegister .confirmUserName {
  color: red;
}

.content-formRegister .confirmPassWord {
  color: red;
}

.content-formRegister a:hover {
  font-weight: bold;
  color: black;
}

.brandPartner {
  width: 110px;
  height: 93px;
  margin: 0 auto;
  padding: 0;
  background-color: var(--verde-backgruond-color);
  border-radius: 10px 10px 0 0;
}
.formRegister {
  height: auto;
}

.formRegister img {
  margin: 0 34%;
}

.inputBox {
  margin: 16px 0;
  position: relative;
}
.inputBox label {
  position: absolute;
  top: -2px;
  left: 0;
  font-size: 1em;
  color: black;
  pointer-events: none;
  transition: 0.5s;
}

.inputBox input:focus ~ label,
.inputBox input:valid ~ label {
  top: -10px;
  left: 0;
  font-size: 0.8em;
}

.inputBox input {
  width: 100%;
  height: 30px;
  margin: 10px 0;
  border-top: none;
  border-left: none;
  border-right: var(--padraobordacinza-border-right);
  border-bottom: var(--padraobordacinza-border-bottom);
  border-radius: var(--padraoborda-border-radius);
  font-size: 1em;
}

.upper {
  text-transform: uppercase;
}

.politics {
  font-size: 0.9em;
}

.formRegister button {
  width: 200px;
  background-color: var(--verde-backgruond-color);
  border: none;
  border-radius: 10px;
  padding: 8px;
  font-size: 1.1em;
  color: black;
}

.formRegister button:hover {
  background-color: #78a115;
}
</style>
