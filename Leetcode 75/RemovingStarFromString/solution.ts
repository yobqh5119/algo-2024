const removingStarFromString = (s:string): string => {
  const stack: string[] = [];

  for (let char of s) {
    if (char !== '*') {
      stack.push(char)
    } else {
      stack.length > 0 ? stack.pop() : null
    }
  }

  return stack.join('')
}