import Vue from 'vue'
import Vuex from 'vuex'
import { generateR5RWeapon, importR5RWeapon, modelname } from '../utils/r5rtext'

Vue.use(Vuex)

interface weaponProperty {
  [key: string]: string | Record<string, unknown>
  id: string;
  weapon_type: string;
  printname: string;
  shortprintname: string;
  description: string;
  icon: string;
  viewmodel: string;
  playermodel: string;
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
  regen_ammo_refill_rate: string;
  burst_fire_count: string;
  burst_fire_delay: string;
  ammo_pool_type: string;
  ammo_clip_size: string;
  mag_l1: string;
  mag_l2: string;
  mag_l3: string;
  reload_time: string;
  reloadempty_time: string;
  viewkick_preset: Record<string, unknown>;
}

export default new Vuex.Store({
  state: {
    weaponText: '',
    weapon: {
      id: '',
      weapon_type: '',
      printname: '',
      shortprintname: '',
      description: '',
      icon: '',
      viewmodel: '',
      playermodel: '',
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
      regen_ammo_refill_rate: '0',
      burst_fire_count: '1',
      burst_fire_delay: '0.2',
      ammo_pool_type: 'bullet',
      ammo_clip_size: '18',
      mag_l1: '20',
      mag_l2: '23',
      mag_l3: '27',
      reload_time: '1.8',
      reloadempty_time: '2.5',
      viewkick_preset: {},
    } as weaponProperty,
    weaponType: [
      { text: 'weapon_type.ar', value: '#base "_base_assault_rifle.txt"\n' },
      { text: 'weapon_type.smg', value: '#base "_base_smg.txt"\n' },
      { text: 'weapon_type.lmg', value: '#base "_base_lmg.txt"\n' },
      { text: 'weapon_type.sr', value: '#base "_base_sniper.txt"\n#base "_base_sniper_optics.txt"\n' },
      { text: 'weapon_type.sg', value: '#base "_base_shotgun.txt"\n' },
      { text: 'weapon_type.pistol', value: '#base "_base_handgun.txt"\n' },
    ],
    calledWeaponIcon: [ //rui/menu/dpad_comms/emoji/fist
      { text: 'weapons.alternator', value: 'alternator' },
      { text: 'weapons.charge_rifle', value: 'charge_rifle' },
      { text: 'weapons.devotion', value: 'devotion' },
      { text: 'weapons.eva8', value: 'eva8' },
      { text: 'weapons.flatline', value: 'flatline' },
      { text: 'weapons.g7', value: 'g7' },
      { text: 'weapons.havoc', value: 'energy_ar' },
      { text: 'weapons.hemlok', value: 'hemlok' },
      { text: 'weapons.sniper', value: 'sniper' },
      { text: 'weapons.longbow', value: 'longbow' },
      { text: 'weapons.lstar', value: 'lstar' },
      { text: 'weapons.mastiff', value: 'mastiff' },
      { text: 'weapons.mozambique', value: 'mozambique' },
      { text: 'weapons.p2020', value: 'p2020' },
      { text: 'weapons.peacekeeper', value: 'peacekeeper' },
      { text: 'weapons.prowler', value: 'prowler' },
      { text: 'weapons.r301', value: 'r301' },
      { text: 'weapons.r97', value: 'r97' },
      { text: 'weapons.re45', value: 'r45' },
      { text: 'weapons.spitfire', value: 'spitfire' },
      { text: 'weapons.triple_take', value: 'triple_take' },
      { text: 'weapons.wingman', value: 'wingman' },
    ],
    viewmodels: [
      { text: 'weapons.alternator', value: 'alternator_smg' },
      { text: 'weapons.charge_rifle', value: 'defender' },
      { text: 'weapons.devotion', value: 'hemlock_br' },
      { text: 'weapons.eva8', value: 'w1128' },
      { text: 'weapons.flatline', value: 'vinson' },
      { text: 'weapons.g7', value: 'g2a4' }, //g2
      { text: 'weapons.havoc', value: 'beam_ar' },
      { text: 'weapons.hemlok', value: 'hemlok' }, //m1a1_hemlok
      { text: 'weapons.sniper', value: 'at_rifle' },
      { text: 'weapons.longbow', value: 'rspn101_dmr' },
      { text: 'weapons.lstar', value: 'lstar' },
      { text: 'weapons.mastiff', value: 'mastiff' }, //mastiff_stgn
      { text: 'weapons.mozambique', value: 'pstl_sa3' },
      { text: 'weapons.p2020', value: 'p2011' },
      { text: 'weapons.peacekeeper', value: 'peacekeeper' },
      { text: 'weapons.prowler', value: 'prowler_smg' },
      { text: 'weapons.r301', value: 'rspn101' },
      { text: 'weapons.r97', value: 'r97' },
      { text: 'weapons.re45', value: 'p2011_auto' },
      { text: 'weapons.spitfire', value: 'lmg_hemlok' },
      { text: 'weapons.triple_take', value: 'doubletake' },
      { text: 'weapons.wingman', value: 'b3wing' },
    ],
    playermodels: [
      { text: 'weapons.alternator', value: 'alternator_smg' },
      { text: 'weapons.charge_rifle', value: 'defender' },
      { text: 'weapons.devotion', value: 'hemlock_br' },
      { text: 'weapons.eva8', value: 'w1128' },
      { text: 'weapons.flatline', value: 'vinson' },
      { text: 'weapons.g7', value: 'g2a4' }, //g2
      { text: 'weapons.havoc', value: 'beam_ar' },
      { text: 'weapons.hemlok', value: 'hemlok' }, //m1a1_hemlok
      { text: 'weapons.sniper', value: 'at_rifle' },
      { text: 'weapons.longbow', value: 'rspn101_dmr' },
      { text: 'weapons.lstar', value: 'lstar' },
      { text: 'weapons.mastiff', value: 'mastiff' }, //mastiff_stgn
      { text: 'weapons.mozambique', value: 'pstl_sa3' },
      { text: 'weapons.p2020', value: 'p2011' },
      { text: 'weapons.peacekeeper', value: 'peacekeeper' },
      { text: 'weapons.prowler', value: 'prowler_smg' },
      { text: 'weapons.r301', value: 'rspn101' },
      { text: 'weapons.r97', value: 'r97' },
      { text: 'weapons.re45', value: 'p2011_auto' },
      { text: 'weapons.spitfire', value: 'lmg_hemlok' },
      { text: 'weapons.triple_take', value: 'doubletake' },
      { text: 'weapons.wingman', value: 'b3wing' },
    ],
    ammoType: [
      { text: 'ammo_type.bullet', value: 'bullet' },
      { text: 'ammo_type.highcal', value: 'highcal' },
      { text: 'ammo_type.special', value: 'special' },
      { text: 'ammo_type.shotgun', value: 'shotgun' }
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
        text: 'weapons.havoc',
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
        text: 'weapons.havoc_single',
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
        text: 'weapons.re45',
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
      { text: 'weapons.alternator', value: 'ui/crosshair_alternator' },
      { text: 'weapons.charge_rifle', value: 'ui/crosshair_charge_rifle' },
      { text: 'crosshair.circle', value: 'ui/crosshair_circle2' },
      { text: 'crosshair.dot', value: 'ui/crosshair_dot' },
      { text: 'weapons.lstar', value: 'ui/crosshair_lstar' },
      { text: 'weapons.mastiff', value: 'ui/crosshair_mastiff' },
      { text: 'crosshair.plus', value: 'ui/crosshair_plus' },
      { text: 'crosshair.plus_dot', value: 'ui/crosshair_plus_dot' },
      { text: 'weapon_type.sg', value: 'ui/crosshair_shotgun' },
      { text: 'crosshair.tactical', value: 'ui/crosshair_tactical' },
      { text: 'crosshair.tri', value: 'ui/crosshair_tri' },
    ],
    projectileTrailEffect: [
      { text: 'projectile_effect.default', value: 'P_tracer_projectile_smg' },
      { text: 'projectile_effect.default_blue', value: 'P_tracer_projectile_smg_blue' },
      { text: 'projectile_effect.sniper', value: 'P_tracer_proj_sniper' },
      { text: 'projectile_effect.sniper_blue', value: 'P_tracer_proj_sniper_blue' },
      { text: 'weapons.lstar', value: 'P_projectile_lstar' },
      { text: 'weapons.peacekeeper', value: 'P_projectile_nrg_shotgun' },
      { text: 'weapons.mastiff', value: 'P_mastiff_proj' },
      { text: 'projectile_effect.disruptor', value: 'P_tracer_proj_smg_shield_breaker' },
      { text: 'projectile_effect.hammerpoint', value: 'P_tracer_proj_smg_hammer_point' },
      { text: 'projectile_effect.skullpiercer', value: 'P_tracer_proj_sniper_piercer' },
      { text: 'projectile_effect.thermite', value: 'P_grenade_thermite_trail' },
      { text: 'projectile_effect.frag', value: 'P_wpn_grenade_frag_trail' },
      { text: 'projectile_effect.arcstar', value: 'wpn_grenade_frag_blue' },
      { text: 'projectile_effect.bangalore_tactical', value: 'P_SmokeScreen_FD_trail' },
      { text: 'projectile_effect.bangalore_ultimate', value: 'P_bFlare_trail' },
      { text: 'projectile_effect.bangalore_missile', value: 'P_projectile_bBomb_trail' },
      { text: 'projectile_effect.gibraltar_ultimate', value: 'P_artillery_marker_trail' },
      { text: 'projectile_effect.gibraltar_missile', value: 'P_projectile_artillery_plasma' },
      { text: 'projectile_effect.caustic_ultimate', value: 'P_wpn_grenade_gas_trail' },
      { text: 'projectile_effect.zipline', value: 'P_zipline_projectile_trail' },
      { text: 'projectile_effect.electric_smoke', value: 'P_wpn_grenade_smoke_trail' },
      { text: 'projectile_effect.grenade', value: 'wpn_grenade_frag' },
      { text: 'projectile_effect.smoke', value: 'Rocket_Smoke_SMALL_Titan_2' },
    ],
    viewkickPreset: [
      {
        text: 'weapons.alternator',
        value: {
          viewkick_pattern: 'alternator_2',

          viewkick_spring: 'alternator_vkp',
          viewkick_spring_hot: 'alternator_vkp_hot',

          viewkick_spring_heatpershot: '1.0',
          viewkick_spring_cooldown_holdtime: '0.1',
          viewkick_spring_cooldown_fadetime: '0.05',

          viewmodel_spring_jolt: 'autofire_viewmodel_jolt',
          viewmodel_jolt_scale: '1.0',
          viewmodel_jolt_backwardPerShot: '-0.2',
          viewmodel_jolt_roll: '0 2.0 0.0',
          viewmodel_jolt_side: '0 0.03 0',

          viewkick_pitch_base: '1.0',
          viewkick_pitch_random: '1.0',
          viewkick_pitch_softScale: '1.6',
          viewkick_pitch_hardScale: '0.35',

          viewkick_yaw_base: '1.0',
          viewkick_yaw_random: '1.0',
          viewkick_yaw_random_innerexclude: '0.0',
          viewkick_yaw_softScale: '0.8',
          viewkick_yaw_hardScale: '0.2',

          viewkick_roll_base: '0.8',
          viewkick_roll_randomMin: '-0.2',
          viewkick_roll_randomMax: '0.2',
          viewkick_roll_softScale: '0.7',
          viewkick_roll_hardScale: '0.3',

          viewkick_hipfire_weaponFraction: '0.15',
          viewkick_hipfire_weaponFraction_vmScale: '1',
          viewkick_ads_weaponFraction: '0',
          viewkick_ads_weaponFraction_vmScale: '1.0',

          viewkick_perm_pitch_base: '0.0',
          viewkick_perm_pitch_random: '0.0',
          viewkick_perm_yaw_base: '0.0',
          viewkick_perm_yaw_random: '0.0',
          viewkick_perm_yaw_random_innerexclude: '0.0',

          viewkick_scale_firstshot_hipfire: '1.0',
          viewkick_scale_min_hipfire: '1.0',
          viewkick_scale_max_hipfire: '1.0',
          viewkick_scale_firstshot_ads: '1.0',
          viewkick_scale_min_ads: '1.0',
          viewkick_scale_max_ads: '1.0',
          viewkick_scale_valuePerShot: '1.0',
          viewkick_scale_pitch_valueLerpStart: '0',
          viewkick_scale_pitch_valueLerpEnd: '20',
          viewkick_scale_yaw_valueLerpStart: '0',
          viewkick_scale_yaw_valueLerpEnd: '20',
          viewkick_scale_valueDecayDelay: '0.12',
          viewkick_scale_valueDecayRate: '45',

          viewmodel_shake_forward: '0.0',
          viewmodel_shake_up: '0.0',
          viewmodel_shake_right: '0.0'
        }
      },
      {
        text: 'weapons.devotion',
        value: {
          viewkick_pattern: 'esaw_2',

          viewkick_spring: 'esaw_vkp',
          viewkick_spring_hot: 'esaw_vkp_hot',

          viewkick_spring_heatpershot: '1.0',
          viewkick_spring_cooldown_holdtime: '0.2',
          viewkick_spring_cooldown_fadetime: '0.05',

          viewmodel_spring_jolt: 'autofire_viewmodel_jolt',
          viewmodel_jolt_scale: '1.0',
          viewmodel_jolt_backwardPerShot: '-0.25',
          viewmodel_jolt_roll: '0 2.7 0.0',
          viewmodel_jolt_side: '0 0.04 0',

          viewkick_pitch_base: '1.0',
          viewkick_pitch_random: '1.0',
          viewkick_pitch_softScale: '1.5',
          viewkick_pitch_hardScale: '0.45',

          viewkick_yaw_base: '1.0',
          viewkick_yaw_random: '1.0',
          viewkick_yaw_random_innerexclude: '0.0',
          viewkick_yaw_softScale: '1.2',
          viewkick_yaw_hardScale: '0.55',

          viewkick_roll_base: '-1.6',
          viewkick_roll_randomMin: '-0.35',
          viewkick_roll_randomMax: '0.35',
          viewkick_roll_softScale: '0.8',
          viewkick_roll_hardScale: '0.3',

          viewkick_hipfire_weaponFraction: '0.65',
          viewkick_hipfire_weaponFraction_vmScale: '1.0',
          viewkick_ads_weaponFraction: '0.0',
          viewkick_ads_weaponFraction_vmScale: '1.0',

          viewkick_scale_firstshot_ads: '1.0',
          viewkick_scale_firstshot_hipfire: '1.2',
          viewkick_scale_min_hipfire: '1.2',
          viewkick_scale_max_hipfire: '1.0',
          viewkick_scale_min_ads: '1.0',
          viewkick_scale_max_ads: '1.0',
          viewkick_scale_valuePerShot: '1.0',
          viewkick_scale_pitch_valueLerpStart: '0',
          viewkick_scale_pitch_valueLerpEnd: '40',
          viewkick_scale_yaw_valueLerpStart: '0',
          viewkick_scale_yaw_valueLerpEnd: '40',
          viewkick_scale_valueDecayDelay: '0.21',
          viewkick_scale_valueDecayRate: '150',

          viewkick_perm_pitch_base: '0.0',
          viewkick_perm_pitch_random: '0.0',
          viewkick_perm_yaw_base: '0.0',
          viewkick_perm_yaw_random: '0.0',

          viewkick_duck_scale: '0.8',

          viewmodel_shake_forward: '0.15',
          viewmodel_shake_up: '0.0',
          viewmodel_shake_right: '0.0',
        }
      },
      {
        text: 'weapons.eva8',
        value: {
          viewkick_spring: 'shotgun',

          viewkick_pitch_base: '-1.75',
          viewkick_pitch_random: '0.75',
          viewkick_pitch_softScale: '0.3',
          viewkick_pitch_hardScale: '1.5',

          viewkick_yaw_base: '-0.65',
          viewkick_yaw_random: '0.38',
          viewkick_yaw_softScale: '0.38',
          viewkick_yaw_hardScale: '1.5',

          viewkick_roll_base: '0',
          viewkick_roll_randomMin: '0.6',
          viewkick_roll_randomMax: '0.8',
          viewkick_roll_softScale: '0.75',
          viewkick_roll_hardScale: '0.25',

          viewkick_hipfire_weaponFraction: '0.1',
          viewkick_hipfire_weaponFraction_vmScale: '0.0',
          viewkick_ads_weaponFraction: '0.35',
          viewkick_ads_weaponFraction_vmScale: '0.25',

          viewkick_scale_firstshot_hipfire: '1',
          viewkick_scale_firstshot_ads: '0',
          viewkick_scale_min_hipfire: '1.0',
          viewkick_scale_max_hipfire: '2.0',
          viewkick_scale_min_ads: '1.0',
          viewkick_scale_max_ads: '2.0',
          viewkick_scale_valuePerShot: '1.0',
          viewkick_scale_pitch_valueLerpStart: '0',
          viewkick_scale_yaw_valueLerpStart: '0',
          viewkick_scale_pitch_valueLerpEnd: '3',
          viewkick_scale_yaw_valueLerpEnd: '3',
          viewkick_scale_valueDecayDelay: '0.5',
          viewkick_scale_valueDecayRate: '25',

          viewmodel_shake_forward: '0.5',
          viewmodel_shake_up: '0.2',
          viewmodel_shake_right: '0.0',
        }
      },
      {
        text: 'weapons.eva8_double_tap',
        value: {
          viewkick_pattern: 'eva_double_tap',
          viewkick_spring: 'shotgun_double_tap',

          viewkick_pitch_base: '1.0',
          viewkick_pitch_random: '1.0',
          viewkick_pitch_softScale: '1.5',
          viewkick_pitch_hardScale: '1.3',

          viewkick_yaw_base: '1.0',
          viewkick_yaw_random: '1.0',
          viewkick_yaw_softScale: '1.3',
          viewkick_yaw_hardScale: '1.15',

          viewkick_roll_base: '0',
          viewkick_roll_randomMin: '0.6',
          viewkick_roll_randomMax: '0.8',
          viewkick_roll_softScale: '0.75',
          viewkick_roll_hardScale: '0.25',

          viewkick_hipfire_weaponFraction: '0.2',
          viewkick_hipfire_weaponFraction_vmScale: '0.0',
          viewkick_ads_weaponFraction: '0.25',
          viewkick_ads_weaponFraction_vmScale: '0.15',

          viewkick_scale_firstshot_hipfire: '1',
          viewkick_scale_firstshot_ads: '0',
          viewkick_scale_min_hipfire: '1.0',
          viewkick_scale_max_hipfire: '2.0',
          viewkick_scale_min_ads: '1.0',
          viewkick_scale_max_ads: '2.0',
          viewkick_scale_valuePerShot: '1.0',
          viewkick_scale_pitch_valueLerpStart: '0',
          viewkick_scale_yaw_valueLerpStart: '0',
          viewkick_scale_pitch_valueLerpEnd: '3',
          viewkick_scale_yaw_valueLerpEnd: '3',
          viewkick_scale_valueDecayDelay: '0.5',
          viewkick_scale_valueDecayRate: '75',

          viewmodel_shake_forward: '0.5',
          viewmodel_shake_up: '0.2',
          viewmodel_shake_right: '0.0'
        }
      },
      {
        text: 'weapons.flatline',
        value: {
          viewkick_pattern: 'flatline_2',

          viewkick_spring: 'flatline_vkp',
          viewkick_spring_hot: 'flatline_vkp_hot',

          viewkick_spring_heatpershot: '1.0',
          viewkick_spring_cooldown_holdtime: '0.1',
          viewkick_spring_cooldown_fadetime: '0.05',

          viewmodel_spring_jolt: 'autofire_viewmodel_jolt',
          viewmodel_jolt_scale: '1.0',
          viewmodel_jolt_backwardPerShot: '-0.5',
          viewmodel_jolt_roll: '0 3.4 0.0',
          viewmodel_jolt_side: '0 0.038 0',

          viewkick_pitch_base: '1.0',
          viewkick_pitch_random: '1.0',
          viewkick_pitch_softScale: '2.0',
          viewkick_pitch_hardScale: '0.45',

          viewkick_yaw_base: '1.0',
          viewkick_yaw_random: '1.0',
          viewkick_yaw_random_innerexclude: '0.05',
          viewkick_yaw_softScale: '3.0',
          viewkick_yaw_hardScale: '0.35',

          viewkick_roll_base: '-1.25',
          viewkick_roll_randomMin: '-0.4',
          viewkick_roll_randomMax: '0.4',
          viewkick_roll_softScale: '0.8',
          viewkick_roll_hardScale: '0.3',

          viewkick_hipfire_weaponFraction: '0.1',
          viewkick_hipfire_weaponFraction_vmScale: '0.9',
          viewkick_ads_weaponFraction: '0.0',
          viewkick_ads_weaponFraction_vmScale: '1.0',

          viewkick_scale_firstshot_hipfire: '1.0',
          viewkick_scale_min_hipfire: '1.0',
          viewkick_scale_max_hipfire: '1.33',
          viewkick_scale_firstshot_ads: '1.0',
          viewkick_scale_min_ads: '1.0',
          viewkick_scale_max_ads: '1.0',
          viewkick_scale_valuePerShot: '1.0',
          viewkick_scale_pitch_valueLerpStart: '10',
          viewkick_scale_pitch_valueLerpEnd: '50',
          viewkick_scale_yaw_valueLerpStart: '10',
          viewkick_scale_yaw_valueLerpEnd: '50',
          viewkick_scale_valueDecayDelay: '0.12',
          viewkick_scale_valueDecayRate: '50',

          viewkick_perm_pitch_base: '0',
          viewkick_perm_pitch_random: '0',
          viewkick_perm_yaw_base: '0',
          viewkick_perm_yaw_random: '0',
          viewkick_perm_yaw_random_innerexclude: '0.0',
        }
      },
      {
        text: 'weapons.flatline_highcal',
        value: {
          viewkick_pattern: 'flatline_highcal',

          viewkick_spring: 'flatline_highcalvkp',
          viewkick_spring_hot: 'flatline_highcal_vkp_hot',
          viewkick_spring_heatpershot: '1.0',
          viewkick_spring_cooldown_holdtime: '0.28',
          viewkick_spring_cooldown_fadetime: '0.22',

          viewmodel_spring_jolt: 'autofire_viewmodel_jolt',
          viewmodel_jolt_scale: '2.2',
          viewmodel_jolt_backwardPerShot: '-.75',
          viewmodel_jolt_roll: '0 3.8 0.0',
          viewmodel_jolt_side: '0 0.041 0',

          viewkick_pitch_base: '1.0',
          viewkick_pitch_random: '1.0',
          viewkick_pitch_softScale: '3.25',
          viewkick_pitch_hardScale: '0.4',

          viewkick_yaw_base: '1.0',
          viewkick_yaw_random: '1.0',
          viewkick_yaw_random_innerexclude: '0.05',
          viewkick_yaw_softScale: '2.2',
          viewkick_yaw_hardScale: '0.3',

          viewkick_roll_base: '2.1',
          viewkick_roll_randomMin: '-0.2',
          viewkick_roll_randomMax: '0.2',
          viewkick_roll_softScale: '1.2',
          viewkick_roll_hardScale: '0.35',

          viewkick_hipfire_weaponFraction: '0.225',
          viewkick_hipfire_weaponFraction_vmScale: '0.9',
          viewkick_ads_weaponFraction: '0.0',
          viewkick_ads_weaponFraction_vmScale: '1.0',

          viewkick_scale_firstshot_hipfire: '1.0',
          viewkick_scale_min_hipfire: '1.0',
          viewkick_scale_max_hipfire: '1.33',
          viewkick_scale_firstshot_ads: '1.0',
          viewkick_scale_min_ads: '1.0',
          viewkick_scale_max_ads: '1.0',
          viewkick_scale_valuePerShot: '1.0',
          viewkick_scale_pitch_valueLerpStart: '10',
          viewkick_scale_pitch_valueLerpEnd: '50',
          viewkick_scale_yaw_valueLerpStart: '10',
          viewkick_scale_yaw_valueLerpEnd: '50',
          viewkick_scale_valueDecayDelay: '0.12',
          viewkick_scale_valueDecayRate: '50',

          viewkick_perm_pitch_base: '0',
          viewkick_perm_pitch_random: '0',
          viewkick_perm_yaw_base: '0',
          viewkick_perm_yaw_random: '0',
          viewkick_perm_yaw_random_innerexclude: '0.0',
        }
      },
      {
        text: 'weapons.g7',
        value: {
          viewkick_pattern: 'g2',

          viewkick_spring: 'g2_vkp',
          viewkick_spring_hot: 'g2_vkp_hot',

          viewkick_spring_heatpershot: '1.0',
          viewkick_spring_cooldown_holdtime: '0.18',
          viewkick_spring_cooldown_fadetime: '0.21',

          viewmodel_spring_jolt: 'g2_viewmodel_jolt',
          viewmodel_jolt_scale: '1.0',
          viewmodel_jolt_backwardPerShot: '-0.4',
          viewmodel_jolt_roll: '0 3.0 0.0',
          viewmodel_jolt_side: '0 0.03 0',

          viewkick_pitch_base: '1.0',
          viewkick_pitch_random: '1.0',
          viewkick_pitch_softScale: '2.4',
          viewkick_pitch_hardScale: '0.3',

          viewkick_yaw_base: '1.0',
          viewkick_yaw_random: '1.0',
          viewkick_yaw_softScale: '1.6',
          viewkick_yaw_hardScale: '1.0',

          viewkick_roll_base: '2.0',
          viewkick_roll_randomMin: '0.0',
          viewkick_roll_randomMax: '0.0',
          viewkick_roll_softScale: '1.1',
          viewkick_roll_hardScale: '0.3',

          viewkick_hipfire_weaponFraction: '0.2',
          viewkick_hipfire_weaponFraction_vmScale: '0.8',
          viewkick_ads_weaponFraction: '0.0',
          viewkick_ads_weaponFraction_vmScale: '1.0',

          viewkick_scale_firstshot_hipfire: '1.0',
          viewkick_scale_firstshot_ads: '1.0',
          viewkick_scale_min_ads: '1.0',
          viewkick_scale_max_ads: '1.0',
          viewkick_scale_min_hipfire: '1.0',
          viewkick_scale_max_hipfire: '1.0',
          viewkick_scale_valueDecayDelay: '0.25',
          viewkick_scale_valueDecayRate: '35',

          viewkick_air_scale_ads: '1.0'
        }
      },
      {
        text: 'weapons.g7_double_tap',
        value: {
          viewkick_pattern: 'g2_double_tap',

          viewkick_spring: 'g2_vkp',
          viewkick_spring_hot: 'g2_vkp_double_tap_hot',

          viewkick_spring_heatpershot: '1.0',
          viewkick_spring_cooldown_holdtime: '0.34',
          viewkick_spring_cooldown_fadetime: '0.26',

          viewmodel_spring_jolt: 'g2_viewmodel_jolt',
          viewmodel_jolt_scale: '1.0',
          viewmodel_jolt_backwardPerShot: '-0.4',
          viewmodel_jolt_roll: '0 3.0 0.0',
          viewmodel_jolt_side: '0 0.03 0',

          viewkick_pitch_base: '1.0',
          viewkick_pitch_random: '1.0',
          viewkick_pitch_softScale: '2.7',
          viewkick_pitch_hardScale: '0.3',

          viewkick_yaw_base: '1.0',
          viewkick_yaw_random: '1.0',
          viewkick_yaw_softScale: '1.3',
          viewkick_yaw_hardScale: '0.3',

          viewkick_roll_base: '2.0',
          viewkick_roll_randomMin: '0.0',
          viewkick_roll_randomMax: '0.0',
          viewkick_roll_softScale: '1.1',
          viewkick_roll_hardScale: '0.3',

          viewkick_hipfire_weaponFraction: '0.2',
          viewkick_hipfire_weaponFraction_vmScale: '0.8',
          viewkick_ads_weaponFraction: '0.0',
          viewkick_ads_weaponFraction_vmScale: '1.0',

          viewkick_scale_firstshot_hipfire: '1.0',
          viewkick_scale_firstshot_ads: '1.0',
          viewkick_scale_min_ads: '1.0',
          viewkick_scale_max_ads: '1.0',
          viewkick_scale_min_hipfire: '1.0',
          viewkick_scale_max_hipfire: '1.0',
          viewkick_scale_valueDecayDelay: '0.48',
          viewkick_scale_valueDecayRate: '200',

          viewkick_air_scale_ads: '1.0'
        }
      },
      {
        text: 'weapons.havoc',
        value: {
          viewkick_pattern: 'energy_ar_2',

          viewkick_spring: 'energy_AR_vkp',
          viewkick_spring_hot: 'energy_AR_vkp_hot',

          viewkick_spring_heatpershot: '1.0',
          viewkick_spring_cooldown_holdtime: '0.09',
          viewkick_spring_cooldown_fadetime: '0.05',

          viewmodel_spring_jolt: 'autofire_viewmodel_jolt',
          viewmodel_jolt_scale: '1.0',
          viewmodel_jolt_backwardPerShot: '-0.25',
          viewmodel_jolt_roll: '0 2.7 0.0',
          viewmodel_jolt_side: '0 0.04 0',

          viewkick_pitch_base: '1.0',
          viewkick_pitch_random: '1.0',
          viewkick_pitch_softScale: '1.5',
          viewkick_pitch_hardScale: '0.25',

          viewkick_yaw_base: '1.0',
          viewkick_yaw_random: '1.0',
          viewkick_yaw_random_innerexclude: '0.0',
          viewkick_yaw_softScale: '1.2',
          viewkick_yaw_hardScale: '0.4',

          viewkick_roll_base: '-1.6',
          viewkick_roll_randomMin: '-0.35',
          viewkick_roll_randomMax: '0.35',
          viewkick_roll_softScale: '0.8',
          viewkick_roll_hardScale: '0.3',

          viewkick_hipfire_weaponFraction: '0.25',
          viewkick_hipfire_weaponFraction_vmScale: '0.75',
          viewkick_ads_weaponFraction: '0',
          viewkick_ads_weaponFraction_vmScale: '1.0',

          viewkick_scale_firstshot_hipfire: '1.0',
          viewkick_scale_min_hipfire: '1.0',
          viewkick_scale_max_hipfire: '1.72',
          viewkick_scale_firstshot_ads: '1.0',
          viewkick_scale_min_ads: '1.0',
          viewkick_scale_max_ads: '1.0',
          viewkick_scale_valuePerShot: '1',
          viewkick_scale_pitch_valueLerpStart: '2',
          viewkick_scale_pitch_valueLerpEnd: '7',
          viewkick_scale_yaw_valueLerpStart: '2',
          viewkick_scale_yaw_valueLerpEnd: '7',
          viewkick_scale_valueDecayDelay: '0.12',
          viewkick_scale_valueDecayRate: '50',

          viewkick_perm_pitch_base: '0.0',
          viewkick_perm_pitch_random: '0.0',
          viewkick_perm_yaw_base: '0.0',
          viewkick_perm_yaw_random: '0.0',

          viewmodel_shake_forward: '0.0',
          viewmodel_shake_up: '0.0',
          viewmodel_shake_right: '0.0',
        }
      },
      {
        text: 'weapons.havoc_single',
        value: {
          viewkick_pattern: '',

          viewkick_spring: 'energy_AR_vkp',
          viewkick_spring_hot: 'energy_AR_vkp_hot',

          viewkick_spring_heatpershot: '1.0',
          viewkick_spring_cooldown_holdtime: '0.09',
          viewkick_spring_cooldown_fadetime: '0.05',

          viewmodel_spring_jolt: 'autofire_viewmodel_jolt',
          viewmodel_jolt_scale: '1.0',
          viewmodel_jolt_backwardPerShot: '-0.25',
          viewmodel_jolt_roll: '0 2.7 0.0',
          viewmodel_jolt_side: '0 0.04 0',

          viewkick_pitch_base: '-4.5',
          viewkick_pitch_random: '1.0',
          viewkick_pitch_softScale: '0.85',
          viewkick_pitch_hardScale: '0.25',

          viewkick_yaw_base: '-2.5',
          viewkick_yaw_random: '2.0',
          viewkick_yaw_random_innerexclude: '0.0',
          viewkick_yaw_softScale: '0.6',
          viewkick_yaw_hardScale: '0.4',

          viewkick_roll_base: '-0.25',
          viewkick_roll_randomMin: '-0.25',
          viewkick_roll_randomMax: '0.5',
          viewkick_roll_softScale: '0.4',
          viewkick_roll_hardScale: '0.6',

          viewkick_hipfire_weaponFraction: '0.25',
          viewkick_hipfire_weaponFraction_vmScale: '0.75',
          viewkick_ads_weaponFraction: '0.575',
          viewkick_ads_weaponFraction_vmScale: '0.35',

          viewkick_scale_firstshot_hipfire: '1.0',
          viewkick_scale_min_hipfire: '1.0',
          viewkick_scale_max_hipfire: '1.72',
          viewkick_scale_firstshot_ads: '1.0',
          viewkick_scale_min_ads: '1.0',
          viewkick_scale_max_ads: '1.0',
          viewkick_scale_valuePerShot: '1',
          viewkick_scale_pitch_valueLerpStart: '2',
          viewkick_scale_pitch_valueLerpEnd: '7',
          viewkick_scale_yaw_valueLerpStart: '2',
          viewkick_scale_yaw_valueLerpEnd: '7',
          viewkick_scale_valueDecayDelay: '0.12',
          viewkick_scale_valueDecayRate: '50',

          viewkick_perm_pitch_base: '0.0',
          viewkick_perm_pitch_random: '0.0',
          viewkick_perm_yaw_base: '0.0',
          viewkick_perm_yaw_random: '0.0',

          viewmodel_shake_forward: '0.0',
          viewmodel_shake_up: '0.0',
          viewmodel_shake_right: '0.0',
        }
      },
      {
        text: 'weapons.hemlok',
        value: {
          viewkick_pattern: 'hemlok_2',

          viewkick_spring: 'hemlok_vkp',
          viewkick_spring_hot: 'hemlok_vkp_hot',

          viewkick_spring_heatpershot: '1.0',
          viewkick_spring_cooldown_holdtime: '0.07',
          viewkick_spring_cooldown_fadetime: '0.3',

          viewmodel_spring_jolt: 'autofire_viewmodel_jolt',
          viewmodel_jolt_scale: '1.0',
          viewmodel_jolt_backwardPerShot: '-0.3',
          viewmodel_jolt_roll: '0 4.5 0.0',
          viewmodel_jolt_side: '0 0.05 0',

          viewkick_pitch_base: '1.0',
          viewkick_pitch_random: '1.0',
          viewkick_pitch_softScale: '1.95',
          viewkick_pitch_hardScale: '0.4',

          viewkick_yaw_base: '1.0',
          viewkick_yaw_random: '1.0',
          viewkick_yaw_softScale: '0.8',
          viewkick_yaw_hardScale: '0.33',

          viewkick_roll_base: '-0.8',
          viewkick_roll_randomMin: '-0.8',
          viewkick_roll_randomMax: '1.6',
          viewkick_roll_softScale: '0.9',
          viewkick_roll_hardScale: '0.5',

          viewkick_hipfire_weaponFraction: '0.2',
          viewkick_hipfire_weaponFraction_vmScale: '0.8',
          viewkick_ads_weaponFraction: '0.0',
          viewkick_ads_weaponFraction_vmScale: '1.0',

          viewkick_scale_firstshot_hipfire: '1.0',
          viewkick_scale_min_hipfire: '1.0',
          viewkick_scale_max_hipfire: '1.0',
          viewkick_scale_firstshot_ads: '1.0',
          viewkick_scale_min_ads: '1.0',
          viewkick_scale_max_ads: '1.0',
          viewkick_scale_valuePerShot: '1',
          viewkick_scale_pitch_valueLerpStart: '3',
          viewkick_scale_pitch_valueLerpEnd: '4',
          viewkick_scale_yaw_valueLerpStart: '3',
          viewkick_scale_yaw_valueLerpEnd: '4',
          viewkick_scale_valueDecayDelay: '0.31',
          viewkick_scale_valueDecayRate: '35',

          viewkick_air_scale_ads: '2.0',

          viewkick_perm_pitch_base: '0',
          viewkick_perm_pitch_random: '0',
          viewkick_perm_yaw_base: '0',
          viewkick_perm_yaw_random: '0',


          viewmodel_shake_forward: '0.0',
          viewmodel_shake_up: '0.0',
          viewmodel_shake_right: '0.0'
        }
      },
      {
        text: 'weapons.sniper',
        value: {
          viewkick_spring: 'sniper',

          viewkick_pitch_base: '-1.61',
          viewkick_pitch_random: '1.12',
          viewkick_perm_pitch_base: '0.0',
          viewkick_perm_pitch_random: '0.0',
          viewkick_perm_pitch_random_innerexclude: '0.0',
          viewkick_pitch_softScale: '1.0',
          viewkick_pitch_hardScale: '0.9',

          viewkick_yaw_base: '-1.05',
          viewkick_yaw_random: '1.14',
          viewkick_perm_yaw_base: '0.0',
          viewkick_perm_yaw_random: '0.0',
          viewkick_perm_yaw_random_innerexclude: '0.0',
          viewkick_yaw_softScale: '1.0',
          viewkick_yaw_hardScale: '0.5',

          viewkick_roll_base: '0',
          viewkick_roll_randomMin: '0.5',
          viewkick_roll_randomMax: '0.5',
          viewkick_roll_softScale: '0.2',
          viewkick_roll_hardScale: '1.75',

          viewkick_hipfire_weaponFraction: '0.2',
          viewkick_hipfire_weaponFraction_vmScale: '0.8',
          viewkick_ads_weaponFraction: '0.75',
          viewkick_ads_weaponFraction_vmScale: '0.8',

          viewkick_scale_firstshot_hipfire: '0',
          viewkick_scale_firstshot_ads: '0',
          viewkick_scale_min_ads: '1.0',
          viewkick_scale_max_ads: '1.5'
        }
      },
      {
        text: 'weapons.longbow',
        value: {
          viewkick_spring: 'dmr',

          viewkick_pitch_base: '-1.06',
          viewkick_pitch_random: '0.5',
          viewkick_pitch_softScale: '1.0',
          viewkick_pitch_hardScale: '0.9',

          viewkick_yaw_base: '-0.55',
          viewkick_yaw_random: '0.35',
          viewkick_yaw_softScale: '1.0',
          viewkick_yaw_hardScale: '0.5',

          viewkick_roll_base: '0.1',
          viewkick_roll_randomMin: '0.5',
          viewkick_roll_randomMax: '0.5',
          viewkick_roll_softScale: '0.2',
          viewkick_roll_hardScale: '1.75',


          viewkick_hipfire_weaponFraction: '0.2',
          viewkick_hipfire_weaponFraction_vmScale: '0.8',
          viewkick_ads_weaponFraction: '0.0',
          viewkick_ads_weaponFraction_vmScale: '1.0',


          viewkick_scale_min_hipfire: '1.0',
          viewkick_scale_max_hipfire: '1.5',
          viewkick_scale_min_ads: '1.0',
          viewkick_scale_max_ads: '1.5'
        }
      },
      {
        text: 'weapons.lstar',
        value: {
          viewkick_pattern: 'lstar_2',

          viewkick_spring: 'lstar_vkp',
          viewkick_spring_hot: 'lstar_vkp_hot',

          viewkick_spring_heatpershot: '1.0',
          viewkick_spring_cooldown_holdtime: '0.09',
          viewkick_spring_cooldown_fadetime: '0.05',

          viewmodel_spring_jolt: 'autofire_viewmodel_jolt',
          viewmodel_jolt_scale: '1.0',
          viewmodel_jolt_backwardPerShot: '-0.5',
          viewmodel_jolt_roll: '0 3.4 0.0',
          viewmodel_jolt_side: '0 0.038 0',

          viewkick_pitch_base: '1.0',
          viewkick_pitch_random: '1.0',
          viewkick_pitch_softScale: '2.0',
          viewkick_pitch_hardScale: '0.4',

          viewkick_yaw_base: '1.0',
          viewkick_yaw_random: '1.0',
          viewkick_yaw_random_innerexclude: '0.05',
          viewkick_yaw_softScale: '2.2',
          viewkick_yaw_hardScale: '0.3',

          viewkick_roll_base: '-1.6',
          viewkick_roll_randomMin: '-0.35',
          viewkick_roll_randomMax: '0.35',
          viewkick_roll_softScale: '0.8',
          viewkick_roll_hardScale: '0.3',

          viewkick_hipfire_weaponFraction: '0.2',
          viewkick_hipfire_weaponFraction_vmScale: '0.8',
          viewkick_ads_weaponFraction: '0.1',
          viewkick_ads_weaponFraction_vmScale: '0.9',

          viewkick_scale_firstshot_hipfire: '1.0',
          viewkick_scale_min_hipfire: '1.0',
          viewkick_scale_max_hipfire: '1.5',
          viewkick_scale_firstshot_ads: '1.0',
          viewkick_scale_min_ads: '1.0',
          viewkick_scale_max_ads: '1.0',
          viewkick_scale_valuePerShot: '1',
          viewkick_scale_pitch_valueLerpStart: '0',
          viewkick_scale_yaw_valueLerpStart: '5',
          viewkick_scale_pitch_valueLerpEnd: '0',
          viewkick_scale_yaw_valueLerpEnd: '5',
          viewkick_scale_valueDecayDelay: '0.1',
          viewkick_scale_valueDecayRate: '60',

          viewkick_perm_pitch_base: '0',
          viewkick_perm_pitch_random: '0',
          viewkick_perm_yaw_base: '0',
          viewkick_perm_yaw_random: '0',

          viewkick_air_scale_ads: '2',
          viewkick_duck_scale: '1.0',

          cooldown_viewkick_pitch_base: '0.85',
          cooldown_viewkick_pitch_random: '0.15',
          cooldown_viewkick_pitch_random_innerexclude: '0.0',
          cooldown_viewkick_yaw_base: '0.25',
          cooldown_viewkick_yaw_random: '0.5',
          cooldown_viewkick_yaw_random_innerexclude: '0.0',
          cooldown_viewkick_softScale: '0.4',
          cooldown_viewkick_hardScale: '0.6',
          cooldown_viewkick_adsScale: '0.55',
        }
      },
      {
        text: 'weapons.mastiff',
        value: {
          viewkick_spring: 'mastiff',

          viewkick_pitch_base: '-1.25',
          viewkick_pitch_random: '1',
          viewkick_pitch_softScale: '1.4',
          viewkick_pitch_hardScale: '2.5',

          viewkick_yaw_base: '-0.35',
          viewkick_yaw_random: '0.5',
          viewkick_yaw_softScale: '1.5',
          viewkick_yaw_hardScale: '0.5',

          viewkick_roll_base: '0',
          viewkick_roll_randomMin: '0.6',
          viewkick_roll_randomMax: '0.8',
          viewkick_roll_softScale: '0.2',
          viewkick_roll_hardScale: '3.75',

          viewkick_hipfire_weaponFraction: '0.1',
          viewkick_hipfire_weaponFraction_vmScale: '0.0',
          viewkick_ads_weaponFraction: '0.1',
          viewkick_ads_weaponFraction_vmScale: '1.0',

          viewkick_perm_pitch_base: '0',
          viewkick_perm_pitch_random: '0.0',

          viewkick_scale_firstshot_hipfire: '2',
          viewkick_scale_firstshot_ads: '0',
          viewkick_scale_min_hipfire: '2.5',
          viewkick_scale_max_hipfire: '3.0',
          viewkick_scale_min_ads: '3.0',
          viewkick_scale_max_ads: '3.5',
          viewkick_scale_valuePerShot: '1.0',
          viewkick_scale_pitch_valueLerpStart: '0',
          viewkick_scale_yaw_valueLerpStart: '0',
          viewkick_scale_pitch_valueLerpEnd: '3',
          viewkick_scale_yaw_valueLerpEnd: '3',
          viewkick_scale_valueDecayDelay: '0.3',
          viewkick_scale_valueDecayRate: '25',


          viewmodel_shake_forward: '0.5',
          viewmodel_shake_up: '0.2',
          viewmodel_shake_right: '0.0'
        }
      },
      {
        text: 'weapons.mozambique',
        value: {
          viewkick_spring: 'shotgun_pistol',

          viewkick_pitch_base: '-1.25',
          viewkick_pitch_random: '0.5',
          viewkick_pitch_softScale: '1.4',
          viewkick_pitch_hardScale: '0.5',

          viewkick_yaw_base: '-0.5',
          viewkick_yaw_random: '0.25',
          viewkick_yaw_softScale: '1.5',
          viewkick_yaw_hardScale: '0.5',

          viewkick_roll_base: '0',
          viewkick_roll_randomMin: '-0.6',
          viewkick_roll_randomMax: '0.8',
          viewkick_roll_softScale: '0.2',
          viewkick_roll_hardScale: '2.75',

          viewkick_hipfire_weaponFraction: '0.1',
          viewkick_hipfire_weaponFraction_vmScale: '0.0',
          viewkick_ads_weaponFraction: '0.1',
          viewkick_ads_weaponFraction_vmScale: '0.0',

          viewkick_perm_pitch_base: '0.0',
          viewkick_perm_pitch_random: '-0.5',

          viewkick_scale_firstshot_hipfire: '2',
          viewkick_scale_firstshot_ads: '0',
          viewkick_scale_min_hipfire: '1.5',
          viewkick_scale_max_hipfire: '2.0',
          viewkick_scale_min_ads: '2.0',
          viewkick_scale_max_ads: '2.5',
          viewkick_scale_valuePerShot: '1.0',
          viewkick_scale_pitch_valueLerpStart: '0',
          viewkick_scale_yaw_valueLerpStart: '0',
          viewkick_scale_pitch_valueLerpEnd: '3',
          viewkick_scale_yaw_valueLerpEnd: '3',
          viewkick_scale_valueDecayDelay: '0.3',
          viewkick_scale_valueDecayRate: '25',

          viewmodel_shake_forward: '0.5',
          viewmodel_shake_up: '0.2',
          viewmodel_shake_right: '0.0'
        }
      },
      {
        text: 'weapons.p2020',
        value: {
          viewkick_spring: 'pistol',
          viewkick_spring_hot: 'pistol_hot',
          viewkick_spring_heatpershot: '0.2',
          viewkick_spring_cooldown_holdtime: '0.18',
          viewkick_spring_cooldown_fadetime: '0.1',

          viewkick_pitch_base: '-0.95',
          viewkick_pitch_random: '-0.12',
          viewkick_pitch_softScale: '0.5',
          viewkick_pitch_hardScale: '0.5',

          viewkick_yaw_base: '0.2',
          viewkick_yaw_random: '0.5',
          viewkick_yaw_softScale: '0.6',
          viewkick_yaw_hardScale: '0.4',

          viewkick_roll_base: '-0.15',
          viewkick_roll_randomMin: '-0.15',
          viewkick_roll_randomMax: '0.3',
          viewkick_roll_softScale: '0.5',
          viewkick_roll_hardScale: '0.5',

          viewkick_hipfire_weaponFraction: '0.0',
          viewkick_hipfire_weaponFraction_vmScale: '0.0',
          viewkick_ads_weaponFraction: '0.2',
          viewkick_ads_weaponFraction_vmScale: '0.8',

          viewkick_scale_firstshot_hipfire: '1.5',
          viewkick_scale_min_hipfire: '1.5',
          viewkick_scale_max_hipfire: '2.0',
          viewkick_scale_firstshot_ads: '1.0',
          viewkick_scale_min_ads: '1.0',
          viewkick_scale_max_ads: '2.25',
          viewkick_scale_valuePerShot: '1',
          viewkick_scale_pitch_valueLerpStart: '1',
          viewkick_scale_pitch_valueLerpEnd: '6',
          viewkick_scale_yaw_valueLerpStart: '1',
          viewkick_scale_yaw_valueLerpEnd: '6',
          viewkick_scale_valueDecayDelay: '0.15',
          viewkick_scale_valueDecayRate: '20'
        }
      },
      {
        text: 'weapons.peacekeeper',
        value: {
          viewkick_spring: 'energy_shotgun',

          viewkick_pitch_base: '-5.5',
          viewkick_pitch_random: '-0.7',
          viewkick_pitch_softScale: '0.4',
          viewkick_pitch_hardScale: '0.6',

          viewkick_yaw_base: '0.0',
          viewkick_yaw_random: '0.25',
          viewkick_yaw_softScale: '0.6',
          viewkick_yaw_hardScale: '0.4',

          viewkick_roll_base: '1.5',
          viewkick_roll_randomMin: '-3.0',
          viewkick_roll_randomMax: '1.5',
          viewkick_roll_softScale: '0.25',
          viewkick_roll_hardScale: '0.75',

          viewkick_hipfire_weaponFraction: '0.1',
          viewkick_hipfire_weaponFraction_vmScale: '0.9',
          viewkick_ads_weaponFraction: '0.0',
          viewkick_ads_weaponFraction_vmScale: '1.0',

          viewkick_perm_pitch_base: '0.0',
          viewkick_perm_pitch_random: '0.0',
          viewkick_perm_pitch_random_innerexclude: '0.0',
          viewkick_perm_yaw_base: '0.0',
          viewkick_perm_yaw_random: '0.0',
          viewkick_perm_yaw_random_innerexclude: '0.0',

          viewmodel_shake_forward: '0.2',
          viewmodel_shake_up: '0.2',
          viewmodel_shake_right: '0.0'
        }
      },
      {
        text: 'weapons.prowler',
        value: {
          viewkick_pattern: 'pdw_burst_2',

          viewkick_spring: 'pdw_vkp',
          viewkick_spring_hot: 'pdw_burst_vkp_hot',

          viewkick_spring_heatpershot: '1.0',
          viewkick_spring_cooldown_holdtime: '0.16',
          viewkick_spring_cooldown_fadetime: '0.12',

          viewmodel_spring_jolt: 'pdw_burst_viewmodel_jolt',
          viewmodel_jolt_scale: '1.0',
          viewmodel_jolt_backwardPerShot: '-0.45',
          viewmodel_jolt_roll: '0 2.2 0.0',
          viewmodel_jolt_side: '0 0.025 0',

          viewkick_pitch_base: '1.0',
          viewkick_pitch_random: '1.0',
          viewkick_pitch_softScale: '3.0',
          viewkick_pitch_hardScale: '0.5',

          viewkick_yaw_base: '1.0',
          viewkick_yaw_random: '1.0',
          viewkick_yaw_random_innerexclude: '0.05',
          viewkick_yaw_softScale: '5.4',
          viewkick_yaw_hardScale: '0.4',

          viewkick_roll_base: '0.9',
          viewkick_roll_randomMin: '-0.2',
          viewkick_roll_randomMax: '0.2',
          viewkick_roll_softScale: '0.8',
          viewkick_roll_hardScale: '0.2',

          viewkick_hipfire_weaponFraction: '0.35',
          viewkick_hipfire_weaponFraction_vmScale: '0.5',
          viewkick_ads_weaponFraction: '0.0',
          viewkick_ads_weaponFraction_vmScale: '1.0',

          viewkick_perm_pitch_base: '0',
          viewkick_perm_pitch_random: '0',
          viewkick_perm_yaw_base: '0',
          viewkick_perm_yaw_random: '0',
          viewkick_perm_yaw_random_innerexclude: '0',

          viewkick_scale_firstshot_hipfire: '1.0',
          viewkick_scale_min_hipfire: '1.0',
          viewkick_scale_max_hipfire: '1.0',
          viewkick_scale_firstshot_ads: '1.0',
          viewkick_scale_min_ads: '1.0',
          viewkick_scale_max_ads: '1.0',
          viewkick_scale_valuePerShot: '1.0',
          viewkick_scale_pitch_valueLerpStart: '0',
          viewkick_scale_pitch_valueLerpEnd: '10',
          viewkick_scale_yaw_valueLerpStart: '0',
          viewkick_scale_yaw_valueLerpEnd: '10',
          viewkick_scale_valueDecayDelay: '0.25',
          viewkick_scale_valueDecayRate: '45',

          viewmodel_shake_forward: '0.0',
          viewmodel_shake_up: '0.0',
          viewmodel_shake_right: '0.0',

        }
      },
      {
        text: 'weapons.prowler_auto',
        value: {
          viewkick_pattern: 'pdw_auto_2',

          viewkick_spring: 'pdw_vkp',
          viewkick_spring_hot: 'pdw_auto_vkp_hot',

          viewkick_spring_heatpershot: '1.0',
          viewkick_spring_cooldown_holdtime: '0.08',
          viewkick_spring_cooldown_fadetime: '0.05',

          viewmodel_spring_jolt: 'autofire_viewmodel_jolt',
          viewmodel_jolt_scale: '1.0',
          viewmodel_jolt_backwardPerShot: '-0.4',
          viewmodel_jolt_roll: '0 2.3 0.0',
          viewmodel_jolt_side: '0 0.045 0',

          viewkick_pitch_base: '1.0',
          viewkick_pitch_random: '1.0',
          viewkick_pitch_softScale: '1.2',
          viewkick_pitch_hardScale: '0.3',

          viewkick_yaw_base: '1.0',
          viewkick_yaw_random: '1.0',
          viewkick_yaw_random_innerexclude: '0.05',
          viewkick_yaw_softScale: '1.5',
          viewkick_yaw_hardScale: '0.3',

          viewkick_roll_base: '1.0',
          viewkick_roll_randomMin: '-0.3',
          viewkick_roll_randomMax: '0.3',
          viewkick_roll_softScale: '0.8',
          viewkick_roll_hardScale: '0.2',

          viewkick_hipfire_weaponFraction: '0.35',
          viewkick_hipfire_weaponFraction_vmScale: '0.5',
          viewkick_ads_weaponFraction: '0.0',
          viewkick_ads_weaponFraction_vmScale: '1.0',

          viewkick_perm_pitch_base: '0',
          viewkick_perm_pitch_random: '0',
          viewkick_perm_yaw_base: '0',
          viewkick_perm_yaw_random: '0',
          viewkick_perm_yaw_random_innerexclude: '0',

          viewkick_scale_firstshot_hipfire: '1.0',
          viewkick_scale_min_hipfire: '1.0',
          viewkick_scale_max_hipfire: '1.0',
          viewkick_scale_firstshot_ads: '1.0',
          viewkick_scale_min_ads: '1.0',
          viewkick_scale_max_ads: '1.0',
          viewkick_scale_valuePerShot: '1.0',
          viewkick_scale_pitch_valueLerpStart: '0',
          viewkick_scale_pitch_valueLerpEnd: '10',
          viewkick_scale_yaw_valueLerpStart: '0',
          viewkick_scale_yaw_valueLerpEnd: '10',
          viewkick_scale_valueDecayDelay: '0.1',
          viewkick_scale_valueDecayRate: '55',

          viewmodel_shake_forward: '0.0',
          viewmodel_shake_up: '0.0',
          viewmodel_shake_right: '0.0',
        }
      },
      {
        text: 'weapons.r97',
        value: {
          viewkick_pattern: 'r97_2',

          viewkick_spring: 'r97_vkp',
          viewkick_spring_hot: 'r97_vkp_hot',

          viewkick_spring_heatpershot: '1.0',
          viewkick_spring_cooldown_holdtime: '0.1',
          viewkick_spring_cooldown_fadetime: '0.05',

          viewmodel_spring_jolt: 'autofire_viewmodel_jolt',
          viewmodel_jolt_scale: '1.0',
          viewmodel_jolt_backwardPerShot: '-0.275',
          viewmodel_jolt_roll: '0 2.5 0.0',
          viewmodel_jolt_side: '0 0.0525 0',

          viewkick_pitch_base: '1.0',
          viewkick_pitch_random: '1.0',
          viewkick_pitch_softScale: '4.0',
          viewkick_pitch_hardScale: '0.4',

          viewkick_yaw_base: '1.0',
          viewkick_yaw_random: '1.0',
          viewkick_yaw_random_innerexclude: '0.05',
          viewkick_yaw_softScale: '2.0',
          viewkick_yaw_hardScale: '0.4',

          viewkick_roll_base: '0.8',
          viewkick_roll_randomMin: '-0.2',
          viewkick_roll_randomMax: '0.2',
          viewkick_roll_softScale: '0.7',
          viewkick_roll_hardScale: '0.2',

          viewkick_hipfire_weaponFraction: '0.3',
          viewkick_hipfire_weaponFraction_vmScale: '1.2',
          viewkick_ads_weaponFraction: '0.1',
          viewkick_ads_weaponFraction_vmScale: '0.9',

          viewkick_perm_pitch_base: '0',
          viewkick_perm_pitch_random: '0',
          viewkick_perm_yaw_base: '0',
          viewkick_perm_yaw_random: '0',

          viewkick_scale_firstshot_hipfire: '1.0',
          viewkick_scale_firstshot_ads: '1.0',
          viewkick_scale_min_hipfire: '1.0',
          viewkick_scale_max_hipfire: '1.0',
          viewkick_scale_min_ads: '1.0',
          viewkick_scale_max_ads: '1.0',
          viewkick_scale_valuePerShot: '1.0',
          viewkick_scale_pitch_valueLerpStart: '0',
          viewkick_scale_pitch_valueLerpEnd: '50',
          viewkick_scale_yaw_valueLerpStart: '0',
          viewkick_scale_yaw_valueLerpEnd: '50',
          viewkick_scale_valueDecayDelay: '0.11',
          viewkick_scale_valueDecayRate: '50',

          viewmodel_shake_forward: '0.0',
          viewmodel_shake_up: '0.0',
          viewmodel_shake_right: '0.0'
        }
      },
      {
        text: 'weapons.r301',
        value: {
          viewkick_pattern: 'rspn101_2',

          viewkick_spring: 'rspn101_vkp',
          viewkick_spring_hot: 'rspn101_vkp_hot',

          viewkick_spring_heatpershot: '1.0',
          viewkick_spring_cooldown_holdtime: '0.08',
          viewkick_spring_cooldown_fadetime: '0.05',

          viewmodel_spring_jolt: 'autofire_viewmodel_jolt',
          viewmodel_jolt_scale: '1.0',
          viewmodel_jolt_backwardPerShot: '-0.3',
          viewmodel_jolt_roll: '0 3.5 0.0',
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

          viewmodel_shake_forward: '0.2'
        }
      },
      {
        text: 'weapons.r301_highcal',
        value: {
          viewkick_pattern: 'rspn101_highcal',

          viewkick_spring: 'rspn101_highcal_vkp',
          viewkick_spring_hot: 'rspn101_highcal_vkp_hot',

          viewkick_spring_heatpershot: '1.0',
          viewkick_spring_cooldown_holdtime: '0.26',
          viewkick_spring_cooldown_fadetime: '0.18',

          viewmodel_spring_jolt: 'autofire_viewmodel_jolt',
          viewmodel_jolt_scale: '1.9',
          viewmodel_jolt_backwardPerShot: '-0.65',
          viewmodel_jolt_roll: '0 3.9 0.0',
          viewmodel_jolt_side: '0 0.065 0',

          viewkick_pitch_base: '1.0',
          viewkick_pitch_random: '1.0',
          viewkick_pitch_softScale: '2.9',
          viewkick_pitch_hardScale: '0.4',

          viewkick_yaw_base: '1.0',
          viewkick_yaw_random: '1.0',
          viewkick_yaw_random_innerexclude: '0.05',
          viewkick_yaw_softScale: '1.4',
          viewkick_yaw_hardScale: '0.2',

          viewkick_roll_base: '1.85',
          viewkick_roll_randomMin: '-0.2',
          viewkick_roll_randomMax: '0.2',
          viewkick_roll_softScale: '1.1',
          viewkick_roll_hardScale: '0.25',

          viewkick_hipfire_weaponFraction: '0.125',
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
          viewkick_scale_valueDecayDelay: '0.48',
          viewkick_scale_valueDecayRate: '25',

          viewkick_perm_pitch_base: '0.0',
          viewkick_perm_pitch_random: '0.0',
          viewkick_perm_yaw_base: '0.0',
          viewkick_perm_yaw_random: '0.0',
          viewkick_perm_yaw_random_innerexclude: '0.0',

          viewmodel_shake_forward: '0.2'
        }
      },
      {
        text: 'weapons.re45',
        value: {
          viewkick_pattern: 'autopistol_2',

          viewkick_spring: 'autopistol_vkp',
          viewkick_spring_hot: 'autopistol_vkp_hot',

          viewkick_spring_heatpershot: '1.0',
          viewkick_spring_cooldown_holdtime: '0.08',
          viewkick_spring_cooldown_fadetime: '0.05',

          viewmodel_spring_jolt: 'autofire_viewmodel_jolt',
          viewmodel_jolt_scale: '1.0',
          viewmodel_jolt_backwardPerShot: '-0.075',
          viewmodel_jolt_roll: '0 2.0 0.0',
          viewmodel_jolt_side: '0 0.04 0',

          viewkick_pitch_base: '1.0',
          viewkick_pitch_random: '1.0',
          viewkick_pitch_softScale: '1.8',
          viewkick_pitch_hardScale: '0.2',

          viewkick_yaw_base: '1.0',
          viewkick_yaw_random: '1.0',
          viewkick_yaw_random_innerexclude: '0.05',
          viewkick_yaw_softScale: '1.8',
          viewkick_yaw_hardScale: '0.2',

          viewkick_roll_base: '0.8',
          viewkick_roll_randomMin: '-0.2',
          viewkick_roll_randomMax: '0.2',
          viewkick_roll_softScale: '0.7',
          viewkick_roll_hardScale: '0.4',

          viewkick_hipfire_weaponFraction: '0.15',
          viewkick_hipfire_weaponFraction_vmScale: '0.85',
          viewkick_ads_weaponFraction: '0.0',
          viewkick_ads_weaponFraction_vmScale: '1.0',

          viewkick_perm_pitch_base: '0.0',
          viewkick_perm_pitch_random: '0.0',
          viewkick_perm_yaw_base: '0.0',
          viewkick_perm_yaw_random: '0.0',

          viewkick_scale_firstshot_hipfire: '1.0',
          viewkick_scale_min_hipfire: '1.0',
          viewkick_scale_max_hipfire: '1.0',
          viewkick_scale_firstshot_ads: '1.0',
          viewkick_scale_min_ads: '1.0',
          viewkick_scale_max_ads: '1.0',
          viewkick_scale_valuePerShot: '1.0',
          viewkick_scale_pitch_valueLerpStart: '1',
          viewkick_scale_pitch_valueLerpEnd: '6',
          viewkick_scale_yaw_valueLerpStart: '1',
          viewkick_scale_yaw_valueLerpEnd: '6',
          viewkick_scale_valueDecayDelay: '0.1',
          viewkick_scale_valueDecayRate: '40'
        }
      },
      {
        text: 'weapons.spitfire',
        value: {
          viewkick_pattern: 'lmg_2',

          viewkick_spring: 'lmg_vkp',
          viewkick_spring_hot: 'lmg_vkp_hot',

          viewkick_spring_heatpershot: '1.0',
          viewkick_spring_cooldown_holdtime: '0.12',
          viewkick_spring_cooldown_fadetime: '0.05',

          viewmodel_spring_jolt: 'autofire_viewmodel_jolt',
          viewmodel_jolt_scale: '1.0',
          viewmodel_jolt_backwardPerShot: '-0.5',
          viewmodel_jolt_roll: '0 3.4 0.0',
          viewmodel_jolt_side: '0 0.038 0',

          viewkick_pitch_base: '1.0',
          viewkick_pitch_random: '1.0',
          viewkick_pitch_softScale: '2.0',
          viewkick_pitch_hardScale: '0.3',

          viewkick_yaw_base: '1.0',
          viewkick_yaw_random: '1.0',
          viewkick_yaw_random_innerexclude: '0.22',
          viewkick_yaw_softScale: '3.0',
          viewkick_yaw_hardScale: '0.3',

          viewkick_roll_base: '-1.6',
          viewkick_roll_randomMin: '-0.35',
          viewkick_roll_randomMax: '0.35',
          viewkick_roll_softScale: '0.8',
          viewkick_roll_hardScale: '0.3',

          viewkick_hipfire_weaponFraction: '0.2',
          viewkick_hipfire_weaponFraction_vmScale: '1.0',
          viewkick_ads_weaponFraction: '0.0',
          viewkick_ads_weaponFraction_vmScale: '1.0',

          viewkick_scale_firstshot_hipfire: '1.1',
          viewkick_scale_min_hipfire: '1.0',
          viewkick_scale_max_hipfire: '1.0',
          viewkick_scale_firstshot_ads: '1.0',
          viewkick_scale_min_ads: '1.0',
          viewkick_scale_max_ads: '1.0',
          viewkick_scale_valuePerShot: '1',
          viewkick_scale_pitch_valueLerpStart: '2',
          viewkick_scale_pitch_valueLerpEnd: '11',
          viewkick_scale_yaw_valueLerpStart: '2',
          viewkick_scale_yaw_valueLerpEnd: '11',
          viewkick_scale_valueDecayDelay: '0.15',
          viewkick_scale_valueDecayRate: '80',

          viewkick_duck_scale: '0.9',

          viewmodel_shake_forward: '0.0',
          viewmodel_shake_up: '0.0',
          viewmodel_shake_right: '0.0',
        }
      },
      {
        text: 'weapons.smart_pistol',
        value: {
          viewkick_spring: 'pistol',

          viewkick_pitch_base: '-1.0',
          viewkick_pitch_random: '-0.5',
          viewkick_pitch_softScale: '1.0',
          viewkick_pitch_hardScale: '0.9',

          viewkick_yaw_base: '0.15',
          viewkick_yaw_random: '1.0',
          viewkick_yaw_softScale: '1.0',
          viewkick_yaw_hardScale: '0.9',

          viewkick_roll_base: '0.0',
          viewkick_roll_randomMin: '0.2',
          viewkick_roll_randomMax: '0.4',
          viewkick_roll_softScale: '0.2',
          viewkick_roll_hardScale: '1.4',

          viewkick_hipfire_weaponFraction: '0.0',
          viewkick_hipfire_weaponFraction_vmScale: '0.5',
          viewkick_ads_weaponFraction: '0.0',
          viewkick_ads_weaponFraction_vmScale: '0.5',

          viewkick_perm_pitch_base: '0.0',
          viewkick_perm_pitch_random: '1.0',
          viewkick_perm_yaw_base: '0.1',
          viewkick_perm_yaw_random: '1.0'
        }
      },
      {
        text: 'weapons.triple_take',
        value: {
          viewkick_spring: 'doubletake',

          viewkick_pitch_base: '-0.8',
          viewkick_pitch_random: '0.15',
          viewkick_perm_pitch_base: '0.0',
          viewkick_perm_pitch_random: '0.0',
          viewkick_perm_pitch_random_innerexclude: '0.0',
          viewkick_pitch_softScale: '1.2',
          viewkick_pitch_hardScale: '0.9',

          viewkick_yaw_base: '0.2',
          viewkick_yaw_random: '0.15',
          viewkick_perm_yaw_base: '0.0',
          viewkick_perm_yaw_random: '0.0',
          viewkick_perm_yaw_random_innerexclude: '0.0',
          viewkick_yaw_softScale: '1.3',
          viewkick_yaw_hardScale: '1.0',

          viewkick_roll_base: '-0.2',
          viewkick_roll_randomMin: '0.1',
          viewkick_roll_randomMax: '0.3',
          viewkick_roll_softScale: '0.5',
          viewkick_roll_hardScale: '1.25',

          viewkick_hipfire_weaponFraction: '0.2',
          viewkick_hipfire_weaponFraction_vmScale: '0.8',
          viewkick_ads_weaponFraction: '0.0',
          viewkick_ads_weaponFraction_vmScale: '1.0',

          viewkick_scale_min_ads: '1.0',
          viewkick_scale_max_ads: '1.5',
          viewkick_scale_pitch_valueLerpStart: '0',
          viewkick_scale_pitch_valueLerpEnd: '0',
          viewkick_scale_valueDecayDelay: '0.15',
          viewkick_scale_valueDecayRate: '10',
        }
      },
      {
        text: 'weapons.wingman',
        value: {
          viewkick_spring: 'wingman',

          viewkick_pitch_base: '-4.4',
          viewkick_pitch_random: '0.8',
          viewkick_pitch_softScale: '0.65',
          viewkick_pitch_hardScale: '0.35',

          viewkick_yaw_base: '-0.6',
          viewkick_yaw_random: '-0.5',
          viewkick_yaw_softScale: '0.8',
          viewkick_yaw_hardScale: '0.4',

          viewkick_roll_base: '0.1',
          viewkick_roll_randomMin: '0.1',
          viewkick_roll_randomMax: '0.15',
          viewkick_roll_softScale: '0.4',
          viewkick_roll_hardScale: '0.2',

          viewkick_hipfire_weaponFraction: '0.4',
          viewkick_hipfire_weaponFraction_vmScale: '0.0',
          viewkick_ads_weaponFraction: '0.3',
          viewkick_ads_weaponFraction_vmScale: '0.0',

          viewkick_perm_pitch_base: '0.0',
          viewkick_perm_pitch_random: '0.0',
          viewkick_perm_yaw_base: '0.0',
          viewkick_perm_yaw_random: '0.0',

          viewkick_scale_firstshot_hipfire: '1.0',
          viewkick_scale_min_hipfire: '1.0',
          viewkick_scale_max_hipfire: '2.0',
          viewkick_scale_firstshot_ads: '1.0',
          viewkick_scale_min_ads: '1.0',
          viewkick_scale_max_ads: '2.0',
          viewkick_scale_valuePerShot: '1.0',
          viewkick_scale_pitch_valueLerpStart: '0',
          viewkick_scale_pitch_valueLerpEnd: '2',
          viewkick_scale_yaw_valueLerpStart: '0',
          viewkick_scale_yaw_valueLerpEnd: '2',
          viewkick_scale_valueDecayDelay: '0.3',
          viewkick_scale_valueDecayRate: '50',

          viewmodel_shake_forward: '0.5',
          viewmodel_shake_up: '0.2',
          viewmodel_shake_right: '0.0',
        }
      }
    ]
  },
  mutations: {
    weaponPropertyUpdate(state, value: string[]) {
      state.weapon[value[0]] = value[1]
    },
    weaponPropertyImport(state, value: string[]) {
      if (value[1] != '') {
        state.weapon[value[0]] = value[1]
      }
    },
    updateWeaponText(state, text: string) {
      state.weaponText = text
    }
  },
  actions: {
    generationText(context) {
      const icon = context.state.weapon.icon
      const viewmodel = context.state.weapon.viewmodel
      const playermodel = context.state.weapon.playermodel

      let viewmodel_path = viewmodel
      switch (viewmodel) {
        case 'g2a4':
          viewmodel_path = 'g2'
          break
        case 'hemlok':
          viewmodel_path = 'm1a1_hemlok'
          break
        case 'mastiff':
          viewmodel_path = 'mastiff_stgn'
          break
      }

      let playermodel_path = playermodel
      switch (playermodel) {
        case 'g2a4':
          playermodel_path = 'g2'
          break
        case 'hemlok':
          playermodel_path = 'm1a1_hemlok'
          break
        case 'mastiff':
          playermodel_path = 'mastiff_stgn'
          break
      }

      const weapon_dict_ammo = {
        ammo_pool_type: context.state.weapon.ammo_pool_type,
        ammo_clip_size: context.state.weapon.ammo_clip_size,
        ammo_default_total: '180',
        ammo_stockpile_max: '180',
        ammo_no_remove_from_stockpile: '1',
        ammo_per_shot: context.state.weapon.ammo_per_shot,
        ammo_min_to_fire: context.state.weapon.ammo_per_shot,
        uses_ammo_pool: '1',
        regen_ammo_refill_rate: context.state.weapon.regen_ammo_refill_rate,
        reload_enabled: '1',
        reload_time: context.state.weapon.reload_time,
        reload_time_late1: Math.round((Number(context.state.weapon.reload_time) * 0.4) * 10) / 10 + '',
        reloadempty_time: context.state.weapon.reloadempty_time,
        reloadempty_time_late1: Math.round((Number(context.state.weapon.reloadempty_time) * 0.6) * 10) / 10 + '',
        reloadempty_time_late2: Math.round((Number(context.state.weapon.reloadempty_time) * 0.3) * 10) / 10 + '',
        __sep1: '--- separator ---',
      }
      if (context.state.weapon.regen_ammo_refill_rate != '0') {
        weapon_dict_ammo.reload_enabled = '0'
      }

      let weapon_base = context.state.weapon.weapon_type
      const burst_fire_count = context.state.weapon.burst_fire_count == '1' ? '0' : context.state.weapon.burst_fire_count

      const weapon_dict_data = {
        printname: context.state.weapon.printname,
        shortprintname: context.state.weapon.shortprintname,
        description: context.state.weapon.description,
        longdesc: context.state.weapon.description,
        __sep2: '--- separator ---',

        menu_icon: 'rui/weapon_icons/r5/weapon_' + icon,
        hud_icon: 'rui/weapon_icons/r5/weapon_' + icon,
        viewmodel: 'mdl/weapons/' + viewmodel_path + '/ptpov_' + viewmodel + '.rmdl',
        playermodel: 'mdl/weapons/' + playermodel_path + '/w_' + playermodel + '.rmdl',
        __sep3: '--- separator ---',

        weapon_type_flags: 'WPT_PRIMARY',
        damage_type: 'bullet',
        damage_near_value: context.state.weapon.damage_value,
        damage_far_value: context.state.weapon.damage_value,
        damage_very_far_value: context.state.weapon.damage_value,
        allow_headshots: '1',
        damage_headshot_scale: context.state.weapon.damage_headshot_scale,
        __sep4: '--- separator ---',

        projectile_launch_speed: context.state.weapon.projectile_launch_speed,
        projectilemodel: context.state.weapon.projectilemodel,
        projectile_trail_effect_0: context.state.weapon.projectile_trail_effect_0,
        __sep5: '--- separator ---',

        fire_mode: 'automatic',
        is_semi_auto: context.state.weapon.is_semi_auto,
        fire_rate: context.state.weapon.fire_rate,
        burst_fire_count: burst_fire_count,
        burst_fire_delay: context.state.weapon.burst_fire_delay,
        __sep6: '--- separator ---',

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
        __sep7: '--- separator ---',

        ...weapon_dict_ammo,

        ...context.state.weapon.viewkick_preset,
        __sep8: '--- separator ---',

        active_crosshair_count: '1',
        rui_crosshair_index: '0',
      }

      let extended_mag_prefix
      switch (context.state.weapon.ammo_pool_type) {
        case 'special':
          extended_mag_prefix = 'energy_mag_l'
          weapon_base += '#base "_base_mags_energy.txt"\n'
          break
        case 'bullet':
          extended_mag_prefix = 'bullets_mag_l'
          weapon_base += '#base "_base_mags_light.txt"\n'
          break
        case 'highcal':
          extended_mag_prefix = 'highcal_mag_l'
          weapon_base += '#base "_base_mags_heavy.txt"\n'
      }

      let weapon_dict_extended_mag: Record<string, unknown> = {}
      if (context.state.weapon.ammo_pool_type != 'shotgun') {
        weapon_dict_extended_mag = {
          [extended_mag_prefix + '1']: {
            'ammo_clip_size': context.state.weapon.mag_l1
          },
          __sep21: '--- separator ---',
          [extended_mag_prefix + '2']: {
            'ammo_clip_size': context.state.weapon.mag_l2
          },
          __sep22: '--- separator ---',
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
            __sep11: '--- separator ---',
            survival_finite_ammo: {
              ammo_default_total: '180',
              ammo_stockpile_max: '180',
              ammo_no_remove_from_stockpile: '0',
              uses_ammo_pool: '1'
            },
            __sep12: '--- separator ---',
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

      context.commit('updateWeaponText', weapon_base + '\n// Generation by R5RTool\n\n' + generateR5RWeapon(weapon_dict))
    },
    importText(context, kvfile: string) {
      const kvjson = importR5RWeapon(kvfile)
      context.commit('weaponPropertyImport', ['printname', kvjson['printname']])
      context.commit('weaponPropertyImport', ['shortprintname', kvjson['shortprintname']])
      context.commit('weaponPropertyImport', ['description', kvjson['description']])
      //context.commit('weaponPropertyImport', ['icon', kvjson['')])
      context.commit('weaponPropertyImport', ['viewmodel', modelname(kvjson['viewmodel'])])
      context.commit('weaponPropertyImport', ['playermodel', modelname(kvjson['playermodel'])])
      context.commit('weaponPropertyImport', ['crosshair', kvjson['RUI_CrosshairData']['Crosshair_1']['ui']])
      //context.commit('weaponPropertyImport', ['sound', kvjson['')])
      context.commit('weaponPropertyImport', ['is_semi_auto', kvjson['is_semi_auto']])
      context.commit('weaponPropertyImport', ['projectile_launch_speed', kvjson['projectile_launch_speed']])
      context.commit('weaponPropertyImport', ['projectilemodel', kvjson['projectilemodel']])
      context.commit('weaponPropertyImport', ['projectile_trail_effect_0', kvjson['projectile_trail_effect_0']])
      context.commit('weaponPropertyImport', ['damage_value', kvjson['damage_near_value']])
      context.commit('weaponPropertyImport', ['damage_headshot_scale', kvjson['damage_headshot_scale']])
      context.commit('weaponPropertyImport', ['fire_rate', kvjson['fire_rate']])
      context.commit('weaponPropertyImport', ['ammo_per_shot', kvjson['ammo_per_shot']])
      context.commit('weaponPropertyImport', ['regen_ammo_refill_rate', kvjson['regen_ammo_refill_rate']])
      context.commit('weaponPropertyImport', ['burst_fire_count', kvjson['burst_fire_count']])
      context.commit('weaponPropertyImport', ['burst_fire_delay', kvjson['burst_fire_delay']])
      context.commit('weaponPropertyImport', ['ammo_pool_type', kvjson['ammo_pool_type']])
      context.commit('weaponPropertyImport', ['ammo_clip_size', kvjson['ammo_clip_size']])
      // context.commit('weaponPropertyImport', ['mag_l1', kvjson['Mods']])
      // context.commit('weaponPropertyImport', ['mag_l2', kvjson['Mods']])
      // context.commit('weaponPropertyImport', ['mag_l3', kvjson['Mods']])
      context.commit('weaponPropertyImport', ['reload_time', kvjson['reload_time']])
      context.commit('weaponPropertyImport', ['reloadempty_time', kvjson['reloadempty_time']])
      // context.commit('weaponPropertyImport', ['viewkick_preset', kvjson['')])
    }
  },
  modules: {
  }
})
