# Exercise 12 - Find the Oldest

Given an array of objects representing people with a birth and death year, return the oldest person.

## Hints
- You should return the whole person object, but the tests mostly just check to make sure the name is correct.
- this can be done with a couple of chained array methods, or by using `reduce`.
- One of the tests checks for people with no death-date.. use JavaScript's Date function to get their age as of today.




# How to find the smallest age ?  
`[{name, dob, dod}, {name, dob}, {name, dob, dod}]`
- look at each element. 
- and calculate dod - dob
  - if dod doesn't exist. then calc 2022-dob
- write each number somewhere. 
- look at the calculated ages. and get the index of the smallest 
- return the object in the array with the index of the smallest