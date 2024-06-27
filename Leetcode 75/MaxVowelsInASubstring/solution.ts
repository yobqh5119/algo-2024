const maxVowelsInSubstring = (letter: string, k:number):number => {
  const vowels = new Set(['a','e','i','o','u'])
  let maxVowels = 0
  let currentVowels = 0

  for (let i = 0; i < k; i++) {
    if (vowels.has(letter[i])) {
      currentVowels++
    }
  }

  maxVowels = currentVowels

  for (let j = k; j < letter.length; j++) {
    if (vowels.has(letter[j-k])) {
      currentVowels--
    }

    if (vowels.has(letter[j])) {
      currentVowels++
    }
    maxVowels = Math.max(maxVowels, currentVowels)
  }
  
  return maxVowels
}