<template>
  <b-container>
    <b-row>
      <div id="headerLogo">
        <img src="https://iili.io/Hn6nUWF.png" alt="" />
      </div>
    </b-row>
    <b-row class="mb-2">
      <header>
        <Header />
      </header>
    </b-row>
    <b-row class="mb-0">
      <main><Test :questions="questions" /></main>
    </b-row>
    <b-row class="mb-4">
      <Plan />
    </b-row>

    <b-row><hr /></b-row>
    <b-row><Footer /></b-row>
  </b-container>
</template>

<style>
.firstRow {
  margin-bottom: 5rem;
}
.p-5 {
  padding: 10rem;
}
</style>

<script lang="ts">
import Header from './components/Header.vue';
import Test from './components/Test.vue';
import Plan from './components/Plan.vue';
import {questions} from './questions';
import {defineComponent} from 'vue';
import {BRow, BContainer} from 'bootstrap-vue-3';
import Footer from './components/Footer.vue';

export default defineComponent({
  name: 'App',
  components: {
    Test,
    Header,
    Plan,
    Footer,
  },
  data() {
    return {
      questions: questions,
    };
  },
});
</script>
