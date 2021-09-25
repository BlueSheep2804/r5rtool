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
          auto-grow
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

          weapon_type_flags: 'WPT_PRIMARY',
          projectile_launch_speed: '21000',

          menu_icon: 'rui/weapon_icons/r5/weapon_' + icon,
          hud_icon: 'rui/weapon_icons/r5/weapon_' + icon,

          viewmodel: 'mdl/weapons/' + model_path + '/ptpov_' + model + '.rmdl',
          playermodel: 'mdl/weapons/' + model_path + '/w_' + model + '.rmdl',

          fire_sound_1_player_1p: 'Weapon_bulletCasings.Bounce',
          fire_sound_1_player_3p: 'Weapon_bulletCasings.Bounce',
          fire_sound_2_player_1p: 'Weapon_R97_SecondShot_1P',
          fire_sound_2_player_3p: '',
          sound_dryfire: 'assalt_rifle_dryfire',
          sound_pickup: 'wpn_pickup_SMG_1P',
          looping_sounds: '1',
          sound_zoom_in: 'Weapon_R97_ADS_In',
          sound_zoom_out: 'Weapon_R97_ADS_Out',
          burst_or_looping_fire_sound_start_1p: 'Weapon_R97_Fire_First_1P',
          burst_or_looping_fire_sound_middle_1p: 'Weapon_R97_Fire_Loop_1P',
          burst_or_looping_fire_sound_end_1p: 'Weapon_R97_Fire_End_1P',
          burst_or_looping_fire_sound_start_3p: 'Weapon_R97_Fire_First_3P',
          burst_or_looping_fire_sound_middle_3p: 'Weapon_R97_Fire_Loop_3P',
          burst_or_looping_fire_sound_end_3p: 'Weapon_R97_Fire_End_3P',
          low_ammo_sound_name_1: 'R97_LowAmmo_Shot1',

          ammo_pool_type: 'bullet',
          ammo_clip_size: this.$store.state.weapon.ammo_clip_size,
          ammo_min_to_fire: '1',

          damage_type: 'bullet',
          damage_near_value: this.$store.state.weapon.damage_value,
          damage_far_value: this.$store.state.weapon.damage_value,
          damage_very_far_value: this.$store.state.weapon.damage_value,

          fire_mode: 'automatic',
          fire_rate: this.$store.state.weapon.fire_rate,

          reload_time: '1.8',

          viewkick_pattern: 'r97_2',
          viewkick_spring: 'r97_vkp',
          viewkick_spring_hot: 'r97_vkp_hot',
        }
        this.weapon_txt = JSON.stringify(weapon_dict)
        this.weapon_txt = '#base "_base_smg.txt"\nWeaponData\n' + this.weapon_txt
        this.weapon_txt = this.weapon_txt.replaceAll('":', '"  ')
        this.weapon_txt = this.weapon_txt.replaceAll('","', '"\n"')
        this.weapon_txt = this.weapon_txt.replaceAll('\n{', '\n{\n')
        this.weapon_txt = this.weapon_txt.replaceAll('}', '\n}')
      }
    }
  })
</script>
