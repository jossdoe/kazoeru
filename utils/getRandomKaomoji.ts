const kaomoji: string[] = [
  '٩(◕‿◕｡)۶',
  '(｡･ω･｡)',
  'ヽ(*・ω・)ﾉ',
  '(◕‿◕)',
  '٩(◕‿◕)۶',
  '\\(^ヮ^)/',
  '٩(｡•́‿•̀｡)۶',
  '(￢‿￢ )',
  '(´｡• ᵕ •｡`)',
  '(.❛ ᴗ ❛.)',
  '( ˙꒳​˙ )',
  '(^０^)ノ',
  '|･ω･)',
  '|ω･)ﾉ',
]

function getRandomKaomoji() {
  return kaomoji[Math.floor(Math.random() * kaomoji.length)]
}

export { getRandomKaomoji }