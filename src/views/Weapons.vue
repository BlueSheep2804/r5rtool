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
    <v-row>
      <v-col
        cols="12"
        sm="12"
      >
        <v-btn
          color="primary"
          elevation="2"
          v-on:click="generationTxt"
        >Generate Txt</v-btn>
      </v-col>
      <v-col
        cols="12"
        sm="12"
      >
        <v-textarea
          solo
          readonly
          :value="weapon_txt"
        ></v-textarea>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Weapons',
    data: () => ({
      weapon_txt: 'none'
    }),
    computed: {
    },
    methods: {
      generationTxt: function () {
        this.weapon_txt = this.$store.state.base_weapon_txt
      }
    }
  })
</script>
