const productOfAllNumber = (numbers: number[]): number[] => {
  const length = numbers.length;
  const result = new Array(length).fill(1)

  let leftProduct = 1;
  for (let i = 0; i < length; i++) {
    result[i] = leftProduct;
    leftProduct *= numbers[i]
  }

  let rightProduct = 1;
  for (let i = length - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= numbers[i]
  }

  return result;
}