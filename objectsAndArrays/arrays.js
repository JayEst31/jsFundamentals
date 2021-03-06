/*
- Populating and Referring
- Methods
- Length
- Interating
*/

// POPULATING and REFERRING

let list =  ['orange', 'banana', 'oreos']
console.log(list[1]);

/*
- when we call an array, we can append, or add, square brackets onto the end of the array name with the index number of the value we want to reference. This is known as SQUARE BRACKET NOTATION.
- javascript starts counting at 0, so when we console log 'list[1]' we should see 'banana'
*/

/*
    let students = {
        0: 'Evan', 
    }
*/
let students = ['Evan', 'Ricky', 'Kali', 'Richard', 'Mattew', 'Cameron', 'Phoenix', 25, true, ['Matthew', 'Shake n Bake', 'Sophie'], 15 % 5];
console.log(students[10]);
console.log(typeof students);
console.log(students instanceof Array)
// the instance operator is used to check the type of an object at run time. remember arrays are technicall objects

/*
CHALLENGE
console.log from the students array 
- the name Matthew (the first one)
- the number 25
- the phrase "Shake n Bake"
- print out 'Hello Sophie'
*/

let students = ['Evan', 'Ricky', 'Kali', 'Richard', 'Mattew', 'Cameron', 'Phoenix', 25, true, ['Matthew', 'Shake n Bake', 'Sophie'], 15 % 5];
console.log(students[4]);
console.log(students[7]);
console.log(students [9][1])
console.log(`Hello ${students[9][2]}`)


// ARRAY METHODS


// We can call on multiple different array methods that will allow us to manipulate arrays as we need to. 

let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

// Add to our array 
food.push('Pizza');

console.log('push:', food);

food.push('Pizza', 'Spring Onion');
// Remove from array

food.pop('Pizza') //this should remove the last item from the array
console.log('pop:', food)


food.shift(); //remove the first item in an array
console.log('shift:', food);

food.unshift('Chicken', 'Garlic');
console.log('unshift:', food);

food.splice(2, 1, 'Bananas') // remove and insert item(s) from an array
// (position to remove, how many to remove, what to add in that location)
console.log('splice:', food)

food.splice(1, 0, 'Ice Cream')
console.log('second splice:', food);

// LENGTH

let long = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(long.length)    // 11

let colors = ['blue', 'green', 'yellow', 'red', 'orange', 'purple'];
console.log(colors.length) // 6

/*
    ITERATING

    forEach -
    - the forEach() method executes a provided function once for each element in an array.
    - the forEach() method does the same thing as a for loop or a for of loop ----> both iterate over the properties in an array.
    - provide a callback function that has up to 3 arguments:
        1. The value.
        2. The index.
        3. The array object itself
*/

let colorList = ['magenta', 'midnight blue', 'mahogany', 'pthaleo green', 'fuscia', 'orange', 'periwinkle', 'ocre'];

for(let i = 0; i < colorList.length; i++){
    console.log(colorList[i]);
}

let colorList = ['magenta', 'midnight blue', 'mahogany', 'pthaleo green', 'fuscia', 'orange', 'periwinkle', 'ocre'];

colorList.forEach(
    // callback function: A function that is either called or passed as a parameter to another function
    color => console.log(color)
    );
let something = (color) => {}

let colorList = ['magenta', 'midnight blue', 'mahogany', 'pthaleo green', 'fuscia', 'orange', 'periwinkle', 'ocre'];

let logItem = item => console.log(item);
colorList.forEach(logItem);

let colorList = ['magenta', 'midnight blue', 'mahogany', 'pthaleo green', 'fuscia', 'orange', 'periwinkle', 'ocre'];

colorList.forEach( (item, index) =>{
    console.log(item);
    console.log(index);
})