const singles = {
  1: "いっさい",
  2: "にさい",
  3: "さんさい",
  4: "よんさい",
  5: "ごさい",
  6: "ろくさい",
  7: "ななさい",
  8: "はっさい",
  9: "きゅうさい",
}

const exceptions = {
  10: ["じゅっさい", "じっさい"],
  20: ["はたち", "にじゅっさい", "にじっさい"],
}

const tensPrefixes = {
  1: "",
  2: "に",
  3: "さん",
  4: "よん",
  5: "ごじ",
  6: "ろく",
  7: "なな",
  8: "はち",
  9: "きゅう",
}

function translateAge(ageNum: number): string[] {
  if (ageNum < 10) return [singles[ageNum]]
  if (ageNum === 10) return exceptions[10]
  if (ageNum === 20) return exceptions[20]

  const solutions = []

  const ageString = ageNum.toString()
  const tensDigit = ageString[0]
  const singlesDigit = ageString[1]

  if (singlesDigit === "0") {
    exceptions[10].forEach((tensSuffix) => {
      solutions.push(`${tensPrefixes[tensDigit]}${tensSuffix}`)
    })
  } else {
    solutions.push(`${tensPrefixes[tensDigit]}じゅう${singles[singlesDigit]}`)
  }

  return solutions
}

export { translateAge }
