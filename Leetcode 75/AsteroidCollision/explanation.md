# Solution
  - This problem can be solved by using stack approach. 
    - We will create our stack using an `Array`, and we will add items to the array only when `char !== '*'`
    - Then we can simply remove the last item from the `Array` when the `Array.length > 0` when `char === '*'`

# Big O
  - Space will be O(n) operation, where n will be the length of the str that is passed that we will have to create an array for
  - Time will be O(n), where n will be the length of str as well, but each operation will be O(1) - push/pop operation