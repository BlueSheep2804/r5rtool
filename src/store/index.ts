import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

interface weaponProperty {
  [key: string]: string | Record<string, unknown>
  weapon_type: string;
  printname: string;
  shortprintname: string;
  description: string;
  icon: string;
  model: string;
  crosshair: string;
  sound: Record<string, unknown>;
  is_semi_auto: string;
  projectile_launch_speed: string;
  damage_value: string;
  fire_rate: string;
  ammo_per_shot: string;
  burst_fire_count: string;
  burst_fire_delay: string;
  ammo_pool_type: string;
  ammo_clip_size: string;
  mag_l1: string;
  mag_l2: string;
  mag_l3: string;
  reload_time: string;
  reloadempty_time: string;
}

export default new Vuex.Store({
  state: {
    base_weapon_txt: 'WeaponData\n{\n',
    weapon: {
      weapon_type: '',
      printname: '',
      shortprintname: '',
      description: '',
      icon: '',
      model: '',
      crosshair: '',
      sound: {},
      is_semi_auto: '0',
      projectile_launch_speed: '21000',
      damage_value: '12',
      fire_rate: '18',
      ammo_per_shot: '1',
      burst_fire_count: '1',
      burst_fire_delay: '0.2',
      ammo_pool_type: 'bullet',
      ammo_clip_size: '18',
      mag_l1: '20',
      mag_l2: '23',
      mag_l3: '27',
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
      {text: 'ammo_type.shotgun', value: 'shotgun'}
    ],
    weaponSound: [
      {
        text: 'weapons.alternator',
        value: {
          'fire_sound_1_player_1p': 'Weapon_Alternator_FirstShot_1P',
          'fire_sound_1_player_3p': 'Weapon_bulletCasings.Bounce',
          'fire_sound_1_npc': '',
          'fire_sound_2_player_1p': 'Weapon_Alternator_SecondShot_1P',
          'fire_sound_2_player_3p': '',
          'fire_sound_2_npc': 'Weapon_Alternator_SecondShot_NPC',
        }
      },
      {
        text: 'weapons.charge_rifle',
        value: {
          'fire_sound_1_player_1p': 'Weapon_ChargeRifle_Fire_1P',
          'fire_sound_1_player_3p': 'Weapon_ChargeRifle_Fire_3P',
          'fire_sound_1_npc': 'Weapon_ChargeRifle_Fire_NPC',
          'fire_sound_2_player_1p': '',
          'fire_sound_2_player_3p': '',
          'fire_sound_2_npc': '',
        }
      },
      {
        text: 'weapons.devotion',
        value: {
          'fire_sound_1_player_1p': 'Weapon_Devotion_SecondShot_1P',
          'fire_sound_1_player_3p': '',
          'fire_sound_1_npc': 'Weapon_ColdWar_Fire_3P',
          'fire_sound_2_player_1p': 'weapon_devotion_firstshot_1p',
          'fire_sound_2_player_3p': 'Weapon_Devotion_SecondShot_3P',
          'fire_sound_2_npc': '',
        }
      },
      {
        text: 'weapons.eva8',
        value: {
          'fire_sound_1_player_1p': 'Weapon_EVA8_AutoFire_1P',
          'fire_sound_1_player_3p': 'Weapon_EVA8_AutoFire_3P',
          'fire_sound_1_npc': 'Weapon_EVA8_AutoFire_NPC',
          'fire_sound_2_player_1p': '',
          'fire_sound_2_player_3p': '',
          'fire_sound_2_npc': '',
        }
      },
      {
        text: 'weapons.flatline',
        value: {
          'fire_sound_1_player_1p': 'Vinson_shell',
          'fire_sound_1_player_3p': 'Weapon_bulletCasings.Bounce',
          'fire_sound_1_npc': '',
          'fire_sound_2_player_1p': 'Weapon_Vinson_SecondShot_1P',
          'fire_sound_2_player_3p': '',
          'fire_sound_2_npc': 'Weapon_Vinson_SecondShot_NPC',
          'fire_sound_3_player_1p': 'Weapon_Vinson_FirstShot_1P',
          'fire_sound_3_player_3p': '',
          'fire_sound_3_npc': '',
        }
      },
      {
        text: 'weapons.flatline_single',
        value: {
          'fire_sound_1_player_1p': 'Vinson_shell',
          'fire_sound_1_player_3p': 'Weapon_bulletCasings.Bounce',
          'fire_sound_1_npc': '',
          'fire_sound_2_player_1p': 'Weapon_Vinson_SingleShot_1P',
          'fire_sound_2_player_3p': 'Weapon_Vinson_SingleShot_3P',
          'fire_sound_2_npc': 'Weapon_Vinson_SingleShot_NPC',
        }
      },
      {
        text: 'weapons.g7',
        value: {
          'fire_sound_1_player_1p': 'Weapon_G2A4_Fire_1P',
          'fire_sound_1_player_3p': 'Weapon_G2A4_Fire_3P',
          'fire_sound_1_npc': 'Weapon_G2A4_Fire_NPC',
          'fire_sound_2_player_1p': 'Weapon_bulletCasings.Bounce',
          'fire_sound_2_player_3p': 'Weapon_bulletCasings.Bounce',
          'fire_sound_2_npc': '',
        }
      },
      {
        text: 'weapons.energy_ar',
        value: {
          'fire_sound_1_player_1p': 'weapon_havoc_secondshot_1p',
          'fire_sound_1_player_3p': 'weapon_havoc_secondshot_3p',
          'fire_sound_1_npc': '',
          'fire_sound_2_player_1p': 'weapon_havoc_firstshot_1p',
          'fire_sound_2_player_3p': '',
          'fire_sound_2_npc': '',
        }
      },
      {
        text: 'weapons.energy_ar_single',
        value: {
          'fire_sound_1_player_1p': 'weapon_havoc_altfire_singleshot_1p',
          'fire_sound_1_player_3p': 'weapon_havoc_altfire_singleshot_3p',
          'fire_sound_1_npc': '',
          'fire_sound_2_player_1p': '',
          'fire_sound_2_player_3p': '',
          'fire_sound_2_npc': '',
        }
      },
      {
        text: 'weapons.hemlok',
        value: {
          'fire_sound_1_player_1p': 'Weapon_bulletCasings.Bounce',
          'fire_sound_1_player_3p': 'Weapon_bulletCasings.Bounce',
          'fire_sound_1_npc': '',
          'fire_sound_2_player_1p': 'Weapon_Hemlok_SingleShot_1P',
          'fire_sound_2_player_3p': 'Weapon_Hemlok_SingleShot_3P',
          'fire_sound_2_npc': '',
        }
      },
      {
        text: 'weapons.sniper',
        value: {
          'fire_sound_1_player_1p': '',
          'fire_sound_1_player_3p': '',
          'fire_sound_1_npc': '',
          'fire_sound_2_player_1p': 'Weapon_Kraber_Fire_1P',
          'fire_sound_2_player_3p': 'Weapon_Kraber_Fire_3P',
          'fire_sound_2_npc': 'Weapon_Kraber_Fire_npc',
        }
      },
      {
        text: 'weapons.longbow',
        value: {
          'fire_sound_1_player_1p': 'Weapon_DMR_Fire_1P',
          'fire_sound_1_player_3p': 'Weapon_DMR_Fire_3P',
          'fire_sound_1_npc': 'Weapon_DMR_Fire_NPC',
          'fire_sound_2_player_1p': '',
          'fire_sound_2_player_3p': '',
          'fire_sound_2_npc': '',
        }
      },
      {
        text: 'weapons.longbow_skull',
        value: {
          'fire_sound_1_player_1p': 'Weapon_DMR_Fire_1P',
          'fire_sound_1_player_3p': 'Weapon_DMR_Fire_3P',
          'fire_sound_1_npc': 'Weapon_DMR_Fire_NPC',
          'fire_sound_2_player_1p': 'weapon_dmr_fire_skull_1p',
          'fire_sound_2_player_3p': 'weapon_dmr_fire_skull_3p',
          'fire_sound_2_npc': 'weapon_dmr_fire_skull_3p',
        }
      },
      {
        text: 'weapons.lstar',
        value: {
          'fire_sound_1_player_1p': 'Weapon_LSTAR_Fire_1P',
          'fire_sound_1_player_3p': 'Weapon_LSTAR_Fire_3P',
          'fire_sound_1_npc': '',
          'fire_sound_2_player_1p': 'weapon_lstar_secondshot_1p',
          'fire_sound_2_player_3p': 'Weapon_LSTAR_SecondShot_3P',
          'fire_sound_2_npc': '',
        }
      },
      {
        text: 'weapons.mastiff',
        value: {
          'fire_sound_1_player_1p': 'Weapon_Mastiff_Fire_1P',
          'fire_sound_1_player_3p': 'Weapon_Mastiff_Fire_3P',
          'fire_sound_1_npc': 'Weapon_Mastiff_Fire_npc',
          'fire_sound_2_player_1p': '',
          'fire_sound_2_player_3p': '',
          'fire_sound_2_npc': '',
        }
      },
      {
        text: 'weapons.mozambique',
        value: {
          'fire_sound_1_player_1p': 'Weapon_ShotgunPistol_Fire_1P',
          'fire_sound_1_player_3p': 'Weapon_ShotgunPistol_Fire_1P',
          'fire_sound_1_npc': 'Weapon_ShotgunPistol_Fire_NPC',
          'fire_sound_2_player_1p': '',
          'fire_sound_2_player_3p': '',
          'fire_sound_2_npc': '',
        }
      },
      {
        text: 'weapons.p2020',
        value: {
          'fire_sound_1_player_1p': 'weapon_re45auto_shell',
          'fire_sound_1_player_3p': 'weapon_re45auto_shell',
          'fire_sound_1_npc': 'weapon_re45auto_shell',
          'fire_sound_2_player_1p': 'Weapon_P2011_Fire_1P',
          'fire_sound_2_player_3p': 'Weapon_P2011_Fire_3P',
          'fire_sound_2_npc': 'Weapon_P2011_Fire_NPC',
        }
      },
      {
        text: 'weapons.peacekeeper',
        value: {
          'fire_sound_1_player_1p': 'Weapon_Peacekeeper_Fire_1P',
          'fire_sound_1_player_3p': 'Weapon_Peacekeeper_Fire_3P',
          'fire_sound_1_npc': 'Weapon_Peacekeeper_Fire_3P',
          'fire_sound_2_player_1p': '',
          'fire_sound_2_player_3p': '',
          'fire_sound_2_npc': '',
        }
      },
      {
        text: 'weapons.prowler',
        value: {
          'fire_sound_1_player_1p': 'weapon_prowler_singleshot_1p',
          'fire_sound_1_player_3p': '',
          'fire_sound_1_npc': '',
          'fire_sound_2_player_1p': 'weapon_prowler_firstshot_1p',
          'fire_sound_2_player_3p': 'Weapon_bulletCasings.Bounce',
          'fire_sound_2_npc': '',
        }
      },
      {
        text: 'weapons.r301',
        value: {
          'fire_sound_1_player_1p': 'Weapon_R101_FirstShot_1P',
          'fire_sound_1_player_3p': '',
          'fire_sound_1_npc': '',
          'fire_sound_2_player_1p': 'Weapon_bulletCasings.Bounce',
          'fire_sound_2_player_3p': 'Weapon_bulletCasings.Bounce',
          'fire_sound_2_npc': '',
        }
      },
      {
        text: 'weapons.r301_single',
        value: {
          'fire_sound_1_player_1p': 'Weapon_r101_SingleShot_1P',
          'fire_sound_1_player_3p': 'Weapon_r101_SingleShot_3P',
          'fire_sound_1_npc': 'Weapon_r101_SingleShot_npc',
          'fire_sound_2_player_1p': 'Weapon_bulletCasings.Bounce',
          'fire_sound_2_player_3p': 'Weapon_bulletCasings.Bounce',
          'fire_sound_2_npc': '',
        }
      },
      {
        text: 'weapons.r97',
        value: {
          'fire_sound_1_player_1p': 'Weapon_R97_Fire_First_1P',
          'fire_sound_1_player_3p': '',
          'fire_sound_1_npc': '',
          'fire_sound_2_player_1p': 'Weapon_bulletCasings.Bounce',
          'fire_sound_2_player_3p': 'Weapon_bulletCasings.Bounce',
          'fire_sound_2_npc': '',
        }
      },
      {
        text: 'weapons.r45',
        value: {
          'fire_sound_1_player_1p': 'Weapon_RE45_Firstshot_1P',
          'fire_sound_1_player_3p': '',
          'fire_sound_1_npc': '',
          'fire_sound_2_player_1p': 'Weapon_RE45_secondshot_1P',
          'fire_sound_2_player_3p': 'Weapon_RE45_secondshot_3P',
          'fire_sound_2_npc': 'Weapon_RE45_secondshot_npc',
        }
      },
      {
        text: 'weapons.spitfire',
        value: {
          'fire_sound_1_player_1p': 'Weapon_LMG_Firstshot_1P',
          'fire_sound_1_player_3p': 'LMG_shell',
          'fire_sound_1_npc': '',
          'fire_sound_2_player_1p': 'Weapon_LMG_SecondShot_1P',
          'fire_sound_2_player_3p': 'Weapon_LMG_SecondShot_3P',
          'fire_sound_2_npc': 'Weapon_LMG_SecondShot_npc',
        }
      },
      {
        text: 'weapons.smart_pistol',
        value: {
          'fire_sound_1_player_1p': 'Weapon_SmartPistol_Fire_1P',
          'fire_sound_1_player_3p': 'Weapon_SmartPistol_Fire_3P',
          'fire_sound_1_npc': '',
          'fire_sound_2_player_1p': '',
          'fire_sound_2_player_3p': '',
          'fire_sound_2_npc': '',
        }
      },
      {
        text: 'weapons.triple_take',
        value: {
          'fire_sound_1_player_1p': 'Weapon_DoubleTake_Fire_1P',
          'fire_sound_1_player_3p': 'Weapon_DoubleTake_Fire_3P',
          'fire_sound_1_npc': 'Weapon_DoubleTake_Fire_NPC',
          'fire_sound_2_player_1p': 'large_shell_drop',
          'fire_sound_2_player_3p': 'large_shell_drop',
          'fire_sound_2_npc': '',
        }
      },
      {
        text: 'weapons.wingman',
        value: {
          'fire_sound_1_player_1p': 'Weapon_bulletCasings.Bounce',
          'fire_sound_1_player_3p': 'Weapon_bulletCasings.Bounce',
          'fire_sound_1_npc': 'Weapon_bulletCasings.Bounce',
          'fire_sound_2_player_1p': 'Weapon_Wingman_Fire_1P',
          'fire_sound_2_player_3p': 'Weapon_Wingman_Fire_3P',
          'fire_sound_2_npc': 'Weapon_Wingman_Fire_NPC',
        }
      },
      {
        text: 'weapons.wingman_skull',
        value: {
          'fire_sound_1_player_1p': 'weapon_wingman_fire_skull_1p',
          'fire_sound_1_player_3p': 'weapon_wingman_fire_skull_3p',
          'fire_sound_1_npc': 'weapon_wingman_fire_skull_3p',
          'fire_sound_2_player_1p': 'Weapon_Wingman_Fire_1P',
          'fire_sound_2_player_3p': 'Weapon_Wingman_Fire_3P',
          'fire_sound_2_npc': 'Weapon_Wingman_Fire_NPC',
        }
      },
    ],
    crosshair: [
      {text: 'crosshair.alternator', value: 'ui/crosshair_alternator'},
      {text: 'crosshair.charge_rifle', value: 'ui/crosshair_charge_rifle'},
      {text: 'crosshair.circle', value: 'ui/crosshair_circle2'},
      {text: 'crosshair.dot', value: 'ui/crosshair_dot'},
      {text: 'crosshair.lstar', value: 'ui/crosshair_lstar'},
      {text: 'crosshair.mastiff', value: 'ui/crosshair_mastiff'},
      {text: 'crosshair.plus', value: 'ui/crosshair_plus'},
      {text: 'crosshair.plus_dot', value: 'ui/crosshair_plus_dot'},
      {text: 'crosshair.shotgun', value: 'ui/crosshair_shotgun'},
      {text: 'crosshair.tactical', value: 'ui/crosshair_tactical'},
      {text: 'crosshair.tri', value: 'ui/crosshair_tri'},
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
