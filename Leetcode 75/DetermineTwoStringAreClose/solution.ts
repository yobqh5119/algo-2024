const determineTwoStringAreClose = (str1: string, str2: string): boolean => {
  if (str1.length !== str2.length) return false

  const str1Map = new Map<string, number>()
  const str2Map = new Map<string, number>()

  for (let char of str1) {
    str1Map.set(char, (str1Map.get(char) || 0) + 1)
  }
  for (let char of str2) {
    str2Map.set(char, (str2Map.get(char) || 0) + 1)
  }
  
  if (str1Map.size !== str2Map.size) return false

  for (let char of str1Map.keys()) {
    if (!str2Map.has(char)) return false
  }

  const freq1 = [...str1Map.values()].sort((a,b) => a-b);
  const freq2 = [...str2Map.values()].sort((a,b) => a-b);

  return freq1.every((number, index) => number === freq2[index])
}