# Solution
  - We can approach this problem using stack. Where our stack will represent the final asteroid that survived after all collision
  - We will iterate over `asteroids` prop and create a `while` loop inside the for loop to make check when `asteroid` is a `negative value`.
    - `while (survived && asteroid < 0 && final.length > 0 && final[final.length - 1] > 0)`
      - This condition checks for when survived is set to true, asteroid is a negative value, there is a item in the final stack, and also checks that the previous asteroid was a positive integer.
    - Inside of this `while` loop, we will have condition to check when `asteroid` `survived` and also if its absolute value is larger than the previous asteroid, which we will `final.pop()`

# Big O
  - Space will be O(n) in the worst case scenario
  - Time will be O(n) as well