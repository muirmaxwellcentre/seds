<script setup lang="ts">
defineProps<{
  msg?: string;
}>();
</script>

<template>
  <div>
    <h1 class="mt-3">SEDS SCORING TOOL</h1>
    <p class="intro">
      This is a mortality risk screening tool to help healthcare professionals
      seeing patients with a known diagnosis of epilepsy. It can be applied when
      seeing a patient with epilepsy in any setting, whether or not the
      presentation is related to their epilepsy. Screen the patient with the
      signalling questions, mark the responses, and award the relevant number of
      points. Add the points up and follow the points-based management plan
      suggested.
    </p>
  </div>
</template>

<style scoped>
.intro {
  font-size: x-large;
  text-indent: unset;
}

h1 {
  text-align: center;
  font-weight: 500;
}
</style>
