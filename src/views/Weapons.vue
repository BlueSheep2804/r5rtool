<template>
  <v-container>
    <property-select
      label="武器タイプ"
      :items="weaponType"
      weaponKey="weapon_type"
    ></property-select>
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
    <property-checkbox
      label="セミオート化"
      weaponKey="is_semi_auto"
    ></property-checkbox>
    <property-input
      label="弾速"
      type="number"
      placeholder="10,000~30,000"
      value="20000"
      weaponKey="projectile_launch_speed"
    ></property-input>
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
    <property-input
      label="タクティカルリロード"
      type="number"
      value="1.8"
      weaponKey="reload_time"
    ></property-input>
    <property-input
      label="リロード"
      type="number"
      value="2.45"
      weaponKey="reloadempty_time"
    ></property-input>

    <v-row>
      <v-col
        cols="12"
      >
        <v-btn
          color="primary"
          elevation="2"
          v-on:click="generationTxt"
        >
          <v-icon
            dark
            left
          >
            mdi-refresh
          </v-icon>
          txtを生成
        </v-btn>
        <v-btn
          color="primary"
          elevation="2"
          v-on:click="copyText"
          v-bind:disabled="copyTextButton"
          class="ml-4"
        >
          <v-icon
            dark
            left
          >
            mdi-content-copy
          </v-icon>
          コピー
        </v-btn>
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
  import PropertyCheckbox from '../components/PropertyCheckbox.vue'
  import PropertyInput from '../components/PropertyInput.vue'
  import PropertySelect from '../components/PropertySelect.vue'
  import { object2text } from '../utils/r5rtext'

  export default Vue.extend({
    name: 'Weapons',
    components: {
      PropertyInput,
      PropertySelect,
      PropertyCheckbox
    },
    data: () => ({
      weapon_txt: 'none',
      copyTextButton: true
    }),
    computed: {
      calledWeaponIcon: function() {
        return this.$store.state.calledWeaponIcon
      },
      calledWeaponModel: function() {
        return this.$store.state.calledWeaponModel
      },
      weaponType: function() {
        return this.$store.state.weaponType
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
          case 'hemlok':
            model_path = 'm1a1_hemlok'
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
          projectile_launch_speed: this.$store.state.weapon.projectile_launch_speed,

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
          ammo_default_total: this.$store.state.weapon.ammo_clip_size,
          ammo_stockpile_max: this.$store.state.weapon.ammo_clip_size,
          ammo_clip_reload_max: this.$store.state.weapon.ammo_clip_size,
          ammo_no_remove_from_stockpile: '0',
          ammo_min_to_fire: '1',
          uses_ammo_pool: '1',

          damage_type: 'bullet',
          damage_near_value: this.$store.state.weapon.damage_value,
          damage_far_value: this.$store.state.weapon.damage_value,
          damage_very_far_value: this.$store.state.weapon.damage_value,

          fire_mode: 'automatic',
          is_semi_auto: this.$store.state.weapon.is_semi_auto,
          fire_rate: this.$store.state.weapon.fire_rate,

          reload_time: this.$store.state.weapon.reload_time,
          reload_time_late1: Math.round((this.$store.state.weapon.reload_time * 0.4) * 10) / 10 + '',
          reloadempty_time: this.$store.state.weapon.reloadempty_time,
          reloadempty_time_late1: Math.round((this.$store.state.weapon.reloadempty_time * 0.6) *10) / 10 + '',
          reloadempty_time_late2: Math.round((this.$store.state.weapon.reloadempty_time * 0.3) *10) / 10 + '',

          //ToDo: R-99以外の反動も選択できるようにする
          viewkick_pattern: 'r97_2',
          viewkick_spring: 'r97_vkp',
          viewkick_spring_hot: 'r97_vkp_hot',
          viewkick_spring_heatpershot: '1.0',
          viewkick_spring_cooldown_holdtime: '0.08',
          viewkick_spring_cooldown_fadetime: '0.05',
          viewmodel_spring_jolt: 'autofire_viewmodel_jolt',
          viewmodel_jolt_scale: '1.0',
          viewmodel_jolt_backwardPerShot: '-0.3',
          viewmodel_jolt_roll: '0 3.5 0',
          viewmodel_jolt_side: '0 0.05 0',
          viewkick_pitch_base: '1.0',
          viewkick_pitch_random: '1.0',
          viewkick_pitch_softScale: '2.325',
          viewkick_pitch_hardScale: '0.35',

          viewkick_yaw_base: '1.0',
          viewkick_yaw_random: '1.0',
          viewkick_yaw_random_innerexclude: '0.05',
          viewkick_yaw_softScale: '0.725',
          viewkick_yaw_hardScale: '0.35',

          viewkick_roll_base: '0.8',
          viewkick_roll_randomMin: '-0.2',
          viewkick_roll_randomMax: '0.2',
          viewkick_roll_softScale: '0.7',
          viewkick_roll_hardScale: '0.45',
          viewkick_hipfire_weaponFraction: '0.05',
          viewkick_hipfire_weaponFraction_vmScale: '0.95',
          viewkick_ads_weaponFraction: '0.0',
          viewkick_ads_weaponFraction_vmScale: '1.0',

          viewkick_scale_firstshot_hipfire: '1.0',
          viewkick_scale_min_hipfire: '1.0',
          viewkick_scale_max_hipfire: '1.0',
          viewkick_scale_firstshot_ads: '1.0',
          viewkick_scale_min_ads: '1.0',
          viewkick_scale_max_ads: '1.0',
          viewkick_scale_valuePerShot: '1',
          viewkick_scale_pitch_valueLerpStart: '0',
          viewkick_scale_pitch_valueLerpEnd: '6',
          viewkick_scale_yaw_valueLerpStart: '0',
          viewkick_scale_yaw_valueLerpEnd: '6',
          viewkick_scale_valueDecayDelay: '0.09',
          viewkick_scale_valueDecayRate: '50',

          viewkick_perm_pitch_base: '0.0',
          viewkick_perm_pitch_random: '0.0',
          viewkick_perm_yaw_base: '0.0',
          viewkick_perm_yaw_random: '0.0',
          viewkick_perm_yaw_random_innerexclude: '0.0',

          viewmodel_shake_forward: '0.2',
          active_crosshair_count: '1',
          rui_crosshair_index: '0',
        }
        const weapon_dict_crosshair = {
          ui: 'ui/crosshair_tri',
          base_spread: '0.0'
        }
        this.weapon_txt = object2text(
          weapon_dict,
          this.$store.state.weapon.weapon_type + '\nWeaponData',
          object2text(weapon_dict_crosshair, '\nRUI_CrosshairData\n{DefaultArgs\n{adjustedSpread  weapon_spread\nadsFrac  player_zoomFrac\nisSprinting  player_is_sprinting\nisReloading  weapon_is_reloading\nteamColor  crosshair_team_color\nisAmped  weapon_is_amped\ncrosshairMovementX  crosshair_movement_x\ncrosshairMovementY  crosshair_movement_y\n}\nCrosshair_1', '\n}')
        )
        console.log(this.weapon_txt)
        this.copyTextButton = false
      },
      copyText: function () {
        if (navigator.clipboard){
          navigator.clipboard.writeText(this.weapon_txt)
        }
      }
    }
  })
</script>
