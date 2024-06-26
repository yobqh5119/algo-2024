# Solution
  - This problem can be solved with two pointer approach to calculate the area of the container represented by the number assigned in each of the pointer indexes.
    - the two pointers will be left and right index where left will be starting from 0, and right will be set to array.length - 1
  - The key to solving this problem is just remembering to compare the newly calculated area value with the `maxValue` and moving the pointers to whichever index has smaller height 

# Big O
  - Space will be O(1) as we are always using constant amount of space
  - Time will be O(n), where n will be the length of the array we loop through

