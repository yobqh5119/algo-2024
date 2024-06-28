# Solution 
  - The approach to solving this problem is using hash map. We can create hash map for the row and save each row in a `Map` variable in JS, where the key will be the string of all the numbers in the array - `.join`.
  - Then we can iterate over the `grid` to define the `col` variable as well. 
    - In order to get `col` and to compare it if its in side of the `rowMap`, we will need another nested for loop to loop through the row as well. 
    - If `col` string is included in `rowMap` we can set `count` to be `count += rowMap.get(colString) || 0` (the reason why we have `|| 0 ` opeartion is because get could return undefined)

# Big O
  -  Space will be O(n2) - when all rows are unique, we store a string representation for each row in hash map
  -  Time will be O(n2) - n is the size of the grid, and we iterate all elements twicem once for row and once for columns
