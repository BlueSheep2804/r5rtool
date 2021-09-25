import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

interface weaponProperty {
  [key: string]: string
  printname: string;
  damage_value: string;
  fire_rate: string;
  ammo_clip_size: string;
}

export default new Vuex.Store({
  state: {
    base_weapon_txt: 'WeaponData\n{\n',
    weapon: {
      printname: '',
      damage_value: '12',
      fire_rate: '18',
      ammo_clip_size: '18',
    } as weaponProperty
  },
  mutations: {
    weaponPropertyUpdate(state, value: string[]) {
      state.weapon[value[0]] = value[1]
    }
  },
  actions: {
  },
  modules: {
  }
})
