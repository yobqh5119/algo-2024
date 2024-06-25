# Solution
  - One of the requirements for solving this problem is that it needs to be solved with O(1) space, which means we can only have primitive variables stored.
  - Approach to solving this problem is by instantiating two values `first` and `second`, and setting them as `Infinity`
  - Then we can loop through each number in the array of numbers that we receive as arguments using `for (const of arrayName)`
  - Then we will have three conditionals, and if the conditional is able to make it to the last `else` case we will return true
    - `if (num <= first) else if (num <= second) else {return true }`

# Big O
  - The solution here will be O(1), because we are only storing 2 primitive values
  - Time complexity is O(n) where n is the length of the given array