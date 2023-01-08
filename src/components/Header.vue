<script setup lang="ts">
defineProps<{
  msg?: string;
}>();
</script>

<template>
  <div>
    <h1 class="mt-3">SEDS SCORING TOOL</h1>
    <p class="intro">
      Scottish Epilepsy-related Deaths Study (SEDS) score is a mortality risk
      screening tool to help healthcare professionals seeing patients with a
      known diagnosis of epilepsy. It predicts risk of epilepsy-related death
      within seven years. It can be applied when seeing a patient with epilepsy
      in any setting, whether or not the presentation is related to their
      epilepsy. Select the relevant boxes, if any apply to your patient, and the
      risk estimate will be shown below, with a suggested action plan.
    </p>
    <p class="disclaimer">
      Disclaimers: This prediction tool is a prototype and has not been
      externally validated yet. It is not currently part of any guidelines. The
      tool can be used to provide information in addition to the standard of
      care, which it does not replace. When using this tool, it should always be
      explained that the results are based on scientific research on populations
      of patients and consequently the outcome may not provide an accurate
      estimation in the specific circumstance of that particular patient. Such
      tools should never replace clinical judgement.
    </p>
  </div>
</template>

<style scoped>
.intro {
  font-size: x-large;
  text-indent: unset;
}

.disclaimer {
  font-size: medium;
  text-indent: unset;
}

h1 {
  text-align: center;
  font-weight: 500;
}
</style>
