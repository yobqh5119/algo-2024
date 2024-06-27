const maxAverageSubArray = (numbers: number[], k:number):number => {
  let currentSum = numbers.slice(0,k).reduce((sum, number) => sum + number, 0)
  let maxSum = currentSum
  for (let i = k; i < numbers.length; i++) {
    currentSum = currentSum - numbers[i-k] + numbers[i]
    maxSum = Math.max(currentSum, maxSum)
  }

  return maxSum / k

}