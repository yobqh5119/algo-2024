const reverseWords = (s:string): string => {
  const char = s.split(' ').filter(Boolean).reverse().join(' ')
  return char
}