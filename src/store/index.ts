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
      {text: 'AR', value: '#base "_base_assault_rifle.txt"'},
      {text: 'SMG', value: '#base "_base_smg.txt"'},
      {text: 'SR', value: '#base "_base_sniper.txt"\n#base "_base_sniper_optics.txt"'},
      {text: 'SG', value: '#base "_base_shotgun.txt"'},
      {text: 'Pistol', value: '#base "_base_handgun.txt"'},
      {text: 'LMG', value: '#base "_base_lmg.txt"'},
    ],
    calledWeaponIcon: [ //rui/menu/dpad_comms/emoji/fist
      {text: 'Alternator', value: 'alternator'},
      {text: 'Charge Rifle', value: 'charge_rifle'},
      {text: 'Devotion', value: 'devotion'},
      {text: 'EVA-8 Auto', value: 'eva8'},
      {text: 'Flatline', value: 'flatline'},
      {text: 'G7 Scout', value: 'g7'},
      {text: 'Havoc', value: 'energy_ar'},
      {text: 'Hemlok', value: 'hemlok'},
      {text: 'Kraber', value: 'sniper'},
      {text: 'Longbow DMR', value: 'longbow'},
      {text: 'LStar', value: 'lstar'},
      {text: 'Mastiff', value: 'mastiff'},
      {text: 'Mozanpique', value: 'mozanpique'},
      {text: 'P2020', value: 'p2020'},
      {text: 'Peacekeeper', value: 'peacekeeper'},
      {text: 'Prowler', value: 'prowler'},
      {text: 'R-301', value: 'r301'},
      {text: 'R-99', value: 'r97'},
      {text: 'RE-45', value: 'r45'},
      {text: 'Spitfire', value: 'spitfire'},
      {text: 'Triple Take', value: 'triple_take'},
      {text: 'Wingman', value: 'wingman'},
    ],
    calledWeaponModel: [
      {text: 'Alternator', value: 'alternator_smg'},
      {text: 'Charge Rifle', value: 'defender'},
      {text: 'Devotion', value: 'hemlock_br'},
      {text: 'EVA-8 Auto', value: 'w1128'},
      {text: 'Flatline', value: 'vinson'},
      {text: 'G7 Scout', value: 'g2a4'}, //g2
      {text: 'Havoc', value: 'beam_ar'},
      {text: 'Hemlok', value: 'hemlok'}, //m1a1_hemlok
      {text: 'Kraber', value: 'at_rifle'},
      {text: 'Longbow DMR', value: 'rspn101_dmr'},
      {text: 'LStar', value: 'lstar'},
      {text: 'Mastiff', value: 'mastiff'}, //mastiff_stgn
      {text: 'Mozanpique', value: 'pstl_sa3'},
      {text: 'P2020', value: 'p2011'},
      {text: 'Peacekeeper', value: 'peacekeeper'},
      {text: 'Prowler', value: 'prowler_smg'},
      {text: 'R-301', value: 'rspn101'},
      {text: 'R-99', value: 'r97'},
      {text: 'RE-45', value: 'p2011_auto'},
      {text: 'Spitfire', value: 'lmg_hemlock'},
      {text: 'Triple Take', value: 'doubletake'},
      {text: 'Wingman', value: 'b3wing'},
    ],
    ammoType: [
      {text: 'ライトアモ', value: 'bullet'},
      {text: 'ヘビーアモ', value: 'highcal'},
      {text: 'エネルギーアモ', value: 'special'},
      {text: 'ショットガンアモ', value: 'shotgun'},
      {text: '無し(ケアパケ武器)', value: 'none'}
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
