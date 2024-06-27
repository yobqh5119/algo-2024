const uniqueNumberOfOccurence = (nums: number[]): boolean => {
  let countMap: {[key: number]: number} = {}

  for (let num of nums) {
    countMap[num] = (countMap[num] || 0) + 1
  }

  const uniqueKeys = new Set(Object.values(countMap))

  return uniqueKeys.size === Object.keys(countMap).length

}