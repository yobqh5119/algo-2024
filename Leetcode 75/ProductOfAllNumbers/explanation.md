# Solution
 - The key to solving this problem is first getting the product of all the left number and then calculating the product of all the right number
 - The solution will require a new set of Arrays which we could create using `new Array(length of array).fill(1)
   - this will create an array of equal length as whatever length we specify on the parameter, and fill all of the values with 1
 - Then we will need to instantiate a variable leftProduct value and then create a loop to loop through all of left product sum
   - within for loop, we will first fill the num[i] as equal to the leftProduct
   - then leftProduct will be re-calculated using leftProduct *= num[i]
 - Then we will need to instantiate a variable for rightProduct
   - the for loop will start from the opposite end which would be num.length - 1 and it will decrement by 1 until i <= 0
   - within the rightProduct for loop, we will carry out similar logic as calculating the leftProduct, but here we will actually multiply the rightProduct right away as such
     - result[i] *= rightProduct 
     - rightProduct *= num[i]
     - * the reason why we do this is because we've already have the product of all the left numbers from above in our results array.
 - return out the result's array

# Big O
  - Space will be O(n) where it will be the array we created - results
  - Time Complexity will also be O(n) where n is the length of the array of numbers
