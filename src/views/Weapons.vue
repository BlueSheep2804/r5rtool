<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
      >
        <v-row no-gutters>
          <v-col
            cols="12"
            sm="10"
            md="5"
            order-md="last"
          >
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
              weaponKey="projectile_launch_speed"
            ></property-input>
            <property-input
              label="ダメージ"
              type="number"
              weaponKey="damage_value"
              min="1"
            ></property-input>
            <property-input
              label="発射レート"
              type="number"
              weaponKey="fire_rate"
              min="0"
              step="0.1"
            ></property-input>
            <property-input
              label="バースト"
              type="number"
              weaponKey="burst_fire_count"
              min="1"
            ></property-input>
            <property-input
              label="バースト間隔"
              type="number"
              weaponKey="burst_fire_delay"
              :disabled="!isBurst"
              min="0"
              step="0.1"
            ></property-input>
            <property-select
              label="アモタイプ"
              :items="ammoType"
              weaponKey="ammo_pool_type"
            ></property-select>
            <property-input
              label="マガジンの弾数"
              type="number"
              weaponKey="ammo_clip_size"
              min="1"
            ></property-input>
            <property-input
              label="総弾数"
              type="number"
              weaponKey="ammo_stockpile_max"
              v-bind:disabled="!isAmmoNone"
              min="1"
            ></property-input>
            <property-input
              label="タクティカルリロード"
              type="number"
              weaponKey="reload_time"
              min="0"
              step="0.1"
            ></property-input>
            <property-input
              label="リロード"
              type="number"
              weaponKey="reloadempty_time"
              min="0"
              step="0.1"
            ></property-input>
          </v-col>
          <v-spacer></v-spacer>
          <v-col
            cols="12"
            md="6"
            order-md="first"
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
            <v-textarea
              solo
              readonly
              auto-grow
              :value="weaponText"
              class="mt-4"
            ></v-textarea>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-btn
      color="primary"
      dark
      bottom
      right
      fab
      fixed
      @click="returnTop"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
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
      PropertyCheckbox,
      PropertyInput,
      PropertySelect,
    },
    data: () => ({
      weaponText: 'none',
      copyTextButton: true
    }),
    computed: {
      weaponType: function() {
        return this.$store.state.weaponType
      },
      calledWeaponIcon: function() {
        return this.$store.state.calledWeaponIcon
      },
      calledWeaponModel: function() {
        return this.$store.state.calledWeaponModel
      },
      isBurst: function() {
        if (this.$store.state.weapon.burst_fire_count != '1') {
          return true
        } else {
          return false
        }
      },
      ammoType: function() {
        return this.$store.state.ammoType
      },
      isAmmoNone: function() {
        if (this.$store.state.weapon.ammo_pool_type == 'none') {
          return true
        } else {
          return false
        }
      },
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

        let weapon_dict_base = {
          printname: this.$store.state.weapon.printname,
          shortprintname: this.$store.state.weapon.printname,
          description: this.$store.state.weapon.printname,
          longdesc: this.$store.state.weapon.printname,

          weapon_type_flags: 'WPT_PRIMARY',

          menu_icon: 'rui/weapon_icons/r5/weapon_' + icon,
          hud_icon: 'rui/weapon_icons/r5/weapon_' + icon,

          viewmodel: 'mdl/weapons/' + model_path + '/ptpov_' + model + '.rmdl',
          playermodel: 'mdl/weapons/' + model_path + '/w_' + model + '.rmdl',

          fire_sound_1_player_1p: 'Weapon_bulletCasings.Bounce',
          fire_sound_1_player_3p: 'Weapon_bulletCasings.Bounce',
          fire_sound_2_player_1p: 'Weapon_r101_SingleShot_1P',
          fire_sound_2_player_3p: 'Weapon_r101_SingleShot_3P',
          sound_dryfire: 'assalt_rifle_dryfire',
          sound_pickup: 'wpn_pickup_SMG_1P',
          looping_sounds: '0',
          sound_zoom_in: 'Weapon_R97_ADS_In',
          sound_zoom_out: 'Weapon_R97_ADS_Out',
          //burst_or_looping_fire_sound_start_1p: 'Weapon_R97_Fire_First_1P',
          //burst_or_looping_fire_sound_middle_1p: 'Weapon_R97_Fire_Loop_1P',
          //burst_or_looping_fire_sound_end_1p: 'Weapon_R97_Fire_End_1P',
          //burst_or_looping_fire_sound_start_3p: 'Weapon_R97_Fire_First_3P',
          //burst_or_looping_fire_sound_middle_3p: 'Weapon_R97_Fire_Loop_3P',
          //burst_or_looping_fire_sound_end_3p: 'Weapon_R97_Fire_End_3P',
          low_ammo_sound_name_1: 'R101_LowAmmo_Shot1',
          low_ammo_sound_name_2: 'R101_LowAmmo_Shot2',
          low_ammo_sound_name_3: 'R101_LowAmmo_Shot3',
          low_ammo_sound_name_4: 'R101_LowAmmo_Shot4',
          low_ammo_sound_name_5: 'R101_LowAmmo_Shot5',
          low_ammo_sound_name_6: 'R101_LowAmmo_Shot6',

          damage_type: 'bullet',
          damage_near_value: this.$store.state.weapon.damage_value,
          damage_far_value: this.$store.state.weapon.damage_value,
          damage_very_far_value: this.$store.state.weapon.damage_value,

          fire_mode: 'automatic',
          is_semi_auto: this.$store.state.weapon.is_semi_auto,
          fire_rate: this.$store.state.weapon.fire_rate,
          projectile_launch_speed: this.$store.state.weapon.projectile_launch_speed,

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

        let uses_ammo_pool = '1'
        if (this.$store.state.weapon.ammo_pool_type == 'none') {
          uses_ammo_pool = '0'
        }

        const weapon_dict_ammo = {
          ammo_pool_type: this.$store.state.weapon.ammo_pool_type,
          ammo_clip_size: this.$store.state.weapon.ammo_clip_size,
          ammo_default_total: this.$store.state.weapon.ammo_clip_size + this.$store.state.weapon.ammo_stockpile_max,
          ammo_stockpile_max: this.$store.state.weapon.ammo_stockpile_max,
          ammo_clip_reload_max: this.$store.state.weapon.ammo_clip_size,
          ammo_no_remove_from_stockpile: '0',
          ammo_min_to_fire: '1',
          uses_ammo_pool: uses_ammo_pool,
        }

        let weapon_dict = { ...weapon_dict_base, ...weapon_dict_ammo }

        if (this.$store.state.weapon.burst_fire_count != '1') {
          const weapon_dict_burst = {
            burst_fire_count: this.$store.state.weapon.burst_fire_count,
            burst_fire_delay: this.$store.state.weapon.burst_fire_delay,
          }
          weapon_dict = { 
            ...weapon_dict,
            ...weapon_dict_burst
          }
        }

        const weapon_dict_crosshair = {
          ui: 'ui/crosshair_tri',
          base_spread: '0.0'
        }
        this.weaponText = object2text(
          weapon_dict,
          this.$store.state.weapon.weapon_type + '\nWeaponData',
          object2text(weapon_dict_crosshair, '\nRUI_CrosshairData\n{DefaultArgs\n{adjustedSpread  weapon_spread\nadsFrac  player_zoomFrac\nisSprinting  player_is_sprinting\nisReloading  weapon_is_reloading\nteamColor  crosshair_team_color\nisAmped  weapon_is_amped\ncrosshairMovementX  crosshair_movement_x\ncrosshairMovementY  crosshair_movement_y\n}\nCrosshair_1', '\n}')
        )
        this.copyTextButton = false
      },
      copyText: function () {
        if (navigator.clipboard){
          navigator.clipboard.writeText(this.weaponText)
        }
      },
      returnTop: function () {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      },
    }
  })
</script>

<style>
.fab {
  position: relative;
}
</style>