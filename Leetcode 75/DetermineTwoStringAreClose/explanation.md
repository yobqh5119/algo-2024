# Solution
  - We will adopt map/hashing mechanism here to resolve this problem. The key to solving this problem is making sure that the length of `str1` and `str2` always remain the same. 
  - Another key thing to remember is that in order for str1 and str2 to be close with one another, they have to share the same amount of letters and same amount of repeated letters for each 
  - We can approach this problem by first making couple initial conditions which will return out `false`
    - `if (str1.length !== str2.length) return false`

  - Then we can create a `Map` variable in JS, which represents key,value pair variable where keys are always unique.
    - `Map` comes with built in helpful method such as `size`, `set` and `get`
  - We can create two for loops to first create our Map variables for both of the strings where the key will represent the character in the string and the value will be the amount of times it repeats
  - We will then check if the size of the Map variables aren't equivalent by doing `str1Map.size !== str2map.size`. If this returns true, we will return out false for the whole function
  - Then, we will make sure each char in `str1Map.keys()` are in `str2Map`
  - Then finally we will sort out the values of both `str1Map` and `str2Map`, and then using `every` method, we can check to make sure every value in `str1Map.values()` are identical in `str2Map.values()`

# Big O
  - Space: O(n), where n represents the maps being created with n key value pairs and frequency arrays also having the length of n 
  - Time: O(n log n), where iterating through the keys is O(k) operation where k at most will be 26 length, sorting will be O(n log n). 