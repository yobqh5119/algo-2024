# Solution
  - Solving this problem requires remembering that the rightSum value will be equivalent to doing `totalSum - leftSum - currentNumber[i]`. So the variable we need to keep track are `leftSum` and `totalSum`
  - Whenever the condition `leftSum === totalSum - leftSum - number[i]`, we will know that the index we are currently iterating through will be the pivot index

# Big O
  - Space will be O(1)
  - Time will be O(n)