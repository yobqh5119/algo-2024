const kSumPairs = (nums: number[], k: number): number => {
  const frequencyMap: {[key: number]: number} = {}
  let operations = 0;

  // creating the hash map 
  for (let num of nums) {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1
  }

  // identifying the # of operations
  for (let num of nums) {
    const complement = k - num

    if (frequencyMap[complement] && frequencyMap[num]) {
      if (num !== complement || frequencyMap[complement] > 1) {
        frequencyMap[complement]--
        frequencyMap[num]--
        operations++
      }
    }
  }

  return operations
}