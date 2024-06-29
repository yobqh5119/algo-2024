const asteroidCollision = (asteroids: number[]): number[] => {
  const final: number[] = []

  for (let asteroid of asteroids) {
    let survived = true

    while (survived && asteroid < 0 && final.length > 0 && asteroid < final[final.length -1]) {
      survived = -asteroid > final[final.length-1]
      if (-asteroid >= final[final.length-1]) {
        final.pop()
      }
    }
    if (survived) {
      final.push(asteroid)
    }
  }

  return final
}