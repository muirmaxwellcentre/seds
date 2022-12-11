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
    <b-row class="mb-5">
      <main><Test :questions="questions" /></main>
    </b-row>
    <b-row class="mb-5">
      <Plan />
    </b-row>
    <b-row class="mb-5">
      <p>
        Abbreviations: SIMD - Scottish Index of Multiple Deprivation; ADHD -
        Attention deficit hyperactivity disorder; ASD - Autism spectrum disorder
      </p>
    </b-row>
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

export default defineComponent({
  name: 'App',
  components: {
    Test,
    Header,
    Plan,
  },
  data() {
    return {
      questions: questions,
    };
  },
});
</script>
