# solution
- key is turning the string received into an array since strings are immutable 
  - s.split('') - to create an array and s.join('') to turn it into a string from an array
- creating a set for the voewls for easier check process  
  - new Set(str) - set.has() returns a boolean if its found in the set
- having two pointers left and right and iterating through both left and right pointers while left < right
  - inside of the while loop, we should have nested while loops to search each left and right values separetely until we find a voewl given the left and right pointers
  - before creating the swap, since we were moving the left and right pointers, create an if statement to check if our left pointer and right pointer haven't crossed each other.

# Big O
- Space complexity is O(n) - where n is the length of the char array created
- time complexity is O(n) - where n is the size of the char array that we are iterating through 
