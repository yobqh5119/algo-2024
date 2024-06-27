# Solution
  - This problem can be solved utilizing hash map. Hash map in JS can be either created using Set or Objects. 
  - Here we will use `new Set` in JS to create set for each of the arrays
  - Then we will create a new array by filtering out any of the numbers included in the opposite array using the filter method
  - Then we can just return out the two arrays we created that represents `distinctArraySet`

# Big O
  - Space will be O(n+m), because we are creating two unique arrays 
  - Time will be O(n+m) as well because of the creation of the two sets and the filter that will be ran on both sets. 

