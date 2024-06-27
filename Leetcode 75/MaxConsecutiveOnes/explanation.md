# Solution 
  - This problem also invovles sliding window technique where we will create a window by ourselves and adjust when the `k` amount of swap has been reached
  - This solution takes a little different approach in that we are setting two pointers - `left` window and `right` window.
    - `left` variable will be set to 0, and `right` variable will be set inside of the for loop
  - The key to this problem is we are taking active count of `zeroCount` to identify how many `k` swaps we can do for our `0` values.
  - We need a while loop inside of our for loop to move our `left` window once `zeroCount` has exceeded `k` amount.
    - when this is the case, we will find incident when `nums[left] === 0` and first decrement `zeroCount` by one. Then we will move our `left` window amount by one
  - The bottom of the for loop will be always calculation of the `maxLength`, which will represent how many consecutive `1`s we have with `k` amount of swaps
    - It's important to remember, when working with zero index arrays and we are defining the length of given array we will always have to remember adding `1` to prevent `off-by-one error` in programming

# Big O
  - The space will be O(1)
  - Time will be O(n). Its still considered O(n) operation because even though we have a while loop running inside of our for loop, at most the while loop will run most n times, so it will still be 2n, which when we drop the constants it will be O(n) operation