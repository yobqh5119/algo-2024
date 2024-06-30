# Solution
  - Need to come back to this problem as I'm having hard time understanding how the condition `while (requests[0] < t - 3000)` is calculating the last 3000ms calls.

# Big O
  - Space will be O(n), where n could be having each call every 1 second
  - Time will be 0(1), where ping method will be called and operation of pushing/removing element from the requests array will happen at most one time.