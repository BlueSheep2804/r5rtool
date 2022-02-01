import Vue from 'vue'
import Vuex from 'vuex'
import { R5RWeapon } from '../utils/r5rtext'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    weaponText: '',
    weaponData: new R5RWeapon(),
    weaponBase: [
      { text: 'weapon_base.ability', value: '_base_ability.txt' },
      { text: 'weapon_base.ability_tactical', value: '_base_ability_tactical.txt' },
      { text: 'weapon_base.ability_ultimate', value: '_base_ability_ultimate.txt' },
      { text: 'weapon_base.assault_rifle', value: '_base_assault_rifle.txt' },
      { text: 'weapon_base.assault_rifle_optics', value: '_base_assault_rifle_optics.txt' },
      { text: 'weapon_base.barrels', value: '_base_barrels.txt' },
      { text: 'weapon_base.barrels_large', value: '_base_barrels_large.txt' },
      { text: 'weapon_base.barrels_medium', value: '_base_barrels_medium.txt' },
      { text: 'weapon_base.character_mods', value: '_base_character_mods.txt' },
      { text: 'weapon_base.handgun', value: '_base_handgun.txt' },
      { text: 'weapon_base.handgun_optics', value: '_base_handgun_optics.txt' },
      { text: 'weapon_base.lmg', value: '_base_lmg.txt' },
      { text: 'weapon_base.lmg_optics', value: '_base_lmg_optics.txt' },
      { text: 'weapon_base.mags_energy', value: '_base_mags_energy.txt' },
      { text: 'weapon_base.mags_heavy', value: '_base_mags_heavy.txt' },
      { text: 'weapon_base.mags_light', value: '_base_mags_light.txt' },
      { text: 'weapon_base.melee', value: '_base_melee.txt' },
      { text: 'weapon_base.optics', value: '_base_optics.txt' },
      { text: 'weapon_base.optics_cq', value: '_base_optics_cq.txt' },
      { text: 'weapon_base.optics_cq_threat', value: '_base_optics_cq_threat.txt' },
      { text: 'weapon_base.optics_fullscreen', value: '_base_optics_fullscreen.txt' },
      { text: 'weapon_base.optics_ranged', value: '_base_optics_ranged.txt' },
      { text: 'weapon_base.projectile_ricochet', value: '_base_projectile_ricochet.txt' },
      { text: 'weapon_base.shotgun', value: '_base_shotgun.txt' },
      { text: 'weapon_base.shotgun_bolts', value: '_base_shotgun_bolts.txt' },
      { text: 'weapon_base.smg', value: '_base_smg.txt' },
      { text: 'weapon_base.smg_optics', value: '_base_smg_optics.txt' },
      { text: 'weapon_base.sniper', value: '_base_sniper.txt' },
      { text: 'weapon_base.sniper_optics', value: '_base_sniper_optics.txt' },
      { text: 'weapon_base.stocks_sniper', value: '_base_stocks_sniper.txt' },
      { text: 'weapon_base.stocks_tactical', value: '_base_stocks_tactical.txt' },
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
      { text: 'weapons.alternator', value: 'alternator_smg' },
      { text: 'weapons.devotion', value: 'esaw' },
      { text: 'weapons.eva8', value: 'shotgun' },
      { text: 'weapons.flatline', value: 'vinson' },
      { text: 'weapons.g7', value: 'g2' },
      { text: 'weapons.havoc', value: 'energy_ar' },
      { text: 'weapons.hemlok', value: 'hemlok' },
      { text: 'weapons.sniper', value: 'sniper' },
      { text: 'weapons.longbow', value: 'dmr' },
      { text: 'weapons.lstar', value: 'lstar' },
      { text: 'weapons.mastiff', value: 'mastiff' },
      { text: 'weapons.mozambique', value: 'shotgun_pistol' },
      { text: 'weapons.p2020', value: 'semipistol' },
      { text: 'weapons.peacekeeper', value: 'energy_shotgun' },
      { text: 'weapons.prowler', value: 'pdw' },
      { text: 'weapons.r97', value: 'r97' },
      { text: 'weapons.r301', value: 'rspn101' },
      { text: 'weapons.re45', value: 'autopistol' },
      { text: 'weapons.spitfire', value: 'lmg' },
      { text: 'weapons.smart_pistol', value: 'smart_pistol' },
      { text: 'weapons.triple_take', value: 'doubletake' },
      { text: 'weapons.wingman', value: 'wingman' }
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
