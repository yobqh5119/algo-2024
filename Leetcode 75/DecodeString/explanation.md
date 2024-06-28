# Solution
  - This problem can be solved using the stack approach as well. In order to solve this, we will need two stacks - `stringStack` and `countStack`
    - `stringStack` will be responsible for holding onto the previous string values and `countStacks` for holding on to the previous count values
  - We will also instantiate two variables for keeping count of count and strings - `currentStr` and `currentCount`
  - We can loop thorugh the `s` string value and run series of conditions based on the `char`
    - identify what to do when its a `number`
      - `if (char >= '0' && char <= '9')` - identifying number
        - we have to take into consideration of multi digit number, so we will multiply currentCount by 10
        - `parseInt()` - converts strings into integers
    - identify when we find `[`
      - when we find [, we need to push our `currentCount` to our stack as well as push our `currentString` to our each respective stacks
      - then we can reset our `currentCount` and `currentString` values
    - identify when we find `]`
      - when we find ], its time for calculation to take place. 
      - create both previousString and count variables and pop the last item in the stack array
      - calculate the new currentString which will be `currentString = previousString + currentString.repeat(count)`
        - string has a built in method in JS called repeat which will repeat the number of characters 
    - return out `currentString`

# Big O
  - The space complexity will be O(n), where we can have as 
  - The time complexity will be O(n), where n could be the possibility due to the possibility of having multiple nested brackets. 