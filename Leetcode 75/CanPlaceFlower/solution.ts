const canPlaceFlowers = (flowerbed: number[], flowers:number):boolean => {
  let count = 0
  const size = flowerbed.length

  for (let i = 0; i < size; i++) {
    if (i===0) {
      let leftEmpty = i == 0 || flowerbed[i-1] === 0
      let rightEmpty = i == size - 1 || flowerbed[i+1] === 0

      if (leftEmpty && rightEmpty) {
        flowerbed[i] = 1
        count++
      } 
    }
  }

  return count >= flowers
}