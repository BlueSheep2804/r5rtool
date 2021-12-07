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

export function importR5RWeapon(kvfile: string, searchkey: string): string {
  //kvfile.indexOf(searchkey)
  const re = new RegExp(`"?${searchkey}"?[\t ]+"?.+"?`)
  const replacere = new RegExp(`"?${searchkey}"?[\t ]+`)
  const reResult = re.exec(kvfile)
  if (reResult) {
    console.log(`${searchkey}: ${(reResult + '').replace(replacere, '').replaceAll('"', '')}`)
    return (reResult + '').replace(replacere, '').replaceAll('"', '')
  } else {
    return ''
  }
}

export function modelname(modelpath: string): string {
  return (modelpath.match(/[a-zA-Z0-9_]+\.rmdl/) + '').replace('.rmdl', '').replace(/ptpov_|w_/, '')
}