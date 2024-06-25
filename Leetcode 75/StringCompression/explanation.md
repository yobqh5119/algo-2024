# Solution
  - One thing to keep in mind as we are solving this question is that we are mutating the array that we are getting as an argument as opposed to creating a new array. This will make sure that our solution is O(1) space.
  - Approach to solving this problem is by creating two pointers - writeIndex and readIndex
    - we will use the readIndex to loop through the array of strings we receive to locate where duplicate letters are 
    - we will use count variable inside of the loop to keep count of repeated letters
    - we will use the writeIndex to write to the array of string we receive either the repeated count or the letter we are processing
    - we will generate another for loop to account for any cases where the count is two digit number
  - Return out the writeIndex which will represent the length of a "new array"
- * new syntax learned
  - when you do chars[writeIndex++], this will first mutate the chars array in the current writeIndex and then it will increment writeIndex by 1.

# Big O
  - Space will be O(1), since we aren't creating any new array
  - Time will be O(n), where n will be the length of the array we process through. 