# Solution
  - We can approach this problem using queue. Where we will have queue for both `Radiant` and `Dire`. We will store the index of each `Radiant` and `Dire` to compare it against
  - First for loop will be used to fill up both `radiantQue` and `direQue`
  - Second loop can be created using while loop where condition will be `radiantQue.length > 0 && direQue.length > 0`
    - we will instantiate `r` and `d` variable by getting the first item in both queue using `.shift()`
    - then we can compare `r` and `d` and if `r > d` we will push `r` back to `radiantQue + lengthOfString`. And do the same for `d` as well.

# Big O
  - The space complexity will be O(n), where n will be the amount of strings we will create the queue for
  - Time complexity will be O(n) as well since we will be looping through the string elements.