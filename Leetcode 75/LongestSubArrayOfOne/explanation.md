# Solution
  - This problem invovles using the sliding window technique to solve the problem
  - We are setting the `left` variable and setting the `right` variable for our window inside of the for loop. We will also need `zeroCount` variable to keep track of how many `0`s are in the current loop.
  - Inside of the for loop, we will increment the `left` window and decrement the `zeroCount` if `nums[left] === 0`.
  - The key thing to remember when getting the `maxLength` is that when we do `right - left + 1`, to get the length between the right index and the left index, we need to also account for deleting one item in the array which will require `-1`. So it will actually be `right - left + 1 - 1`, which is `right - left`


# Big O
  - Space will be O(1)
  - Time will be O(n), and despite having while loop inside of our for loop, at most the while loop will run n times which will make time complexity 2n, which in Big O will be O(n).