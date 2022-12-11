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
        All patients with 2–3 points will have epilepsy clinic follow-up
        arranged within six months.
      </b-list-group-item>
      <b-list-group-item class="bold">
        All patients with ≥4 points will have epilepsy clinic follow-up arranged
        within 3 months and should also be discussed with the on-call neurology
        registrar.
      </b-list-group-item>
      <b-list-group-item>
        All other patients will have epilepsy clinic follow-up arranged within
        12 months.
      </b-list-group-item>
      <b-list-group-item>
        Provide all patients with a phone number for the local epilepsy nurse
        specialist team (Edinburgh = 0131 312 0717, Glasgow = 0141 232 7601,
        Western Isles = 01851 763308)
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
