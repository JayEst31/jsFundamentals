/*
FUNCTIONS 
Functions are processes that we call upon to run an action. They can do teh following:
- Take in  an input ot process, modify, or respond to (not required)
- Can be invoked (or called) as often as needed 
*/
//  (1)   (2)
function hi() {
    // (3)
    console.log('Hi!');
    // 1: function keyword - we use this to define a function
    // 2: name of the function, followed by parenthesis - this is how we will call the function
    // 3: code goes here - this will be the "brains" of the function
}

// CALLING THE FUNCTION
// aka putitng the "fun" in function
// inorder to invoke (call) a function, we will simply unite it's name and put parenthesis after it
hi()

let myName = 'Jason';{ 
    myName = myName.toUpperCase();
    hi();
}
myNameCap();
console.log(myName);

/*
FUNCTION DECLARATION
a chunk of code that performs a set chunk of code when it is invoked (or called)
*/

function funcOne(){
    console.log('This is the code taht we run in function one');
}
console.log(funcOne);
funcOne(); // we invoke (or call) a function by writting it's declared name followed by parenthesis

/*
FUNCTION EXPRESSIONS
assigning a function to a variable is what we call an expression!
*/

let first = function funcTwo(){
    console.log('Code being run in the function expresion');
}
first();

let example = function(){
    console.log('What is my name?');
}

example();
console.log(typeof example); //function
console.log(typeof example()); //undefined 

/*
ANONYMOUS FUNCTIONS
anonymous functions are stored in memory but the runtime does not automatically create a reference to it. 

The main use would be to opass these functions through another functions. Maybe ahve a ternary where if something is true we run one functino, else we run a different function
*/

// Common use would be to assign these to a variable
let anon = function(){
    console.log('Anonymous Function');
}

anon();

true || false ? function() {console.log('true')} : function() {
    console.log('false')
}

/*
PARAMETERS
we will be using functions to pass in information and return a result

parameters will allow our functions to take in ourside information
*/

function parameterFunc(num){
    console.log(num + 1);
    return num + 5;
}

parameterFunc(7);
parameterFunc('bruce');
parameterFunc('another test');
parameterFunc([1, 2, 3, 4, 5]);

let returnTest = 5;
parameterFunc(returnTest); //6
console.log(parameterFunc(returnTest));


let firstName = 'Jane';
let lastName = 'Doe';

function greeting(first, last){
    console.log(`Hi, ${first}! Welcome back!`);
    console.log(`This is the first parameter: ${first}`);
    console.log(`This is the last parameter: ${last}`);
}

greeting(firstName, lastName);