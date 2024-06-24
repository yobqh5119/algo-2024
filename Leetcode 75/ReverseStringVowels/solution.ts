const reverseVowels = (s: string):string => {
  const voewls = new Set(['a','e','i','o','u', 'A', 'E', 'I','O','U'])
  const chars = s.split('')
  let left = 0
  let right = chars.length - 1

  while (left < right) {
    // find a vowel on the left pointer
    if (!voewls.has(chars[left])) {
      left++
    }
    if (!voewls.has(chars[right])) {
      right--
    }
    if (voewls.has(chars[left]) && voewls.has(chars[right])) {
      [chars[left], chars[right]] = [chars[right], chars[left]]
      left++
      right--
    }
  }

  return chars.join('')
}