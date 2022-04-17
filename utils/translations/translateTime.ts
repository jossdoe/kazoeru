const hours = {
  0: 'れいじ',
  1: 'いちじ',
  2: 'にじ',
  3: 'さんじ',
  4: 'よじ',
  5: 'ごじ',
  6: 'ろくじ',
  7: 'しちじ',
  8: 'はちじ',
  9: 'くじ',
  10: 'じゅうじ',
  11: 'じゅういちじ',
  12: 'じゅうにじ',
  13: 'じゅうさんじ',
  14: 'じゅうよじ',
  15: 'じゅうごじ',
  16: 'じゅうろくじ',
  17: 'じゅうしちじ',
  18: 'じゅうはちじ',
  19: 'じゅうくじ',
  20: 'にじゅうじ',
  21: 'にじゅういちじ',
  22: 'にじゅうにじ',
  23: 'にじゅうさんじ',
}

type TranslateTimeArgs = {
  hour: number
  minutes: number
}

// always returns a tuple:
// 1. the reading in 24-hour-format
// 2. the reading in 12-hour-format
function translateTime({hour, minutes}: TranslateTimeArgs): string[] {
  const solutions = []
  
  // solution 1: use 24 hours
  if (minutes === 30) solutions.push(`${hours[hour]}はん`)
  else solutions.push(hours[hour])

  // solution 2: use 12 hours
  const daytime = hour < 12 ? 'ごぜん' : 'ごご'
  const reducedHour = hour > 12 ? hour - 12 : hour
  if (minutes === 30) solutions.push(`${daytime}${hours[reducedHour]}はん`)
  else solutions.push(`${daytime}${hours[reducedHour]}`)
  
  // we want to prefer 12 hours over 24 hours
  return solutions.reverse()
}

export { translateTime }