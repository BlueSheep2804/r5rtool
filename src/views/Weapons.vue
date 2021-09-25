<template>
  <v-container>
    <h1>Weapons</h1>
    <property-input
      label="武器名"
      placeholder="例: R-99"
      weaponKey="printname"
    ></property-input>
    <property-select
      label="アイコン"
      :items="calledWeaponIcon"
      weaponKey="icon"
    ></property-select>
    <property-select
      label="モデル"
      :items="calledWeaponModel"
      weaponKey="model"
    ></property-select>
    <property-input
      label="ダメージ"
      type="number"
      value="12"
      weaponKey="damage_value"
    ></property-input>
    <property-input
      label="発射レート"
      type="number"
      value="18"
      weaponKey="fire_rate"
    ></property-input>
    <property-input
      label="弾薬数"
      type="number"
      value="18"
      weaponKey="ammo_clip_size"
    ></property-input>

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
  import PropertyInput from '../components/PropertyInput.vue'
  import PropertySelect from '../components/PropertySelect.vue'

  export default Vue.extend({
    name: 'Weapons',
    components: {
      PropertyInput,
      PropertySelect
    },
    data: () => ({
      weapon_txt: 'none',
    }),
    computed: {
      calledWeaponIcon: function() {
        return this.$store.state.calledWeaponIcon
      },
      calledWeaponModel: function() {
        return this.$store.state.calledWeaponModel
      }
    },
    methods: {
      generationTxt: function () {
        const icon = this.$store.state.weapon.icon
        const model = this.$store.state.weapon.model

        let model_path = model
        switch (model) {
          case 'g2a4':
            model_path = 'g2'
            break
          case 'hemlock':
            model_path = 'm1a1_hemlock'
            break
          case 'mastiff':
            model_path = 'mastiff_stgn'
            break
        }

        let weapon_dict = {
          printname: this.$store.state.weapon.printname,
          shortprintname: this.$store.state.weapon.printname,
          description: this.$store.state.weapon.printname,
          longdesc: this.$store.state.weapon.printname,

          menu_icon: 'rui/weapon_icons/r5/weapon_' + icon,
          hud_icon: 'rui/weapon_icons/r5/weapon_' + icon,
          
          viewmodel: 'mdl/weapons/' + model_path + '/ptpov_' + model + '.rmdl',
          playermodel: 'mdl/weapons/' + model_path + '/w_' + model + '.rmdl',

          ammo_clip_size: this.$store.state.weapon.ammo_clip_size,
          ammo_min_to_fire: '1',

          damage_near_value: this.$store.state.weapon.damage_value,
          damage_far_value: this.$store.state.weapon.damage_value,
          damage_very_far_value: this.$store.state.weapon.damage_value,
          fire_rate: this.$store.state.weapon.fire_rate,
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
