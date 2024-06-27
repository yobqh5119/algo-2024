# Solution
  - This solution is using the sliding window technique under the hood. 
  - The first step into solving this problem is getting the initial current sum value given k length of subarray.
    - We can acheive this by using slice to create a new array instance up to `k` length and then using the `reduce` function to get the sum total.
  - We will then need to instantiate a variable for `maxSum` which will be set to `currentSum` initially.
  - A for loop will be created to carry out the sliding window technique, where `i` will be set to `k`.
    - Sliding window is basically subtracting the first number and adding the second number which will look like as such
      - `currentSum = currentSum - numbers[i-k] + numbers[i]`

# Big O
  - The space will be O(1), where we will just take constant amount of space
  - The time will be 0(n), where n will represent the amount of numbers in the given array we are looping through
  