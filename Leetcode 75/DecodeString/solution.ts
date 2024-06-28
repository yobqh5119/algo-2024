const decodeString = (s:string): string => {
  const countStack: number[] = []
  const stringStack: string[] = []
  let currentString = ''
  let currentCount = 0

  for (let char of s) {
    if (char >= '0' && char <= '9'){
      currentCount = currentCount * 10 + parseInt(char)
    } else if (char === '[') {
      countStack.push(currentCount)
      stringStack.push(currentString)
      currentCount = 0
      currentString = ''
    } else if (char === ']'){
      const previousString = stringStack.pop()
      const count = countStack.pop()
      currentString = previousString + currentString.repeat(count || 1)
    } else {
      currentString += char
    }
  }

  return currentString
}