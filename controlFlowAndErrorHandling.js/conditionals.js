/*
CONDITIONALS

FALSY VALUES:
A falsy value is a value that is considered false when encountered in a boolean context. There are 6 falsy values in JS:
    - false
    - 0
    - "", '', ``
    - null
    - undefined
    - NaN (not a number)

What does this mean? Whenever JS is expecting a boolean value and is given one of these 6, it is evaluated as false

    side note: theme are also truthy values in JS, which tend to be much less limited.
    Examples include:
        - true
        - {}
        - []
        - 42 (any number)
        - 3.14 (any decial)
        - "false" (any non-empty string)
*/

// test if fractions are thruthy 

/*
    IF STATEMENTS,

    When we use comparison operations, we typically are asking if we can move on the next section of code. "If" something is ture, do "this thing"
*/

let light = 'on';
// keyword  expression
    if      (true) {
        //code to run if the expression evaluates to true
        console.log('Truthy Test');
}

//conditon 
if(false){
    console.log('Falsy Test')
}

let light = 'on';
    
if(light == 'on'){
    console.log("The light is on");
}

let weather = 70;
let rain = true;

if(weather <= 70 && rain == true){

    console.log("Maybe wear a jacket");
}

//! CHALLENGE

let batman = 'is the night'
let bruce = true

if(bruce == true && batman == 'is the night'){
    console.log('BATMAN!')
}

/*
IF ELSE

We can think of this as not only providing an answer if our condition evaluates to be true,
but also if it ends up being false. 

*/

let today = 68;
if(today < 70){
    //              string interpolation
    console.log(`It's ${today}, wear a jacket`);
}   else{
    console.log(`It's ${today}. No Jacket needed!`);
}

/*
ELSE IF
    This is a condition that will be checked if the above condition was not met
*/

let cooktime = 60;

if(cooktime === 45){
    console.log('Let us feast!');
    
}   else if(cooktime > 45){ 
    console.log(`IT has been ${cooktime} minutes?? Might beed a glass of water with this one!`);
}   else if(cooktime >= 30){
    console.log(`It has only been ${cooktime} minutes. Wait another 5-15 minutes`);
}   else if(cooktime >= 20){
    console.log(`It has only been ${cooktime} minutes. Wait another 10-25 minutes`);
}    else{
    console.log(`It has only been ${cooktime} minutes. Perhaps we could at least try cooking it...`);
}

//! CHALLENGE

let age = 19;

if(age <= 17){
    console.log("Sorry, you're too young to do anything");
}   else if(age >= 25){
    console.log("You can rent a car!")
}   else if(age >= 21){
    console.log("You can drink!")
}  else if(age >= 18){
    console.log("You can vote!")
}    


let myName = 'Jason';
// condition
if(myName === 'Jason'){
    // if true run this
    console.log(`Hi, ${myName}!`);
}   else {
    // else run this
    console.log(`Not sure I know ${myName}`);
}

// TERNANRY 
// condition ? if true: else result
// condition            if true run this            
myName === 'Jason' ? console.log(`Hi, ${myName}`) : console.log(`Not sure I know ${myName}`);

//condition
myName === 'Jason' ?
// if ture
console.log(`Hi, ${myName}`) : 
// if false
console.log(`Not sure I know ${myName}`);

let hero = 'Batman';
let villian = 'Mr. Freeze';

hero == 'Batman' && villian == 'Riddler' ? 
console.log('What has a head and a tail but no body?') : 
hero == 'Batman' && villian == 'Joker' ? 
console.log('Why so serious?') : 
hero == 'Batman' && villian == 'Mr. Freeze' ? 
console.log('Ice ot meet you') : 
console.log(`${hero} is the night!`);

//! CHALLENGE

let lampOn = false;
let daytime = true;

lampOn == true && daytime != true ? 
console.log('The lamp is on during the night') :
lampOn !=  true && daytime != true ?
console.log('The lamp is off during the night') :
lampOn == true && daytime == true ?
console.log('The lamp is on during the day') :
lampOn != true && daytime == true ?
console.log("The lamp is off during the day") :
console.log('What lamp?');

/*

The switch statement executes a block of code depending on different cases
*/

let instructor = 'Jerome';

switch(instructor){
    case 'Jerome':
        console.log(`${instructor} is a part of the Web Development Team`);
        break;
    case 'Summer':
        console.log(`${instructor} is a part of the Web Development Team`);
    case 'Josh':
        console.log(`${instructor} is a part of the Software Development Team`);
        break;
    // else
    default:
        console.log(`Sorry, I can't find what ${instructor} teaches at this time`);
}

let staff = 'Jerome';

switch(staff){
    case 'Jerome':
    case 'Summer':
    case 'Levi':
    case 'Adam':
    case 'Hustin':
        console.log(`${staff} is a part of teh Web Development Team`);
        break;
    case 'Josh':
    case 'Amanda':
    case 'Casey':
    case 'Junior':
        console.log(`${staff} is a part of the Software Development Team`);
        break;
    default:
        console.log(`Sorry, I can't find what ${staff} teaches.`);
        break;
}


let switchConditional = true;
switch(typeof switchConditional == 'string' || typeof switchConditional == 'boolean'){
    case true:
        console.log(`${switchConditional} is a string or boolean!`);
        break;
    default:
        console.log(`${switchConditional} is NOT a string or boolean`);
}

//! CHALLENGE
 
let grade = 59;

switch (true) {
    case grade >= 89:
        console.log(`Your grade is ${grade}, you have an A`)
        break;
    case grade >= 79:
        console.log(`Your grade is ${grade}, you have an B`)
        break;
    case grade >= 66:
        console.log(`Your grade is ${grade}, you have an C`)
        break;
    case grade >= 59:
        console.log(`Your grade is ${grade}, you have an D`)
        break;
    case grade >= 0:
        console.log(`Your grade is ${grade}, you have an F`)
        break;
    default:
        console.log(`Please insert a value`)
        break;
}

//! CHALLENGE

    //TERNARY 
let character = "Michael";

character === "Michael" ?
console.log(`That's what she said!`) :
character === "Dwight" ?
console.log(`It's not weed! It's hemp!`) :
character === "Jim" ?
console.log(`Bears. Beats Battlestar Galatica`) :
console.log(`slow camera zoom!`);

    //SWITCH
let character = "Jim";

switch (true) {
    case character === "Michael":
        console.log(`That's what she said!`);
        break;
    case character === "Dwight":
        console.log(`It's not weed! It's hemp!`);
    case character === "Jim":
        console.log(`Bears. Beets. Battlestar Galactica`);
    default:
        console.log(`*slow camera zoom*`);
        break;
}