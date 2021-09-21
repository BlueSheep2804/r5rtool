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
          v-model="pr_printname"
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
          v-model="pr_ammo_clip_size"
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
      weapon_txt: 'none',
      pr_printname: '',
      pr_ammo_clip_size: 20
    }),
    computed: {
    },
    methods: {
      generationTxt: function () {
        this.weapon_txt = this.$store.state.base_weapon_txt

        this.weapon_txt += (
          '"printname"  "' + this.pr_printname +
          '"\n"shortprintname"  "' + this.pr_printname +
          '"\n"description"  "' + this.pr_printname +
          '"\n"longdesc"  "' + this.pr_printname + '"\n\n'
        )

        this.weapon_txt += '"ammo_clip_size"  ' + this.pr_ammo_clip_size + '"\n\n'
        this.weapon_txt += '}'
      }
    }
  })
</script>
