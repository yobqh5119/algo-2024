const findDifferenceOfTwoArrays = (num1: number[], num2: number[]): number[][] => {
  const setOne = new Set(num1)
  const setTwo = new Set(num2)

  const distinctSetOne = [...setOne].filter((number) => !setTwo.has(number))
  const distinctSetTwo = [...setTwo].filter((number) => !setOne.has(number))

  return [distinctSetOne, distinctSetTwo]
}