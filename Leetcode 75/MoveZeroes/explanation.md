# Solution
  - Requirement for solving this problem is keeping the solution O(1) space, which means we will mutate the array argument we get from our function
  - Two pointer solution is the right approach as we are trying to move all the zeroes to the back of the array. 
    - We can have one pointer just moving forward - regular for loop
    - Then we can have another pointer which will represent - NonZeroIndex, which will be the index in which our non zero index number will be moved into
  - The condition we are checking for in our for loop is whenever the `i` is non zero, we will swap out the position of `i` with `nonZeroIndex` and we will increment nonZeroIndex by 1

# Big O
  - The solution will be O(1) space as mentioned
  - Time complexity will be O(n), where n is the length of the array 