interface R5RWeaponDict {
  [key: string]: string | {} | CrosshairData;
  printname: string;
  mods: {};
  RUI_Crosshair_Data: CrosshairData;
}

interface CrosshairData {
  [key: string]: string | {};
  Crosshair_1: {ui: string};
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

  constructor(kvfile: string) {
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

  get(key: string): string | {} | undefined {
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

  getCrosshair(): string | undefined {
    if (isCrosshairData(this.dict.RUI_CrosshairData)) {
      return this.dict.RUI_CrosshairData.Crosshair_1.ui
    } else {
      return undefined
    }
  }
}