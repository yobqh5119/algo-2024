# Solution
  - we are looping through both strings at the same time using two pointers - `sIndex` and `tIndex`
  - the key to solving this problem is just identifying if `s` is subsequence of string `t`, so we will only increment `sIndex` when the s and t are equivalent.
  - We are returning a boolean so checking whether `sIndex` is equivalent to `s.length` will suffice.

# Big O
  - space O(1) 
  - time O(n), where n is the length of the strings

# GKM (Good to keep in mind)
  - When using two pointer method and we are declaring two variables to act as pointers, while loop is a good preference to have.