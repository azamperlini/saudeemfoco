<template>
  <div>
    <Header />
    <main class="content">
      <h2>Prontuário</h2>
    </main>
    <Footer />
  </div>
</template>

<script>

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'MedicalRecords',
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>

.content {
  padding: 20px 20px 0 20px;
}

</style>
