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

function getRandomKaomoji(current?: string) {
  const newKaomoji = kaomoji[Math.floor(Math.random() * kaomoji.length)]

  if (current === newKaomoji) return getRandomKaomoji(newKaomoji)
  return newKaomoji
}

export { getRandomKaomoji }