interface R5RWeaponDict {
  [key: string]: string | ModsData | CrosshairData;
  printname: string;
  ammo_pool_type: string;
  damage_near_value: string;
  damage_far_value: string;
  damage_very_far_value: string;
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

export class R5RWeapon {
  dict: R5RWeaponDict
  base = ''
  _id = ''
  _damage_value = ''

  constructor() {
    this.dict = {
      printname: '',
      ammo_pool_type: '',
      damage_near_value: '',
      damage_far_value: '',
      damage_very_far_value: '',
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

  loadSample(): void {
    const weapon_dict_data = {
      printname: '',
      shortprintname: '',
      description: '',
      longdesc: '',

      menu_icon: 'rui/weapon_icons/r5/weapon_r97',
      hud_icon: 'rui/weapon_icons/r5/weapon_r97',
      viewmodel: 'mdl/weapons/r97/ptpov_r97.rmdl',
      playermodel: 'mdl/weapons/r97/w_r97.rmdl',

      weapon_type_flags: 'WPT_PRIMARY',
      damage_type: 'bullet',
      damage_near_value: '12',
      damage_far_value: '12',
      damage_very_far_value: '12',
      allow_headshots: '1',
      damage_headshot_scale: '1.0',

      projectile_launch_speed: '28000',
      projectilemodel: 'mdl/dev/empty_model.rmdl',
      projectile_trail_effect_0: 'P_tracer_projectile_smg',

      fire_mode: 'automatic',
      is_semi_auto: '0',
      fire_rate: '12',
      burst_fire_count: '0',
      burst_fire_delay: '0.3',

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

      ammo_pool_type: 'bullet',
      ammo_clip_size: '18',
      ammo_default_total: '180',
      ammo_stockpile_max: '180',
      ammo_no_remove_from_stockpile: '1',
      ammo_per_shot: '1',
      ammo_min_to_fire: '1',
      uses_ammo_pool: '1',
      regen_ammo_refill_rate: '0',
      reload_enabled: '1',
      reload_time: '1.5',
      reload_time_late1: '0.6',
      reloadempty_time: '3.2',
      reloadempty_time_late1: '1.9',
      reloadempty_time_late2: '0.9',

      active_crosshair_count: '1',
      rui_crosshair_index: '0',
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
        bullets_mag_l1: {
          ammo_clip_size: '20'
        },
        bullets_mag_l2: {
          ammo_clip_size: '22'
        },
        bullets_mag_l3: {
          ammo_clip_size: '24'
        }
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
          ui: 'ui/crosshair_plus',
          base_spread: '0.0'
        }
      }
    }
  }

  get(key: string): string | ModsData | CrosshairData | undefined {
    if (key === '^id') {
      return this.id
    }
    if (key === '^damage_value') {
      return this.damage_value
    }
    if (key.substring(0, 5) === '^mag_') {
      return this.getExtendedMag(key.substring(5, 7))
    }
    if (key === '^crosshair') {
      return this.crosshair
    }

    if (key in this.dict) {
      return this.dict[key]
    } else {
      return undefined
    }
  }

  set(key: string, value: string): void {
    if (key === '^id') {
      this.id = value
      return
    }
    if (key === '^damage_value') {
      this.damage_value = value
    }
    if (key.substring(0, 5) === '^mag_') {
      this.setExtendedMag(key.substring(5, 7), value)
      return
    }
    if (key === '^crosshair') {
      this.crosshair = value  // vinson
      return
    }
    this.dict[key] = value
  }

  get id(): string {
    return this._id
  }

  set id(value: string) {
    this._id = value
  }

  get damage_value(): string {
    if (this._damage_value === '') {
      this._damage_value = this.dict.damage_near_value
    }
    return this._damage_value
  }

  set damage_value(value: string) {
    this._damage_value = value
    this.dict.damage_near_value = value
    this.dict.damage_far_value = value
    this.dict.damage_very_far_value = value
  }

  getExtendedMag(level: string): string | undefined {
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

  setExtendedMag(level: string, value: string): void {
    const ammoType = this.ammoPool2ExtendedAmmo(this.dict.ammo_pool_type)
    if (`${ammoType}_mag_${level}` in this.dict.Mods) {
      const extendedMag = this.dict.Mods[`${ammoType}_mag_${level}`] as ModsExtendedMag
      extendedMag.ammo_clip_size = value
    } else {
      return undefined
    }
  }

  get crosshair(): string {
    return this.dict.RUI_CrosshairData.Crosshair_1.ui
  }

  set crosshair(value: string) {
    this.dict.RUI_CrosshairData.Crosshair_1.ui = value
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