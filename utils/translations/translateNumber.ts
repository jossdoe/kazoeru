const singles = {
  0: 'ぜろ',
  1: 'いち',
  2: 'に',
  3: 'さん',
  4: 'よん',
  5: 'ご',
  6: 'ろく',
  7: 'なな',
  8: 'はち',
  9: 'きゅう',
}

const tens = {
  0: '',
  1: 'じゅう',
  2: 'にじゅう',
  3: 'さんじゅう',
  4: 'よんじゅう',
  5: 'ごじゅう',
  6: 'ろくじゅう',
  7: 'ななじゅう',
  8: 'はちじゅう',
  9: 'きゅうじゅう',
}

const hundreds = {
  0: '',
  1: 'ひゃく',
  2: 'にひゃく',
  3: 'さんびゃく',
  4: 'よんひゃく',
  5: 'ごひゃく',
  6: 'ろっぴゃく',
  7: 'ななひゃく',
  8: 'はっぴゃく',
  9: 'きゅうひゃく',
}

const thousands = {
  0: '',
  1: 'せん',
  2: 'にせん',
  3: 'さんぜん',
  4: 'よんせん',
  5: 'ごせん',
  6: 'ろくせん',
  7: 'ななせん',
  8: 'はっせん',
  9: 'きゅうせん',
}

function translateOneDigit(
  inputString: string,
  isZeroOmitted: boolean
): string {
  const inputNumber = parseInt(inputString)

  if (isZeroOmitted && inputNumber === 0) return ''
  return singles[inputNumber]
}

function translateTwoDigits(inputString: string): string {
  const digits = inputString.split('')

  const tensDigit = digits.shift()
  const onesDigit = digits[0]

  return `${tens[tensDigit]}${translateOneDigit(onesDigit, true)}`
}

function translateThreeDigits(inputString: string): string {
  const digits = inputString.split('')

  const hundredsDigit = digits.shift()
  const rest = digits.join('')

  return `${hundreds[hundredsDigit]}${translateTwoDigits(rest)}`
}

function translateFourDigits(inputString: string): string {
  const digits = inputString.split('')

  const thousandsDigit = digits.shift()
  const rest = digits.join('')

  return `${thousands[thousandsDigit]}${translateThreeDigits(rest)}`
}

function translateFiveDigits(inputString: string): string {
  const digits = inputString.split('')

  const manDigit = digits.shift()
  const rest = digits.join('')

  if (manDigit === '0') return translateFourDigits(rest)
  return `${singles[manDigit]}まん${translateFourDigits(rest)}`
}

function translateSixDigits(inputString: string): string {
  const digits = inputString.split('')

  const manDigits = [digits.shift(), digits.shift()].join('')
  const rest = digits.join('')

  if (manDigits.charAt(0) === '0') return translateFiveDigits(rest)
  return `${translateTwoDigits(manDigits)}まん${translateFourDigits(rest)}`
}

function translateNumber(inputString: string): string {
  const inputNumber = parseInt(inputString)
  if (isNaN(inputNumber)) return ''
  if (inputNumber < 0) return ''

  if (inputString.length === 1) return translateOneDigit(inputString, false)
  if (inputString.length === 2) return translateTwoDigits(inputString)
  if (inputString.length === 3) return translateThreeDigits(inputString)
  if (inputString.length === 4) return translateFourDigits(inputString)
  if (inputString.length === 5) return translateFiveDigits(inputString)
  if (inputString.length === 6) return translateSixDigits(inputString)

  return ''
}

export { translateNumber }
