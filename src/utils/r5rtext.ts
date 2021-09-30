export function object2text(dict: Record<string, unknown>, prefix: string, suffix: string): string {
  const weapon: string = JSON.stringify(dict)

  let weaponText = prefix + '\n' + weapon
  weaponText = weaponText.replaceAll('":', '"  ')
    .replaceAll('","', '"\n"')
    .replaceAll('\n{', '\n{\n')
    .slice(0, -1)
  weaponText += suffix + '\n}'

  return weaponText
}