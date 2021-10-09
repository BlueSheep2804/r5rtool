import Vue from 'vue'
import Vuex from 'vuex'
import i18n from '../i18n'

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
      {text: i18n.t('weapon_type.ar'), value: '#base "_base_assault_rifle.txt"'},
      {text: i18n.t('weapon_type.smg'), value: '#base "_base_smg.txt"'},
      {text: i18n.t('weapon_type.lmg'), value: '#base "_base_lmg.txt"'},
      {text: i18n.t('weapon_type.sr'), value: '#base "_base_sniper.txt"\n#base "_base_sniper_optics.txt"'},
      {text: i18n.t('weapon_type.sg'), value: '#base "_base_shotgun.txt"'},
      {text: i18n.t('weapon_type.pistol'), value: '#base "_base_handgun.txt"'},
    ],
    calledWeaponIcon: [ //rui/menu/dpad_comms/emoji/fist
      {text: i18n.t('weapons.alternator'), value: 'alternator'},
      {text: i18n.t('weapons.charge_rifle'), value: 'charge_rifle'},
      {text: i18n.t('weapons.devotion'), value: 'devotion'},
      {text: i18n.t('weapons.eva8'), value: 'eva8'},
      {text: i18n.t('weapons.flatline'), value: 'flatline'},
      {text: i18n.t('weapons.g7'), value: 'g7'},
      {text: i18n.t('weapons.energy_ar'), value: 'energy_ar'},
      {text: i18n.t('weapons.hemlok'), value: 'hemlok'},
      {text: i18n.t('weapons.sniper'), value: 'sniper'},
      {text: i18n.t('weapons.longbow'), value: 'longbow'},
      {text: i18n.t('weapons.lstar'), value: 'lstar'},
      {text: i18n.t('weapons.mastiff'), value: 'mastiff'},
      {text: i18n.t('weapons.mozambique'), value: 'mozambique'},
      {text: i18n.t('weapons.p2020'), value: 'p2020'},
      {text: i18n.t('weapons.peacekeeper'), value: 'peacekeeper'},
      {text: i18n.t('weapons.prowler'), value: 'prowler'},
      {text: i18n.t('weapons.r301'), value: 'r301'},
      {text: i18n.t('weapons.r97'), value: 'r97'},
      {text: i18n.t('weapons.r45'), value: 'r45'},
      {text: i18n.t('weapons.spitfire'), value: 'spitfire'},
      {text: i18n.t('weapons.triple_take'), value: 'triple_take'},
      {text: i18n.t('weapons.wingman'), value: 'wingman'},
    ],
    calledWeaponModel: [
      {text: i18n.t('weapons.alternator'), value: 'alternator_smg'},
      {text: i18n.t('weapons.charge_rifle'), value: 'defender'},
      {text: i18n.t('weapons.devotion'), value: 'hemlock_br'},
      {text: i18n.t('weapons.eva8'), value: 'w1128'},
      {text: i18n.t('weapons.flatline'), value: 'vinson'},
      {text: i18n.t('weapons.g7'), value: 'g2a4'}, //g2
      {text: i18n.t('weapons.energy_ar'), value: 'beam_ar'},
      {text: i18n.t('weapons.hemlok'), value: 'hemlok'}, //m1a1_hemlok
      {text: i18n.t('weapons.sniper'), value: 'at_rifle'},
      {text: i18n.t('weapons.longbow'), value: 'rspn101_dmr'},
      {text: i18n.t('weapons.lstar'), value: 'lstar'},
      {text: i18n.t('weapons.mastiff'), value: 'mastiff'}, //mastiff_stgn
      {text: i18n.t('weapons.mozambique'),  value: 'pstl_sa3'},
      {text: i18n.t('weapons.p2020'), value: 'p2011'},
      {text: i18n.t('weapons.peacekeeper'), value: 'peacekeeper'},
      {text: i18n.t('weapons.prowler'), value: 'prowler_smg'},
      {text: i18n.t('weapons.r301'), value: 'rspn101'},
      {text: i18n.t('weapons.r97'), value: 'r97'},
      {text: i18n.t('weapons.r45'), value:  'p2011_auto'},
      {text: i18n.t('weapons.spitfire'), value: 'lmg_hemlock'},
      {text: i18n.t('weapons.triple_take'), value: 'doubletake'},
      {text: i18n.t('weapons.wingman'), value: 'b3wing'},
    ],
    ammoType: [
      {text: i18n.t('ammo_type.bullet'), value: 'bullet'},
      {text: i18n.t('ammo_type.highcal'), value: 'highcal'},
      {text: i18n.t('ammo_type.special'), value: 'special'},
      {text: i18n.t('ammo_type.shotgun'), value: 'shotgun'},
      {text: i18n.t('ammo_type.none'), value: 'none'}
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
