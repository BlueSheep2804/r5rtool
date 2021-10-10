import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

interface weaponProperty {
  [key: string]: string
  weapon_type: string;
  printname: string;
  icon: string;
  model: string;
  is_semi_auto: string;
  projectile_launch_speed: string;
  damage_value: string;
  fire_rate: string;
  burst_fire_count: string;
  burst_fire_delay: string;
  ammo_pool_type: string;
  ammo_clip_size: string;
  ammo_stockpile_max: string;
  reload_time: string;
  reloadempty_time: string;
}

export default new Vuex.Store({
  state: {
    base_weapon_txt: 'WeaponData\n{\n',
    weapon: {
      weapon_type: '',
      printname: '',
      icon: '',
      model: '',
      is_semi_auto: '0',
      projectile_launch_speed: '21000',
      damage_value: '12',
      fire_rate: '18',
      burst_fire_count: '1',
      burst_fire_delay: '0.2',
      ammo_pool_type: 'bullet',
      ammo_clip_size: '18',
      ammo_stockpile_max: '180',
      reload_time: '1.8',
      reloadempty_time: '2.5',
    } as weaponProperty,
    weaponType: [
      {text: 'weapon_type.ar', value: '#base "_base_assault_rifle.txt"'},
      {text: 'weapon_type.smg', value: '#base "_base_smg.txt"'},
      {text: 'weapon_type.lmg', value: '#base "_base_lmg.txt"'},
      {text: 'weapon_type.sr', value: '#base "_base_sniper.txt"\n#base "_base_sniper_optics.txt"'},
      {text: 'weapon_type.sg', value: '#base "_base_shotgun.txt"'},
      {text: 'weapon_type.pistol', value: '#base "_base_handgun.txt"'},
    ],
    calledWeaponIcon: [ //rui/menu/dpad_comms/emoji/fist
      {text: 'weapons.alternator', value: 'alternator'},
      {text: 'weapons.charge_rifle', value: 'charge_rifle'},
      {text: 'weapons.devotion', value: 'devotion'},
      {text: 'weapons.eva8', value: 'eva8'},
      {text: 'weapons.flatline', value: 'flatline'},
      {text: 'weapons.g7', value: 'g7'},
      {text: 'weapons.energy_ar', value: 'energy_ar'},
      {text: 'weapons.hemlok', value: 'hemlok'},
      {text: 'weapons.sniper', value: 'sniper'},
      {text: 'weapons.longbow', value: 'longbow'},
      {text: 'weapons.lstar', value: 'lstar'},
      {text: 'weapons.mastiff', value: 'mastiff'},
      {text: 'weapons.mozambique', value: 'mozambique'},
      {text: 'weapons.p2020', value: 'p2020'},
      {text: 'weapons.peacekeeper', value: 'peacekeeper'},
      {text: 'weapons.prowler', value: 'prowler'},
      {text: 'weapons.r301', value: 'r301'},
      {text: 'weapons.r97', value: 'r97'},
      {text: 'weapons.r45', value: 'r45'},
      {text: 'weapons.spitfire', value: 'spitfire'},
      {text: 'weapons.triple_take', value: 'triple_take'},
      {text: 'weapons.wingman', value: 'wingman'},
    ],
    calledWeaponModel: [
      {text: 'weapons.alternator', value: 'alternator_smg'},
      {text: 'weapons.charge_rifle', value: 'defender'},
      {text: 'weapons.devotion', value: 'hemlock_br'},
      {text: 'weapons.eva8', value: 'w1128'},
      {text: 'weapons.flatline', value: 'vinson'},
      {text: 'weapons.g7', value: 'g2a4'}, //g2
      {text: 'weapons.energy_ar', value: 'beam_ar'},
      {text: 'weapons.hemlok', value: 'hemlok'}, //m1a1_hemlok
      {text: 'weapons.sniper', value: 'at_rifle'},
      {text: 'weapons.longbow', value: 'rspn101_dmr'},
      {text: 'weapons.lstar', value: 'lstar'},
      {text: 'weapons.mastiff', value: 'mastiff'}, //mastiff_stgn
      {text: 'weapons.mozambique',  value: 'pstl_sa3'},
      {text: 'weapons.p2020', value: 'p2011'},
      {text: 'weapons.peacekeeper', value: 'peacekeeper'},
      {text: 'weapons.prowler', value: 'prowler_smg'},
      {text: 'weapons.r301', value: 'rspn101'},
      {text: 'weapons.r97', value: 'r97'},
      {text: 'weapons.r45', value:  'p2011_auto'},
      {text: 'weapons.spitfire', value: 'lmg_hemlock'},
      {text: 'weapons.triple_take', value: 'doubletake'},
      {text: 'weapons.wingman', value: 'b3wing'},
    ],
    ammoType: [
      {text: 'ammo_type.bullet', value: 'bullet'},
      {text: 'ammo_type.highcal', value: 'highcal'},
      {text: 'ammo_type.special', value: 'special'},
      {text: 'ammo_type.shotgun', value: 'shotgun'},
      {text: 'ammo_type.none', value: 'none'}
    ]
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
