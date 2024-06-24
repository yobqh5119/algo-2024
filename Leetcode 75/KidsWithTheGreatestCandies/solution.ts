const kidWithMaxCandy = (candies: number[], extraCandy: number): boolean[] => {
  // define which number is the greatest given the array of number
  const maxCandy = Math.max(...candies)

  // returning a boolean if given the extraCandy, the kid will have max amount of candy
  return candies.map(candy => candy+extraCandy >= maxCandy ? true : false)
}