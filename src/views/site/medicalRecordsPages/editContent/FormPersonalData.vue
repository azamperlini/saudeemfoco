<template>
  <form class="form-content" @submit.prevent>
    <div class="inputsBox">
      <div class="inputBoxCol3">
        <label>CPF:</label><br>
        <input
          class="inputPadrao"
          type="text"
          required
          oninvalid="setCustomValidity('Campo Obrigatório')"
          oninput="setCustomValidity('')"
          v-model="nr_cpf"
        >
      </div>
      <div class="inputBoxCol3">
        <label>Matrícula:</label><br>
        <input
          class="inputPadrao"
          type="text"
          required="" oninvalid="setCustomValidity('Campo Obrigatório')"
          oninput="setCustomValidity('')"
          v-model="nr_registration"
        >
      </div>
      <div class="inputBoxCol3">
        <label>Data de Nascimento:</label><br>
        <input
          class="inputPadrao"
          type="text"
          required="" oninvalid="setCustomValidity('Campo Obrigatório')"
          oninput="setCustomValidity('')"
          v-model="dt_birth"
        >
      </div>
    </div>
    <div class="inputsBox">
      <div class="inputBoxCol2">
        <label>Nome:</label><br>
        <input
          class="inputPadrao"
          type="text"
          required="" oninvalid="setCustomValidity('Campo Obrigatório')"
          oninput="setCustomValidity('')"
          v-model="firstName"
        >
      </div>
      <!-- <div class="inputBoxCol3">
        <label>Sexo:</label><br>
        <select v-model="gender"
          v-on:change="onChangeGenres()">
          <option
            v-for="generos in optionsSex"
            :key="generos.id"
            :value="generos.value">
            {{ generos.value }}
          </option>
        </select>
      </div>
    </div> -->

    <div class="inputBoxCol3">
        <label>Sexo:</label><br>
        <select v-model="gender">
          <option>MASCULINO</option>
          <option>FEMININO</option>
        </select>
      </div>
    </div>
    <!-- <div class="inputsBox">
      <div class="inputBoxCol3">
        <label>Nacionalidade:</label><br>
        <select v-model="ds_nationality">
          <option
            v-for="nacionalidade in ds_nationality"
            :key="nacionalidade.id"
            value="nacionalidade.name">
            {{nacionalidade.name}}
          </option>
        </select>
      </div> -->
    <div class="inputsBox">
      <div class="inputBoxCol3">
        <label>Nacionalidade:</label><br>
        <select v-model="ds_nationality">
          <option>BRASILEIRO</option>
          <option>ESTRANGEIRO</option>
        </select>
      </div>
      <div class="inputBoxCol3">
        <label>Municipio de Nascimento:</label><br>
        <input
          class="inputPadrao"
          type="text"
          required="" oninvalid="setCustomValidity('Campo Obrigatório')"
          oninput="setCustomValidity('')"
          v-model="ds_birthTownship"
        >
      </div>
      <div class="inputBoxCol3">
        <label>Estado Civil:</label><br>
          <select v-model="ds_maritalStatus">
            <option>XPTO</option>
            <!-- <option
              v-for="relacionamento in ds_maritalStatus"
              value="relacionamento.name"
              :key="relacionamento.id">
              {{relacionamento.name}}
            </option> -->
          </select>
      </div>
    </div>
    <div class="inputsBox">
      <div class="inputBoxCol2">
        <label>Nome Social:</label><br>
        <input
          class="inputPadrao"
          type="text"
          v-model="nm_social"
        >
      </div>
      <div class="inputBoxCol3">
        <label>Identidade de Gênero:</label><br>
        <input
          class="inputPadrao"
          type="text"
          v-model="genderIdentity"
        >
      </div>
    </div>
    <div class="inputsBox">
      <div class="inputBoxCol2">
        <label>Nome da Mãe:</label><br>
          <input
            class="inputPadrao"
            type="text"
            v-model="nm_mother"
          >
      </div>
      <div class="inputBoxCol3">
        <input
          v-model="nm_motherUnknow"
          class="inputCheck"
          type="checkBox"
        >
        <label>Desconhecida</label>
      </div>
    </div>
    <div class="inputsBox">
      <div class="inputBoxCol2">
        <label>Nome do Pai:</label><br>
        <input
          class="inputPadrao"
          type="text"
          v-model="nm_father"
        >
      </div>
      <div class="inputBoxCol3">
        <input
          class="inputCheck"
          type="checkBox"
          v-model="nm_fatherUnknow"
        >
        <label>Desconhecido</label>
      </div>
    </div>
    <button class="btn buttonSalve">Foto Perfil</button>
    <div class="boxBtn">
      <button
        class="btn buttonSalve"
        @click="submitGeneralData">Salvar
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'FormPersonalData',
  props: {
    user: {
      type: Object,
    },
    dados: {
      type: Object,
    },
  },
  data() {
    return {
      nr_cpf: '',
      nr_registration: '',
      nm_social: '',
      dt_birth: '',
      gender: '',
      optionsSex: [
        {
          id: 1,
          value: 'MASCULINO',
        },
        {
          id: 2,
          value: 'FEMININO',
        },
      ],
      genderIdentity: '',
      nm_mother: '',
      nm_father: '',
      ds_nationality: [
        {
          id: 1,
          value: 'BRASILEIRO',
        },
        {
          id: 2,
          value: 'ESTRANGEIRO',
        },
        {
          id: 3,
          value: 'NATURALIZADO',
        }],
      ds_birthTownship: '',
      ds_maritalStatus: [
        {
          id: 1,
          value: 'SOLTEIRO',
        },
        {
          id: 2,
          value: 'CASADO',
        },
        {
          id: 3,
          value: 'UNIÃO ESTÁVEL',
        }],
      profileImage: '',
      nm_fatherUnknow: '',
      nm_motherUnknow: '',
      firstName: '',
    };
  },
  methods: {
    onChangeGenres() {
      this.gender = this.optionsSex.value;
      console.log('valor selecionado', this.gender);
    },
    submitGeneralData() {
      const object = {
        generalDataModel: {
          nr_cpf: this.nr_cpf,
          nr_registration: this.nr_registration,
          nm_social: this.nm_social,
          dt_birth: this.dt_birth,
          gender: this.gender.value,
          genderIdentity: this.genderIdentity,
          nm_mother: this.nm_mother,
          nm_father: this.nm_father,
          ds_nationality: this.ds_nationality,
          ds_birthTownship: this.ds_birthTownship,
          ds_maritalStatus: this.ds_maritalStatus,
          profileImage: this.profileImage,
          nm_fatherUnknow: this.nm_fatherUnknow,
          firstName: this.firstName,
          nm_motherUnknow: this.nm_motherUnknow,
        },
      };
      console.log(this.dados.id);
      const url = `/user/${this.dados.id}`;
      this.$http.put(url, object)
        .then((response) => console.log(response.data, 'james', this.$store.state.usuario.id))
        .catch((error) => { console.log(error); });
    },
  },
};
</script>
