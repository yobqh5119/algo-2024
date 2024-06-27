# Solution
  - We can solve this problem by utilizing hashmap to keep count of the repeated count of each number in the given number array
  - We have the option of choosing to use JS `object` or `map`. `Map` in JS is very similar to object in JavaScript, where it takes in key value pair but the keys are always unique.
    - Some helpful function to remember for `Map` variables includes... `.size` `.values() - this will return all the values in the given map`
    - For my solution I will stick to using `object` to practice more on just objects.
  - First, we will need to create a hash map that keeps track of the number and the repeated count for each of the number
  - Then we will instantiate a new variable called `uniqueKeys` which will represent each occurence of repeated number. 
    - We can create this using JS `new Set` where it will take in the argument `new Set(Object.values(countMap))`. 
  - Then we can return out the comparison between `uniqueKeys.size() === Object.keys(countMap).length`
    - `.size` is a built in method for the `Set` variables in JS, where it will return out the length of the set
    - `Object.keys` will return an array containing all the keys in the given Object

# Big O 
  - Time will be O(n), since we are actually creating an array that might potentially contain all unique keys - number
  - Complexity will be O(n)