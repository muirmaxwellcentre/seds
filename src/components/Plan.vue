<script setup lang="ts">
defineProps<{
  msg?: string;
}>();
</script>

<template>
  <div>
    <h2>POINTS-BASED MANAGEMENT PLAN SUGGESTED</h2>
    <b-list-group>
      <b-list-group-item>
        Email/fax the results of this assessment to your local epilepsy
        specialist team.
      </b-list-group-item>
      <b-list-group-item class="bold">
        Patients with 2–3 points should be seen in epilepsy clinic within six
        months.
      </b-list-group-item>
      <b-list-group-item class="bold">
        Patients with ≥4 points should be discussed with the on-call epilepsy or
        neurology registrar/consultant and be seen in epilepsy clinic within 3
        months.
      </b-list-group-item>
      <b-list-group-item>
        All other patients should be seen in epilepsy clinic within 12 months.
      </b-list-group-item>
      <b-list-group-item>
        Provide all patients with a phone number for the local epilepsy nurse
        specialist team.
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<style scoped>
h2 {
  text-align: center;
  margin-bottom: 2rem;
}

.list-group-item {
  font-size: x-large;
}
.bold {
  font-weight: bold;
}
</style>
