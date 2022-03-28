import axios from 'axios'

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
  [key: string]: Record<string, never> | Record<string, unknown> | undefined
  gold: Record<string, never>;
  survival_finite_ammo?: Record<string, unknown>;
}

interface CrosshairData {
  [key: string]: {ui: string, base_spread: string} | Record<string, unknown>;
  DefaultArgs: Record<string, unknown>;
  Crosshair_1: {ui: string, base_spread: string};
}

export class R5RWeapon {
  dict: R5RWeaponDict
  base: string[] = []
  _id = ''
  _damage_value = ''
  _viewkick = ''

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
    this.base = []
    const baseFiles = kvfile.matchAll(/#base "(?<file>[\w]+\.txt)"/gu)
    if (baseFiles != null) {
      for (const baseFile of baseFiles) {
        if (typeof baseFile.groups === 'undefined') {
          continue
        }
        this.base.push(baseFile.groups.file)
        console.log(baseFile.groups.file)
      }
    }

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

  delete(key: string): boolean {
    let returnValue = false
    if (key === '^base') {
      this.base = []
      returnValue = true
    }
    if (key === '^id') {
      this.id = ''
      returnValue = true
    }
    if (key === '^damage_value') {
      this.damage_value = ''
      returnValue = true
    }
    if (key === '^viewkick') {
      this.viewkick = ''
      returnValue = true
    }
    if (key === '^crosshair') {
      this.crosshair = ''
      returnValue = true
    }

    return returnValue
  }

  get(key: string): string | ModsData | CrosshairData | string[] | undefined {
    if (key === '^base') {
      console.log(`[${this.base}](${this.base.length})`)
      return this.base
    }
    if (key === '^id') {
      return this.id
    }
    if (key === '^damage_value') {
      return this.damage_value
    }
    if (key === '^viewkick') {
      return this.viewkick
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

  set(key: string, value: string | string[]): void {
    if (Array.isArray(value)) {
      if (key === '^base') {
        this.base = value
        console.log(`[${this.base}](${this.base.length})`)
      }
      return
    }
    if (key === '^id') {
      this.id = value
      return
    }
    if (key === '^damage_value') {
      this.damage_value = value
    }
    if (key === '^viewkick') {
      this.viewkick = value
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

  get viewkick(): string {
    return this._viewkick
  }

  set viewkick(value: string) {
    this._viewkick = value
    axios.get(`https://raw.githubusercontent.com/Mauler125/scripts_r5/S3_N1094/weapons/mp_weapon_${value}.txt`)
    .then(response =>  {
      if (response.status === 200) {
        const weapon = new R5RWeapon()
        weapon.load(response.data)
        const viewkick_values: string[] = []
        for (const k in weapon.dict) {
          if (k.match('^viewkick')) {
            viewkick_values.push(k)
          }
        }
        for (const k of viewkick_values) {
          this.dict[k] = weapon.dict[k]
        }
      }
    })
  }

  get crosshair(): string {
    return this.dict.RUI_CrosshairData.Crosshair_1.ui
  }

  set crosshair(value: string) {
    this.dict.RUI_CrosshairData.Crosshair_1.ui = value
  }

  export(): string {
    let baseTxt = ''

    for (const base of this.base) {
      if (base !== '') {
        baseTxt += `#base "${base}"\n`
      }
    }

    baseTxt += '\n// Generation by R5RTool\n\n'

    return `${baseTxt}WeaponData\n{\n${this.exportKV(1)}}`
  }

  exportKV(depth = 0, dict: any = this.dict): string {
    let r5rtxt = ''
    for(const k of Object.keys(dict)) {
      if (typeof dict[k] !== 'string') {
        r5rtxt += (
          '\t'.repeat(depth) + '"' + k + '"\n' + '\t'.repeat(depth) + '{\n'
          + this.exportKV(depth + 1, dict[k])
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