/* 
    DATA and STRUCTURE TYPES
    - Primitive Data Types:
        - boolean
        - undefinded
        - string
        - number
        - bigInt *
        - symbol *
    - null
    - Object
    - Function
*/

/*
    BOOLEAN
    A Boolean has two possible values: true and false
*/

let on = true;
let off = false;

console.log(on);
console.log(off);

/*
    NULL
    A null value is an empty value. Think of it as an empty container that has space to fill.
    Note: null and undefined are 2 different things 
 */

let empty = null;
console.log(empty);

/*
    UNDEFINED
    No value has been assigned to a container and doesn't even act
    as an empty container
*/

let unknown;
let undef = undefined;

// What's the difference between null and undefined?

/*
    - Null is like a container with nothing in it
    - Undefined is a variable that has never been set, or it hasn't been created yet
*/

/*
    NUMBERS
    Literally just numbers
*/

let degrees = 82;
console.log(degrees);

let precise = 999999999999999; // 15 9's in the console
console.log(precise);

let rounded = 9999999999999999; // 16 9's become 1 with 16 0's
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let whatIf = (0.2 * 10 + 0.1 * 10 / 10)
console.log(whatIf);

/*
    STRINGS
    Strings represent text adn are wrapped in eithr single or double quotes.
*/

let doubleQuote = "Double Quote"
let singleQuote = "Single Quote"
console.log(doubleQuote);
console.log(singleQuote);

let bothQuotes = 'I said, "How cool is that"';
let bothQuotesAlt = "I then said, 'It is pretty cool right?'";
console.log(bothQuotes);
console.log(bothQuotesAlt);

const contractions1 = "now you can't run into any issues";
const contractions2 = 'now you can\'t run into any issues'
console.log(contractions1)
console.log(contractions2)

// numbers and Strings
let addThese = 1050 + 100;
console.log(addThese);

let addTheseAlso = '1050' + '100';
console.log(addTheseAlso)

// We can use an operation called 'typeof' to return a string of the variable's type

console.log(typeof addThese);
console.log(typeof addTheseAlso);

let addTest = 1050 + '100';
console.log(addTest);

let arrayList = ['position 1', 'position 2', 'position 3'];
console.log(arrayList);

let anotherExample = ['muffins', 'pizza toppings', true, 17, 9007199254740992, false, null, undefined];
console.log(anotherExample);
console.log(anotherExample[0]) // square bracket notation

console.log(typeof anotherExample);

/*
    ADDITION vs CONCATENATION
    JS sees the + symbol in two different ways 
    - When we use it with numbers, it will use the built-in math
    functionality
    - When we use it with strings, it will ignore the match
    functionality and concats, or combines, the two strings into one.
*/

let strings = 'one' + " " + 'is a number';
console.log(strings);

let concatDiff = 1050 + '100';
console.log(concatDiff);
console.log(typeof concatDiff);


// ! CHALLENGE

let firstName = "Jason";

let lastName = "Estevez";

let houseNumber = "520";

let street = "Brock Circle";

let city ="Blue Springs";

let state = "Missouri";

let zipcode = 64014

console.log(firstName + ",", lastName, houseNumber, street + ",", city + ",", state, zipcode)

/*
STRING: PROPERTIES
    Propertites are qualities associated with a data type strings have properties, or qualities, associated with them the length of a string is a property

*/

let myName = 'another test string';
console.log(myName.length);

/*
    METHODS
    Methods are tools that can help us manipulate data
    .property .method()
    no parens    parens

*/

let myNameIs = 'Jason';
console.log(myNameIs.toUpperCase());

let home = 'My home is in Noblesville';
console.log('Includes Method:', home.includes('Noblesville'));

// ! challenge

let sent = 'This sentence will be split into individual parts';

const word = sent.split(' ');
console.log(word);
