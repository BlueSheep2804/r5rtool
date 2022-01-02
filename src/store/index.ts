import Vue from 'vue'
import Vuex from 'vuex'
import { R5RWeapon } from '../utils/r5rtext'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    weaponText: '',
    weaponData: new R5RWeapon(),
    weaponType: [
      { text: 'weapon_type.ar', value: '#base "_base_assault_rifle.txt"\n' },
      { text: 'weapon_type.smg', value: '#base "_base_smg.txt"\n' },
      { text: 'weapon_type.lmg', value: '#base "_base_lmg.txt"\n' },
      { text: 'weapon_type.sr', value: '#base "_base_sniper.txt"\n#base "_base_sniper_optics.txt"\n' },
      { text: 'weapon_type.sg', value: '#base "_base_shotgun.txt"\n' },
      { text: 'weapon_type.pistol', value: '#base "_base_handgun.txt"\n' },
    ],
    calledWeaponIcon: [ //rui/menu/dpad_comms/emoji/fist
      { text: 'weapons.alternator', value: 'rui/weapon_icons/r5/weapon_alternator' },
      { text: 'weapons.charge_rifle', value: 'rui/weapon_icons/r5/weapon_charge_rifle' },
      { text: 'weapons.devotion', value: 'rui/weapon_icons/r5/weapon_devotion' },
      { text: 'weapons.eva8', value: 'rui/weapon_icons/r5/weapon_eva8' },
      { text: 'weapons.flatline', value: 'rui/weapon_icons/r5/weapon_flatline' },
      { text: 'weapons.g7', value: 'rui/weapon_icons/r5/weapon_g7' },
      { text: 'weapons.havoc', value: 'rui/weapon_icons/r5/weapon_energy_ar' },
      { text: 'weapons.hemlok', value: 'rui/weapon_icons/r5/weapon_hemlok' },
      { text: 'weapons.sniper', value: 'rui/weapon_icons/r5/weapon_sniper' },
      { text: 'weapons.longbow', value: 'rui/weapon_icons/r5/weapon_longbow' },
      { text: 'weapons.lstar', value: 'rui/weapon_icons/r5/weapon_lstar' },
      { text: 'weapons.mastiff', value: 'rui/weapon_icons/r5/weapon_mastiff' },
      { text: 'weapons.mozambique', value: 'rui/weapon_icons/r5/weapon_mozambique' },
      { text: 'weapons.p2020', value: 'rui/weapon_icons/r5/weapon_p2020' },
      { text: 'weapons.peacekeeper', value: 'rui/weapon_icons/r5/weapon_peacekeeper' },
      { text: 'weapons.prowler', value: 'rui/weapon_icons/r5/weapon_prowler' },
      { text: 'weapons.r301', value: 'rui/weapon_icons/r5/weapon_r301' },
      { text: 'weapons.r97', value: 'rui/weapon_icons/r5/weapon_r97' },
      { text: 'weapons.re45', value: 'rui/weapon_icons/r5/weapon_r45' },
      { text: 'weapons.spitfire', value: 'rui/weapon_icons/r5/weapon_spitfire' },
      { text: 'weapons.triple_take', value: 'rui/weapon_icons/r5/weapon_triple_take' },
      { text: 'weapons.wingman', value: 'rui/weapon_icons/r5/weapon_wingman' },
    ],
    viewmodels: [
      { text: 'weapons.alternator', value: 'mdl/weapons/alternator/ptpov_alternator_smg.rmdl' },
      { text: 'weapons.charge_rifle', value: 'mdl/weapons/defender/ptpov_defender.rmdl' },
      { text: 'weapons.devotion', value: 'mdl/weapons/hemlok_br/ptpov_hemlock_br.rmdl' },
      { text: 'weapons.eva8', value: 'mdl/weapons/w1128/ptpov_w1128.rmdl' },
      { text: 'weapons.flatline', value: 'mdl/weapons/vinson/ptpov_vinson.rmdl' },
      { text: 'weapons.g7', value: 'mdl/weapons/g2/ptpov_g2a4.rmdl' }, //g2
      { text: 'weapons.havoc', value: 'mdl/weapons/beam_ar/ptpov_beam_ar.rmdl' },
      { text: 'weapons.hemlok', value: 'mdl/weapons/m1a1_hemlok/ptpov_hemlok.rmdl' }, //m1a1_hemlok
      { text: 'weapons.sniper', value: 'mdl/weapons/at_rifle/ptpov_at_rifle.rmdl' },
      { text: 'weapons.longbow', value: 'mdl/weapons/dmr/ptpov_rspn101_dmr.rmdl' },
      { text: 'weapons.lstar', value: 'mdl/weapons/lstar/ptpov_lstar.rmdl' },
      { text: 'weapons.mastiff', value: 'mdl/weapons/mastiff_stgn/ptpov_mastiff.rmdl' }, //mastiff_stgn
      { text: 'weapons.mozambique', value: 'mdl/weapons/pstl_sa3/ptpov_pstl_sa3.rmdl' },
      { text: 'weapons.p2020', value: 'mdl/weapons/p2011/ptpov_p2011.rmdl' },
      { text: 'weapons.peacekeeper', value: 'mdl/weapons/peacekeeper/ptpov_peacekeeper.rmdl' },
      { text: 'weapons.prowler', value: 'mdl/weapons/prowler/ptpov_prowler_smg.rmdl' },
      { text: 'weapons.r301', value: 'mdl/weapons/rspn101/ptpov_rspn101.rmdl' },
      { text: 'weapons.r97', value: 'mdl/weapons/r97/ptpov_r97.rmdl' },
      { text: 'weapons.re45', value: 'mdl/weapons/p2011_auto/ptpov_p2011_auto.rmdl' },
      { text: 'weapons.spitfire', value: 'mdl/weapons/lmg_hemlok/ptpov_lmg_hemlok.rmdl' },
      { text: 'weapons.triple_take', value: 'mdl/weapons/doubletake/ptpov_doubletake.rmdl' },
      { text: 'weapons.wingman', value: 'mdl/weapons/b3wing/ptpov_b3wing.rmdl' },
    ],
    playermodels: [
      { text: 'weapons.alternator', value: 'mdl/weapons/alternator/w_alternator_smg.rmdl' },
      { text: 'weapons.charge_rifle', value: 'mdl/weapons/defender/w_defender.rmdl' },
      { text: 'weapons.devotion', value: 'mdl/weapons/hemlok_br/w_hemlock_br.rmdl' },
      { text: 'weapons.eva8', value: 'mdl/weapons/w1128/w_w1128.rmdl' },
      { text: 'weapons.flatline', value: 'mdl/weapons/vinson/w_vinson.rmdl' },
      { text: 'weapons.g7', value: 'mdl/weapons/g2/w_g2a4.rmdl' }, //g2
      { text: 'weapons.havoc', value: 'mdl/weapons/beam_ar/w_beam_ar.rmdl' },
      { text: 'weapons.hemlok', value: 'mdl/weapons/m1a1_hemlok/w_hemlok.rmdl' }, //m1a1_hemlok
      { text: 'weapons.sniper', value: 'mdl/weapons/at_rifle/w_at_rifle.rmdl' },
      { text: 'weapons.longbow', value: 'mdl/weapons/dmr/w_rspn101_dmr.rmdl' },
      { text: 'weapons.lstar', value: 'mdl/weapons/lstar/w_lstar.rmdl' },
      { text: 'weapons.mastiff', value: 'mdl/weapons/mastiff_stgn/w_mastiff.rmdl' }, //mastiff_stgn
      { text: 'weapons.mozambique', value: 'mdl/weapons/pstl_sa3/w_pstl_sa3.rmdl' },
      { text: 'weapons.p2020', value: 'mdl/weapons/p2011/w_p2011.rmdl' },
      { text: 'weapons.peacekeeper', value: 'mdl/weapons/peacekeeper/w_peacekeeper.rmdl' },
      { text: 'weapons.prowler', value: 'mdl/weapons/prowler/w_prowler_smg.rmdl' },
      { text: 'weapons.r301', value: 'mdl/weapons/rspn101/w_rspn101.rmdl' },
      { text: 'weapons.r97', value: 'mdl/weapons/r97/w_r97.rmdl' },
      { text: 'weapons.re45', value: 'mdl/weapons/p2011_auto/w_p2011_auto.rmdl' },
      { text: 'weapons.spitfire', value: 'mdl/weapons/lmg_hemlok/w_lmg_hemlok.rmdl' },
      { text: 'weapons.triple_take', value: 'mdl/weapons/doubletake/w_doubletake.rmdl' },
      { text: 'weapons.wingman', value: 'mdl/weapons/b3wing/w_b3wing.rmdl' },
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
      state.weaponData.dict[value[0]] = value[1]
      console.log(`${value[0]}: ${value[1]}`)
    },
    updateWeaponText(state, text: string) {
      state.weaponText = text
    }
  },
  actions: {
    generationText(context) {
      //context.state.weaponData.loadForm(context.state.weapon)
      context.commit('updateWeaponText', context.state.weaponData.export())
    },
    importText(context, kvfile: string) {
      context.state.weaponData.load(kvfile)
    }
  },
  modules: {
  }
})
