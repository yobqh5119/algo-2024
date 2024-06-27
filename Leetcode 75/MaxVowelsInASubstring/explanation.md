# Solution
  - This problem can be solved using the sliding window technique.
    - Sliding technique is a useful technique to apply to probelms that revovles around finding maximum of some continuous value with specific length variable determined.
  - For this problem, string value is passed for us to identify the max amount of vowels in a given set of strings. When trying to identify look up, creating a hash map of some sort is very useful
    - In this case we are using `new Set(['a','e','i','o','u'])` for a quick lookup
  - This is something that I keep on forgetting but in JS, we can loop through the given string like arrays, and we can also get specfic letter using the index syntax as how we do it on arrays `string[0]`
  - We will first get the initial currentVowel by looping through index of 0 to k amount of letters
  - Then second for loop will be made to carry out the sliding window technique and reset the maxVowelCount variable

# Big O
  - The space will be O(1), where we will always take constant amount of space regardless of input
  - The time complexity will be O(n), where n will represent the length of the string we will loop through