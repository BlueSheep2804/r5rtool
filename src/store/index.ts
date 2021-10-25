import Vue from 'vue'
import Vuex from 'vuex'
import { generateR5RWeapon } from '../utils/r5rtext'

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
  projectilemodel: string;
  projectile_trail_effect_0: string;
  damage_value: string;
  damage_headshot_scale: string;
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
    weaponText: '',
    copyButton: false,
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
      projectilemodel: 'mdl/dev/empty_model.rmdl',
      projectile_trail_effect_0: '',
      damage_value: '12',
      damage_headshot_scale: '1.5',
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
      {text: 'weapons.spitfire', value: 'lmg_hemlok'},
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
    ],
    projectileTrailEffect: [
      {text: 'projectile_effect.default', value: 'P_tracer_projectile_smg'},
      {text: 'projectile_effect.default_blue', value: 'P_tracer_projectile_smg_blue'},
      {text: 'projectile_effect.sniper', value: 'P_tracer_proj_sniper'},
      {text: 'projectile_effect.sniper_blue', value: 'P_tracer_proj_sniper_blue'},
      {text: 'projectile_effect.lstar', value: 'P_projectile_lstar'},
      {text: 'projectile_effect.peacekeeper', value: 'P_projectile_nrg_shotgun'},
      {text: 'projectile_effect.mastiff', value: 'P_mastiff_proj'},
      {text: 'projectile_effect.disruptor', value: 'P_tracer_proj_smg_shield_breaker'},
      {text: 'projectile_effect.hammerpoint', value: 'P_tracer_proj_smg_hammer_point'},
      {text: 'projectile_effect.skullpiercer', value: 'P_tracer_proj_sniper_piercer'},
      {text: 'projectile_effect.thermite', value: 'P_grenade_thermite_trail'},
      {text: 'projectile_effect.frag', value: 'P_wpn_grenade_frag_trail'},
      {text: 'projectile_effect.arcstar', value: 'wpn_grenade_frag_blue'},
      {text: 'projectile_effect.bangalore_tactical', value: 'P_SmokeScreen_FD_trail'},
      {text: 'projectile_effect.bangalore_ultimate', value: 'P_bFlare_trail'},
      {text: 'projectile_effect.bangalore_missile', value: 'P_projectile_bBomb_trail'},
      {text: 'projectile_effect.gibraltar_ultimate', value: 'P_artillery_marker_trail'},
      {text: 'projectile_effect.gibraltar_missile', value: 'P_projectile_artillery_plasma'},
      {text: 'projectile_effect.caustic_ultimate', value: 'P_wpn_grenade_gas_trail'},
      {text: 'projectile_effect.zipline', value: 'P_zipline_projectile_trail'},
      {text: 'projectile_effect.electric_smoke', value: 'P_wpn_grenade_smoke_trail'},
      {text: 'projectile_effect.grenade', value: 'wpn_grenade_frag'},
      {text: 'projectile_effect.smoke', value: 'Rocket_Smoke_SMALL_Titan_2'},
    ]
  },
  mutations: {
    weaponPropertyUpdate(state, value: string[]) {
      state.weapon[value[0]] = value[1]
    },
    updateWeaponText(state, text: string) {
      state.weaponText = text
    },
    updateCopyButton(state, value: boolean) {
      state.copyButton = value
    }
  },
  actions: {
    generationText(context) {
      const icon = context.state.weapon.icon
      const model = context.state.weapon.model

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

      let weapon_base = context.state.weapon.weapon_type
      const burst_fire_count = context.state.weapon.burst_fire_count == '1' ? '0' : context.state.weapon.burst_fire_count

      const weapon_dict_data = {
        printname: context.state.weapon.printname,
        shortprintname: context.state.weapon.shortprintname,
        description: context.state.weapon.description,
        longdesc: context.state.weapon.description,

        weapon_type_flags: 'WPT_PRIMARY',

        menu_icon: 'rui/weapon_icons/r5/weapon_' + icon,
        hud_icon: 'rui/weapon_icons/r5/weapon_' + icon,

        viewmodel: 'mdl/weapons/' + model_path + '/ptpov_' + model + '.rmdl',
        playermodel: 'mdl/weapons/' + model_path + '/w_' + model + '.rmdl',

        damage_type: 'bullet',
        damage_near_value: context.state.weapon.damage_value,
        damage_far_value: context.state.weapon.damage_value,
        damage_very_far_value: context.state.weapon.damage_value,
        allow_headshots: '1',
        damage_headshot_scale: context.state.weapon.damage_headshot_scale,

        projectile_launch_speed: context.state.weapon.projectile_launch_speed,
        projectilemodel: context.state.weapon.projectilemodel,
        projectile_trail_effect_0: context.state.weapon.projectile_trail_effect_0,

        fire_mode: 'automatic',
        is_semi_auto: context.state.weapon.is_semi_auto,
        fire_rate: context.state.weapon.fire_rate,
        burst_fire_count: burst_fire_count,
        burst_fire_delay: context.state.weapon.burst_fire_delay,

        ...context.state.weapon.sound,
        sound_dryfire: 'assalt_rifle_dryfire',
        sound_pickup: 'wpn_pickup_SMG_1P',
        looping_sounds: '0',
        sound_zoom_in: 'Weapon_R97_ADS_In',
        sound_zoom_out: 'Weapon_R97_ADS_Out',
        low_ammo_sound_name_1: 'R101_LowAmmo_Shot1',
        low_ammo_sound_name_2: 'R101_LowAmmo_Shot2',
        low_ammo_sound_name_3: 'R101_LowAmmo_Shot3',
        low_ammo_sound_name_4: 'R101_LowAmmo_Shot4',
        low_ammo_sound_name_5: 'R101_LowAmmo_Shot5',
        low_ammo_sound_name_6: 'R101_LowAmmo_Shot6',

        ammo_pool_type: context.state.weapon.ammo_pool_type,
        ammo_clip_size: context.state.weapon.ammo_clip_size,
        ammo_default_total: '180',
        ammo_stockpile_max: '180',
        ammo_no_remove_from_stockpile: '1',
        ammo_per_shot: context.state.weapon.ammo_per_shot,
        ammo_min_to_fire: context.state.weapon.ammo_per_shot,
        uses_ammo_pool: '1',

        reload_time: context.state.weapon.reload_time,
        reload_time_late1: Math.round((Number(context.state.weapon.reload_time) * 0.4) * 10) / 10 + '',
        reloadempty_time: context.state.weapon.reloadempty_time,
        reloadempty_time_late1: Math.round((Number(context.state.weapon.reloadempty_time) * 0.6) *10) / 10 + '',
        reloadempty_time_late2: Math.round((Number(context.state.weapon.reloadempty_time) * 0.3) *10) / 10 + '',

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

      let extended_mag_prefix
      switch (context.state.weapon.ammo_pool_type) {
        case 'special':
          extended_mag_prefix = 'energy_mag_l'
          weapon_base += '\n#base "_base_mags_energy.txt"'
          break
        case 'bullet':
          extended_mag_prefix = 'bullets_mag_l'
          weapon_base += '\n#base "_base_mags_light.txt"'
          break
        case 'highcal':
          extended_mag_prefix = 'highcal_mag_l'
          weapon_base += '\n#base "_base_mags_heavy.txt"'
      }

      let weapon_dict_extended_mag: Record<string, unknown> = {}
      if ( context.state.weapon.ammo_pool_type != 'shotgun' ) {
        weapon_dict_extended_mag = {
          [extended_mag_prefix + '1']: {
            'ammo_clip_size': context.state.weapon.mag_l1
          },
          [extended_mag_prefix + '2']: {
            'ammo_clip_size': context.state.weapon.mag_l2
          },
          [extended_mag_prefix + '3']: {
            'ammo_clip_size': context.state.weapon.mag_l3
          }
        }
      }

      const weapon_dict = {
        WeaponData: {
          ...weapon_dict_data,

          Mods: {
            gold: {},
            survival_finite_ammo: {
              ammo_default_total: '180',
              ammo_stockpile_max: '180',
              ammo_no_remove_from_stockpile: '0',
              uses_ammo_pool: '1'
            },
            ...weapon_dict_extended_mag
          },

          RUI_CrosshairData: {
            DefaultArgs: {
              adjustedSpread: 'weapon_spread',
              adsFrac: 'player_zoomFrac',
              isSprinting: 'player_is_sprinting',
              isReloading: 'weapon_is_reloading',
              teamColor: 'crosshair_team_color',
              isAmped: 'weapon_is_amped',
              crosshairMovementX: 'crosshair_movement_x',
              crosshairMovementY: 'crosshair_movement_y'
            },
            Crosshair_1: {
              ui: context.state.weapon.crosshair,
              base_spread: '0.0'
            }
          }
        }
      }

      context.commit('updateWeaponText', weapon_base + '\n\n// Generation by R5RTool\n\n' + generateR5RWeapon(weapon_dict))
      context.commit('updateCopyButton', true)
    },
  },
  modules: {
  }
})
