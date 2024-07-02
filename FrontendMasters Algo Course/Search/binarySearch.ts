const binarySearch = (haystack:number[], needle:number): boolean => {
  let low = 0
  let high = haystack.length
  
  while(low < high) {
    const mediumIndex = Math.floor(low + (high+low)/2)
    const value = haystack[mediumIndex]

    if (value > needle){
      high = mediumIndex
    } else if (value < needle) {
      low = mediumIndex+1
    } else {
      return true
    }
  }
  return false
}