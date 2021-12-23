interface R5RWeaponDict {
  [key: string]: string | ModsData | CrosshairData;
  printname: string;
  ammo_pool_type: string;
  Mods: ModsData;
  RUI_CrosshairData: CrosshairData;
}

interface ModsData {
  [key: string]: Record<string, never> | Record<string, unknown> | ModsExtendedMag | undefined
  gold: Record<string, never>;
  survival_finite_ammo?: Record<string, unknown>;
  bullets_mag_l1?: ModsExtendedMag;
  bullets_mag_l2?: ModsExtendedMag;
  bullets_mag_l3?: ModsExtendedMag;
  highcal_mag_l1?: ModsExtendedMag;
  highcal_mag_l2?: ModsExtendedMag;
  highcal_mag_l3?: ModsExtendedMag;
  energy_mag_l1?: ModsExtendedMag;
  energy_mag_l2?: ModsExtendedMag;
  energy_mag_l3?: ModsExtendedMag;
}

interface ModsExtendedMag {
  [key: string]: string
  ammo_clip_size: string;
}

interface CrosshairData {
  [key: string]: {ui: string, base_spread: string} | Record<string, unknown>;
  DefaultArgs: Record<string, unknown>;
  Crosshair_1: {ui: string, base_spread: string};
}

function isCrosshairData(arg: any): arg is CrosshairData {
  return arg !== null && typeof arg === 'object' && typeof arg.Crosshair_1 === 'object'
}

interface weaponProperty {
  [key: string]: string | Record<string, string>
  id: string;
  weapon_type: string;
  printname: string;
  shortprintname: string;
  description: string;
  icon: string;
  viewmodel: string;
  playermodel: string;
  crosshair: string;
  sound: Record<string, string>;
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
  viewkick_preset: Record<string, string>;
}

export class R5RWeapon {
  dict: R5RWeaponDict

  constructor() {
    this.dict = {
      printname: '',
      ammo_pool_type: '',
      Mods: {gold: {}},
      RUI_CrosshairData: {
        DefaultArgs: {},
        Crosshair_1: {
          ui: '',
          base_spread: ''
        }
      }
    }
  }

