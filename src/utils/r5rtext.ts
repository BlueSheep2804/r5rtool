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
      r5rtxt += '\t'.repeat(depth) + '"' + k + '"\t\t"' + dict[k] + '"\n'
    }
  }
  return r5rtxt
}
