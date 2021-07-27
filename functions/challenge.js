/* 
    CHALLENGE

    Write a for loop that counts from 1 to 100
    - for numbers that are evenly divisible by 3, prin: 'FIZZ'
    - for numbers that are evenly divisible by 5, print: 'BUZZ'
    - for numbers that are evenly divisible by BOTH 3 and 5, print: 'FIZZ BIZZ'

    reminder: a number is evenly divisible by another number when the remanider is 0 

*/

for( let i = 1; i <= 100; i++){
    console.log(i);
    if(i % 3 == 0)
    console.log('FIZZ');
    if(i % 5 == 0)
    console.log('BUZZ')
}

Challenge #1

Write a function that accepts two names as parameters, and then prints the full name to the console.



Challenge #2

Write a program that prints all numbers from 0-100.
for multiples of 6, instead of the number, print 'Fizz'
for multiples of 8, instead of the number, print 'Buzz'
for multiples of 6 AND 8, instead of the number, print 'Fizz Buzz'

Challenge #3

Write a function called findPerimeter() that accepts 2 parameters called: "length" and "width".
The function should return an interpolated string of "True.  The perimeter is ___" if the perimeter is over 20.
The function should return an interpolated string of "False.  The perimeter is ___" if the perimeter is under 20.  
This function should be active.

Challenge #4

Create an object literal called "library".
The library object will contain 3 properties: name, address, sections.
Name and address will both hold values that are strings.  This information can be fabricated.
Sections will be an object that will store a property called "collections", which is an array of more objects.  You should include at least 2 objects inside the collections array.
the objects stored in the collections array will hold properties of classification, count, and aisle.
both the classification and aisle properties should hold strings as values, and count should hold a value that is a number.


