<template>
  <v-container fluid>
    <v-row>
      <v-col
        cols="12"
        lg="10"
        offset-lg="1"
      >
        <v-card class="mb-4">
          <v-tabs v-model="model" grow show-arrows>
            <v-tab href="#tab-appearance">{{ $t('pages.weapons.tab.appearance') }}</v-tab>
            <v-tab href="#tab-fire">{{ $t('pages.weapons.tab.fire') }}</v-tab>
            <v-tab href="#tab-damage">{{ $t('pages.weapons.tab.damage') }}</v-tab>
            <v-tab href="#tab-ammo">{{ $t('pages.weapons.tab.ammo') }}</v-tab>
            <v-tab href="#tab-viewkick">{{ $t('pages.weapons.tab.viewkick') }}</v-tab>
            <v-tab href="#tab-other">{{ $t('pages.weapons.tab.other') }}</v-tab>
          </v-tabs>

          <v-tabs-items v-model="model">
            <v-tab-item value="tab-appearance" class="pa-4">
              <v-row no-gutters>
                <v-col cols="12">
                  <property-input
                    :label="$t('weapon_property.id')"
                    weaponKey="id"
                    prefix="mp_weapon_"
                    suffix=".txt"
                    :hint="$t('weapon_property.id_hint')"
                  ></property-input>
                  <property-input
                    :label="$t('weapon_property.printname')"
                    weaponKey="printname"
                  ></property-input>
                  <property-input
                    :label="$t('weapon_property.shortprintname')"
                    weaponKey="shortprintname"
                  ></property-input>
                  <property-input
                    :label="$t('weapon_property.description')"
                    weaponKey="description"
                  ></property-input>
                  <property-select
                    :label="$t('weapon_property.icon')"
                    :items="calledWeaponIcon"
                    weaponKey="icon"
                  ></property-select>
                  <property-select
                    :label="$t('weapon_property.model')"
                    :items="calledWeaponModel"
                    weaponKey="model"
                  ></property-select>
                  <property-select
                    :label="$t('weapon_property.crosshair')"
                    :items="crosshair"
                    weaponKey="crosshair"
                  ></property-select>
                </v-col>
              </v-row>
            </v-tab-item>
            <v-tab-item value="tab-fire" class="pa-4">
              <property-select
                :label="$t('weapon_property.sound')"
                :hint="$t('weapon_property.sound_hint')"
                :items="weaponSound"
                weaponKey="sound"
              ></property-select>
              <property-input
                :label="$t('weapon_property.projectile_launch_speed')"
                type="number"
                placeholder="10,000~30,000"
                weaponKey="projectile_launch_speed"
              ></property-input>
              <property-input
                :label="$t('weapon_property.projectilemodel')"
                weaponKey="projectilemodel"
              ></property-input>
              <property-select
                :label="$t('weapon_property.projectile_trail_effect_0')"
                :items="projectileTrailEffect"
                weaponKey="projectile_trail_effect_0"
              ></property-select>
              <property-input
                :label="$t('weapon_property.fire_rate')"
                type="number"
                weaponKey="fire_rate"
                min="0"
                step="0.1"
              ></property-input>
              <property-checkbox
                :label="$t('weapon_property.is_semi_auto')"
                weaponKey="is_semi_auto"
              ></property-checkbox>
              <property-input
                :label="$t('weapon_property.burst_fire_count')"
                type="number"
                weaponKey="burst_fire_count"
                min="1"
              ></property-input>
              <property-input
                :label="$t('weapon_property.burst_fire_delay')"
                type="number"
                weaponKey="burst_fire_delay"
                :disabled="!isBurst"
                min="0"
                step="0.1"
              ></property-input>
            </v-tab-item>
            <v-tab-item value="tab-damage" class="pa-4">
              <property-input
                :label="$t('weapon_property.damage_value')"
                type="number"
                weaponKey="damage_value"
                min="1"
              ></property-input>
              <property-input
                :label="$t('weapon_property.damage_headshot_scale')"
                type="number"
                weaponKey="damage_headshot_scale"
                step="0.1"
              ></property-input>
            </v-tab-item>
            <v-tab-item value="tab-ammo" class="pa-4">
              <property-input
                :label="$t('weapon_property.ammo_per_shot')"
                type="number"
                weaponKey="ammo_per_shot"
                min="0"
              ></property-input>
              <property-select
                :label="$t('weapon_property.ammo_pool_type')"
                :items="ammoType"
                weaponKey="ammo_pool_type"
              ></property-select>
              <property-input
                :label="$t('weapon_property.ammo_clip_size')"
                type="number"
                weaponKey="ammo_clip_size"
                min="1"
              ></property-input>
              <v-row>
                <v-col
                  cols="12"
                  xl="10"
                >
                  <v-card
                    :disabled="!hasExtendedMag"
                    elevation="2"
                    class="mb-4"
                  >
                    <v-card-title>{{ $t('weapon_property.extended_mag') }}</v-card-title>
                    <property-input
                      :label="$t('weapon_property.mag_l1')"
                      type="number"
                      weaponKey="mag_l1"
                      min="1"
                      class="mx-2"
                    ></property-input>
                    <property-input
                      :label="$t('weapon_property.mag_l2')"
                      type="number"
                      weaponKey="mag_l2"
                      min="1"
                      class="mx-2"
                    ></property-input>
                    <property-input
                      :label="$t('weapon_property.mag_l3')"
                      type="number"
                      weaponKey="mag_l3"
                      min="1"
                      class="mx-2"
                    ></property-input>
                  </v-card>
                </v-col>
              </v-row>
              <property-input
                :label="$t('weapon_property.reload_time')"
                type="number"
                weaponKey="reload_time"
                min="0"
                step="0.1"
              ></property-input>
              <property-input
                :label="$t('weapon_property.reloadempty_time')"
                type="number"
                weaponKey="reloadempty_time"
                min="0"
                step="0.1"
              ></property-input>
            </v-tab-item>
            <v-tab-item value="tab-viewkick" class="pa-4">
              <property-select
                :label="$t('weapon_property.viewkick_preset')"
                :items="viewkickPreset"
                weaponKey="viewkick_preset"
              ></property-select>
            </v-tab-item>
            <v-tab-item value="tab-other" class="pa-4">
              <property-select
                :label="$t('weapon_property.weapon_type')"
                :items="weaponType"
                weaponKey="weapon_type"
              ></property-select>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-col>
    </v-row>
    <v-speed-dial
      v-model="fab"
      bottom
      right
      transition="slide-y-reverse-transition"
      fixed
    >
      <template v-slot:activator>
        <v-tooltip left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              fab
              @click="returnTop"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon v-if="fab">mdi-menu-down</v-icon>
              <v-icon v-else>mdi-menu-up</v-icon>
            </v-btn>
          </template>
          <span>{{ $t('pages.weapons.menu') }}</span>
        </v-tooltip>
      </template>
      <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            dark
            fab
            small
            @click="copyText"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-content-copy</v-icon>
          </v-btn>
        </template>
        <span>{{ $t('pages.weapons.copy') }}</span>
      </v-tooltip>
      <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            dark
            fab
            small
            @click="downloadText"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-download</v-icon>
          </v-btn>
        </template>
        <span>{{ $t('pages.weapons.download') }}</span>
      </v-tooltip>
      <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            dark
            fab
            small
            @click.stop="openPreviewDialog"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-eye</v-icon>
          </v-btn>
        </template>
        <span>{{ $t('pages.weapons.preview') }}</span>
      </v-tooltip>
    </v-speed-dial>
    <v-dialog
      v-model="previewDialog"
      scrollable
    >
      <v-card>
        <v-card-title>{{ $t('pages.weapons.preview') }}</v-card-title>
        <v-card-text>
          <v-textarea
            solo
            readonly
            auto-grow
            :value="weaponText"
            rows="20"
            class="mx-4 mt-2"
          ></v-textarea>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            v-on:click="copyText"
          >
            <v-icon
              dark
              left
            >
              mdi-content-copy
            </v-icon>
            {{ $t('pages.weapons.copy') }}
          </v-btn>
          <v-btn
            color="primary"
            text
            v-on:click="downloadText"
          >
            <v-icon
              dark
              left
            >
              mdi-download
            </v-icon>
            {{ $t('pages.weapons.download') }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import PropertyCheckbox from '../components/PropertyCheckbox.vue'
import PropertyInput from '../components/PropertyInput.vue'
import PropertySelect from '../components/PropertySelect.vue'

  export default Vue.extend({
    name: 'Weapons',
    components: {
      PropertyCheckbox,
      PropertyInput,
      PropertySelect,
    },
    data: () => ({
      model: '',
      previewDialog: false
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
      crosshair: function() {
        return this.$store.state.crosshair
      },
      weaponSound: function() {
        return this.$store.state.weaponSound
      },
      projectileTrailEffect: function() {
        return this.$store.state.projectileTrailEffect
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
      hasExtendedMag: function() {
        return this.$store.state.weapon.ammo_pool_type != 'shotgun'
      },
      viewkickPreset: function() {
        return this.$store.state.viewkickPreset
      },
      weaponText: function() {
        return this.$store.state.weaponText
      }
    },
    methods: {
      openPreviewDialog() {
        this.$store.dispatch('generationText')
        this.previewDialog = true
      },
      copyText: function () {
        this.$store.dispatch('generationText')
        if (navigator.clipboard){
          navigator.clipboard.writeText(this.$store.state.weaponText)
        }
      },
      downloadText: function() {
        this.$store.dispatch('generationText')
        const blob = new Blob([this.$store.state.weaponText], {"type": "text/plain"})
        const link = document.createElement('a')
        link.href = window.URL.createObjectURL(blob)
        link.download = 'mp_weapon_' + this.$store.state.weapon.id + '.txt'
        link.click()
        URL.revokeObjectURL(link.href)
      }
    }
  })
</script>
