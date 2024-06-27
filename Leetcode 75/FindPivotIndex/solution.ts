 const findPivotIndex = (nums: number[]): number => {
  let totalSum = nums.reduce((sum, number) => sum + number, 0)
  let leftSum = 0

  for ( let i = 0; i < nums.length; i ++) {
    if (leftSum === totalSum - leftSum - nums[i]) {
      return i
    }
    leftSum += nums[i]
  }

  return -1
 }