  load(kvfile: string): void {
    const kvjson = kvfile
      .replace(/\r\n/g, '\n')
      .replace(/[\s]*\/\/[\S\t ]*\n/g, '\n')
      .replace(/#base "_[\S]+\n/g, '')
      .replace(/(\t+| {2,})([\w]+)([\t ]+)("{0}[\w.-]+"{0})\n/g, '$1"$2"$3"$4"\n')
      .replace(/(\t+| {2,})("[\w]+")([\t ]+)("{0}[\w.-]+"{0})\n/g, '$1$2$3"$4"\n')
      .replace(/(\t+| {2,})([\w]+)([\t ]+)("[\w.-]+")\n/g, '$1"$2"$3$4\n')
      .replace(/("{0}[\w]+"{0})(\n[\s]*\{)/g, '"$1": {')
      .replace(/("[\w]+")(\n[\s]*\{)/g, '$1: {')
      .replace(/"+WeaponData"+: {/g, '{')
      .replaceAll('}', '},')
      .replace(/"([\t ]+)"/g, '": "')
      .replaceAll('"\n', '",\n')
      .replace(/,(\n[\s]*})/g, '$1')
      .replaceAll('\n},', '\n}')
    console.log(kvjson)
    this.dict = JSON.parse(kvjson)
  }

  loadForm(weaponData: weaponProperty): void {
    this.dict.printname = weaponData.printname
    this.dict.shortprintname = weaponData.shortprintname
    this.dict.description = weaponData.description
    this.dict.longdesc = weaponData.description

    this.dict.menu_icon = 'rui/weapon_icons/r5/weapon_' + weaponData.icon
    this.dict.hud_icon = 'rui/weapon_icons/r5/weapon_' + weaponData.icon

    let viewmodel_path = weaponData.viewmodel
    switch (weaponData.viewmodel) {
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
    this.dict.viewmodel = 'mdl/weapons/' + viewmodel_path + '/ptpov_' + weaponData.viewmodel + '.rmdl'

    let playermodel_path = weaponData.playermodel
    switch (weaponData.playermodel) {
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
    this.dict.playermodel = 'mdl/weapons/' + playermodel_path + '/w_' + weaponData.playermodel + '.rmdl'

    this.dict.damage_near_value = weaponData.damage_value
    this.dict.damage_far_value = weaponData.damage_value
    this.dict.damage_very_far_value = weaponData.damage_value
    this.dict.damage_headshot_scale = weaponData.damage_headshot_scale

    this.dict.projectile_launch_speed = weaponData.projectile_launch_speed
    this.dict.projectilemodel = weaponData.projectilemodel
    this.dict.projectile_trail_effect_0 = weaponData.projectile_trail_effect_0

    this.dict.is_semi_auto = weaponData.is_semi_auto
    this.dict.fire_rate = weaponData.fire_rate
    const burst_fire_count = weaponData.burst_fire_count == '1' ? '0' : weaponData.burst_fire_count
    this.dict.burst_fire_count = burst_fire_count
    this.dict.burst_fire_delay = weaponData.burst_fire_delay

    this.dict.ammo_pool_type = weaponData.ammo_pool_type
    this.dict.ammo_clip_size = weaponData.ammo_clip_size
    this.dict.ammo_per_shot = weaponData.ammo_per_shot
    this.dict.ammo_min_to_fire = weaponData.ammo_per_shot
    this.dict.regen_ammo_refill_rate = weaponData.regen_ammo_refill_rate
    this.dict.reload_time = weaponData.reload_time
    this.dict.reload_time_late1 = Math.round((Number(weaponData.reload_time) * 0.4) * 10) / 10 + ''
    this.dict.reloadempty_time = weaponData.reloadempty_time
    this.dict.reloadempty_time_late1 = Math.round((Number(weaponData.reloadempty_time) * 0.6) * 10) / 10 + ''
    this.dict.reloadempty_time_late2 = Math.round((Number(weaponData.reloadempty_time) * 0.3) * 10) / 10 + ''
    if (weaponData.regen_ammo_refill_rate != '0') {
      this.dict.reload_enabled = '0'
    }

    let extended_mag_prefix
    switch (weaponData.ammo_pool_type) {
      case 'special':
        extended_mag_prefix = 'energy_mag_l'
        break
      case 'bullet':
        extended_mag_prefix = 'bullets_mag_l'
        break
      case 'highcal':
        extended_mag_prefix = 'highcal_mag_l'
    }

    let weapon_dict_extended_mag: Record<string, unknown> = {}
    if (weaponData.ammo_pool_type != 'shotgun') {
      weapon_dict_extended_mag = {
        [extended_mag_prefix + '1']: {
          'ammo_clip_size': weaponData.mag_l1
        },
        [extended_mag_prefix + '2']: {
          'ammo_clip_size': weaponData.mag_l2
        },
        [extended_mag_prefix + '3']: {
          'ammo_clip_size': weaponData.mag_l3
        }
      }
    }

    this.dict.Mods = {
      gold: {},
      survival_finite_ammo: {
        ammo_default_total: '180',
        ammo_stockpile_max: '180',
        ammo_no_remove_from_stockpile: '0',
        uses_ammo_pool: '1'
      },
      ...weapon_dict_extended_mag
    }

    this.dict.RUI_CrosshairData.Crosshair_1.ui = weaponData.crosshair
  }

  loadSample(weaponData: Record<string, string>): void {
    const icon = weaponData.icon
    const viewmodel = weaponData.viewmodel
    const playermodel = weaponData.playermodel

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
      ammo_pool_type: weaponData.ammo_pool_type,
      ammo_clip_size: weaponData.ammo_clip_size,
      ammo_default_total: '180',
      ammo_stockpile_max: '180',
      ammo_no_remove_from_stockpile: '1',
      ammo_per_shot: weaponData.ammo_per_shot,
      ammo_min_to_fire: weaponData.ammo_per_shot,
      uses_ammo_pool: '1',
      regen_ammo_refill_rate: weaponData.regen_ammo_refill_rate,
      reload_enabled: '1',
      reload_time: weaponData.reload_time,
      reload_time_late1: Math.round((Number(weaponData.reload_time) * 0.4) * 10) / 10 + '',
      reloadempty_time: weaponData.reloadempty_time,
      reloadempty_time_late1: Math.round((Number(weaponData.reloadempty_time) * 0.6) * 10) / 10 + '',
      reloadempty_time_late2: Math.round((Number(weaponData.reloadempty_time) * 0.3) * 10) / 10 + '',
    }
    if (weaponData.regen_ammo_refill_rate != '0') {
      weapon_dict_ammo.reload_enabled = '0'
    }

    const burst_fire_count = weaponData.burst_fire_count == '1' ? '0' : weaponData.burst_fire_count

    const weapon_dict_data = {
      printname: weaponData.printname,
      shortprintname: weaponData.shortprintname,
      description: weaponData.description,
      longdesc: weaponData.description,

      menu_icon: 'rui/weapon_icons/r5/weapon_' + icon,
      hud_icon: 'rui/weapon_icons/r5/weapon_' + icon,
      viewmodel: 'mdl/weapons/' + viewmodel_path + '/ptpov_' + viewmodel + '.rmdl',
      playermodel: 'mdl/weapons/' + playermodel_path + '/w_' + playermodel + '.rmdl',

      weapon_type_flags: 'WPT_PRIMARY',
      damage_type: 'bullet',
      damage_near_value: weaponData.damage_value,
      damage_far_value: weaponData.damage_value,
      damage_very_far_value: weaponData.damage_value,
      allow_headshots: '1',
      damage_headshot_scale: weaponData.damage_headshot_scale,

      projectile_launch_speed: weaponData.projectile_launch_speed,
      projectilemodel: weaponData.projectilemodel,
      projectile_trail_effect_0: weaponData.projectile_trail_effect_0,

      fire_mode: 'automatic',
      is_semi_auto: weaponData.is_semi_auto,
      fire_rate: weaponData.fire_rate,
      burst_fire_count: burst_fire_count,
      burst_fire_delay: weaponData.burst_fire_delay,

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

      ...weapon_dict_ammo,

      active_crosshair_count: '1',
      rui_crosshair_index: '0',
    }

    let extended_mag_prefix
    switch (weaponData.ammo_pool_type) {
      case 'special':
        extended_mag_prefix = 'energy_mag_l'
        break
      case 'bullet':
        extended_mag_prefix = 'bullets_mag_l'
        break
      case 'highcal':
        extended_mag_prefix = 'highcal_mag_l'
    }

    let weapon_dict_extended_mag: Record<string, unknown> = {}
    if (weaponData.ammo_pool_type != 'shotgun') {
      weapon_dict_extended_mag = {
        [extended_mag_prefix + '1']: {
          'ammo_clip_size': weaponData.mag_l1
        },
        __sep21: '--- separator ---',
        [extended_mag_prefix + '2']: {
          'ammo_clip_size': weaponData.mag_l2
        },
        __sep22: '--- separator ---',
        [extended_mag_prefix + '3']: {
          'ammo_clip_size': weaponData.mag_l3
        }
      }
    }

    this.dict = {
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
          ui: weaponData.crosshair,
          base_spread: '0.0'
        }
      }
    }
  }

  get(key: string): string | ModsData | CrosshairData | undefined {
    if (key in this.dict) {
      return this.dict[key]
    } else {
      return undefined
    }
  }

  getModel(key: string): string {
    const modelpath = this.get(key)
    if (typeof modelpath === 'string') {
      return (modelpath.match(/[a-zA-Z0-9_]+\.rmdl/) + '').replace('.rmdl', '').replace(/ptpov_|w_/, '')
    } else {
      throw TypeError
    }
  }

  getExtendedMag(level: 'l1' | 'l2' | 'l3'): string | undefined {
    if (this.dict.ammo_pool_type === 'shotgun') {
      return undefined
    }

    const ammoType = this.ammoPool2ExtendedAmmo(this.dict.ammo_pool_type)
    if (`${ammoType}_mag_${level}` in this.dict.Mods) {
      const extendedMag = this.dict.Mods[`${ammoType}_mag_${level}`] as ModsExtendedMag
      return extendedMag.ammo_clip_size
    } else {
      return undefined
    }
  }

  getCrosshair(): string | undefined {
    if (isCrosshairData(this.dict.RUI_CrosshairData)) {
      return this.dict.RUI_CrosshairData.Crosshair_1.ui
    } else {
      return undefined
    }
  }

  private ammoPool2ExtendedAmmo(ammo: string): string {
    switch (ammo) {
      case 'special':
        return 'energy'
      case 'bullet':
        return 'bullets'
      case 'highcal':
        return 'highcal'
      default:
        throw TypeError
    }
  }

  export(depth = 0, dict: any = this.dict): string {
    let r5rtxt = ''
    for(const k of Object.keys(dict)) {
      if (typeof dict[k] !== 'string') {
        r5rtxt += (
          '\t'.repeat(depth) + '"' + k + '"\n' + '\t'.repeat(depth) + '{\n'
          + this.export(depth + 1, dict[k])
          + '\t'.repeat(depth) + '}\n'
        )
      } else {
        if (dict[k] == '--- separator ---' && k.substring(0, 5) == '__sep') {
          r5rtxt += '\n'
        } else {
          r5rtxt += '\t'.repeat(depth) + '"' + k + '"\t\t"' + dict[k] + '"\n'
        }
      }
    }
    return r5rtxt
  }
}