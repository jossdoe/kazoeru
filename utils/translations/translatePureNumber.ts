const singles = {
  0: ["れい", "ゼロ", "ぜろ"],
  1: ["いち"],
  2: ["に"],
  3: ["さん"],
  4: ["よん", "し"],
  5: ["ご"],
  6: ["ろく"],
  7: ["なな", "しち"],
  8: ["はち"],
  9: ["きゅう", "く"],
}

const tens = {
  0: "",
  1: "じゅう",
  2: "にじゅう",
  3: "さんじゅう",
  4: "よんじゅう",
  5: "ごじゅう",
  6: "ろくじゅう",
  7: "ななじゅう",
  8: "はちじゅう",
  9: "きゅうじゅう",
}

const hundreds = {
  0: "",
  1: "ひゃく",
  2: "にひゃく",
  3: "さんびゃく",
  4: "よんひゃく",
  5: "ごひゃく",
  6: "ろっぴゃく",
  7: "ななひゃく",
  8: "はっぴゃく",
  9: "きゅうひゃく",
}

const thousands = {
  0: "",
  1: "せん",
  2: "にせん",
  3: "さんぜん",
  4: "よんせん",
  5: "ごせん",
  6: "ろくせん",
  7: "ななせん",
  8: "はっせん",
  9: "きゅうせん",
}

function translatePureNumber(input: number): string[] {
  const inputArray = input.toString().split("")
  const reversedInputArray = [...inputArray].reverse()

  // we start from the end of the number and work our way to the front
  // that way we always have the same translation order, no matter how many digits the number has
  return reversedInputArray.reduce((acc, curr, index) => {
    let solutionAccs = [...acc]

    // singles
    if (index === 0) {
      if (curr === "0" && inputArray.length > 1) {
        return [""]
      } else {
        solutionAccs.push(...singles[curr])
      }
    }

    // tens
    if (index === 1) {
      solutionAccs = solutionAccs.map((solution) => {
        return `${tens[curr]}${solution}`
      })
    }

    // hundreds
    if (index === 2) {
      solutionAccs = solutionAccs.map((solution) => {
        return `${hundreds[curr]}${solution}`
      })
    }

    // thousands
    if (index === 3) {
      solutionAccs = solutionAccs.map((solution) => {
        return `${thousands[curr]}${solution}`
      })
    }

    // man
    if (index === 4) {
      if (curr === "0") {
        return [""]
      } else {
        solutionAccs = solutionAccs.map((solution) => {
          return `${singles[curr][0]}まん${solution}`
        })
      }
    }

    // ten (>man)
    if (index === 5) {
      solutionAccs = solutionAccs.map((solution) => {
        return `${tens[curr]}${solution}`
      })
    }

    return solutionAccs
  }, [])
}

export { translatePureNumber }
