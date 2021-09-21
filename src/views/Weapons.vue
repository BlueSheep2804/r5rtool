<template>
  <v-container>
    <h1>Weapons</h1>
    <v-row>
      <v-col
        cols="12"
        sm="4"
      >
        <v-text-field
          label="武器名"
          placeholder="例: R-99"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        sm="4"
      >
        <v-text-field
          label="弾薬数"
          type="number"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Weapons'
  })
</script>
