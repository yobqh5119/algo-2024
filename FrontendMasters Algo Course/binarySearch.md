# Things to know
  - Is the list ordered? Then we can use binary search
  - binary search is O(logN) because we are getting the half of the given input each step.
  - condition wise, low is inclusive high is exclusive.

# Pseudo Code
  search(arr,low,high)
   - condition: `low < high`
   - m = Math.floor(low + (hi - low)/2)
     - prevent integer overflow and unexpected errors 
   - `m = arr[m]`
     - 3 conditions:
       - `if (m === value)`
       - `if (m > value) { high = m}`
       - `if (m < value) { low = m + 1}` 
