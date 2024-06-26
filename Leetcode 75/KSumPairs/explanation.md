# Solution
 - Solving this problem will require creating a hash map to identify the number of operations 
 - We will need variable to keep count of number of operation completed and an empty object that will act as our hashmap
 - First for loop iteration will be made to create our hash map containing all of the number and amount of frequency per number
 - Second for loop iteration will be made to actually identify number of operations that can be made
   - caviet will be remembering that we will only make changes to our pointers when `number !== complement` or `frequencyMap[compliment] > 1` to account for cases when compliment numbers are equivalent to the number iteration

# Big O
  - Space will be O(1), where we will only take constant amount of space
  - Time will be O(n), since we will have two iteration of the given array, but we will be dropping the constant so it will still be O(n).