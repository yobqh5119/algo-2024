const stringCompression = (chars: string[]): number => {
  let writeIndex = 0
  let readIndex = 0

  while (readIndex < chars.length) {
    // define count and currentChar variable
    let currentChar = chars[readIndex]
    let count = 0

    // Find every repeated letters
    while (currentChar === chars[readIndex]) {
      readIndex++
      count++
    }

    // mutate the chars array as necessary
    chars[writeIndex++] = currentChar

    // anywhere the length of the repeated count is greater than 1, we need to put actual count number in str
    if (count > 1) {
      for (let num of count.toString()) {
        chars[writeIndex++] = num
      }
    }
  }
  return writeIndex
}