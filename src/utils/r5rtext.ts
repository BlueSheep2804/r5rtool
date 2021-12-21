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

// eslint-disable-next-line
export function generateR5RWeapon(dict: any, depth = 0): string {
  let r5rtxt = ''
  for(const k of Object.keys(dict)) {
    if (Object.prototype.toString.call(dict[k]) == '[object Object]') {
      r5rtxt += (
        '\t'.repeat(depth) + '"' + k + '"\n' + '\t'.repeat(depth) + '{\n'
        + generateR5RWeapon(dict[k], depth + 1)
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
}