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
          label="ダメージ"
          type="number"
          v-model="pr_damage_value"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        sm="4"
      >
        <v-text-field
          label="発射レート"
          type="number"
          v-model="pr_fire_rate"
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
      pr_ammo_clip_size: '20',
      pr_damage_value: '12',
      pr_fire_rate: '18',
    }),
    computed: {
    },
    methods: {
      generationTxt: function () {
        let weapon_dict = {
          printname: this.pr_printname,
          shortprintname: this.pr_printname,
          description: this.pr_printname,
          longdesc: this.pr_printname,

          ammo_clip_size: this.pr_ammo_clip_size,
          ammo_min_to_fire: '1',

          damage_near_value: this.pr_damage_value,
          damage_far_value: this.pr_damage_value,
          damage_very_far_value: this.pr_damage_value,
          fire_rate: this.pr_fire_rate,
        }
        this.weapon_txt = JSON.stringify(weapon_dict)
        this.weapon_txt = 'WeaponData\n' + this.weapon_txt
        this.weapon_txt = this.weapon_txt.replaceAll('":', '"  ')
        this.weapon_txt = this.weapon_txt.replaceAll('","', '"\n"')
        this.weapon_txt = this.weapon_txt.replaceAll('\n{', '\n{\n')
        this.weapon_txt = this.weapon_txt.replaceAll('}', '\n}')
      }
    }
  })
</script>
