const mostWater = (height: number[]): number => {
  let left = 0
  let right = height.length - 1
  let maxArea = -Infinity

  while (left < right) {
    // calculate the area - height and width
    const width = right - left
    const containerHeight = Math.min(height[left], height[right])
    const area = width * containerHeight

    maxArea = Math.max(maxArea, area)

    // move the pointer
    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }

  return maxArea
}