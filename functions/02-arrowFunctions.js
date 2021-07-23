/*
ARROW FUNCTIONS
arrow functions are expressional functions that can be simplified into one of two forms:
Concise body and Block body. The main goal is to generate shorter syntax for writting a function.
*/

// Regular Function
function regFunc(){
    console.log('just a regular function')
}

regFunc();

//      (1)     (2) (3)       (4)
let arrowFunc = () => console.log(`function in one line`);
arrowFunc();

/*
    1: A variable created to hold the value of our anonymous arrow function.
        - Arrow functions are ALWAYS anonymous.
    2: Parameters are still capable of being added
        - Parameters go in the () as they would with a normal function, 
        BUT if we only have 1, no more or less, parameter, we do not nedd (). If we have no parameters we are still requiere to put ().
    3: "How we see an arrow". This is JS syntax that says we are about to process a function.
    4: The code the arrow function will run, or execute. i.e "Do this"
*/  

let arrow = (x) => console.log(x);
arrow(10);

//! CONCISE vs BLOCK BODY
// When we have a simple return, or response, from our arrow function, it makes sense to write it in a concise, simplified way. When we use a concise body arrow function, the "return" statement is implied (meaning we do not have to write it)

let conciseBody = (x,y) => console.log(x + y);
conciseBody(1,2);

let conciseBody = (x,y) => x + y;
let result = conciseBody(1, 2); // return sets conciseBody(1,2) = 3
console.log( result );

let slightlyComplexConcise = (x,y) => x > 2 && y < 2 ? console.log(`${x} is greater than 2 and ${y} is less than 2`) : console.log(`${x} and ${y} are where we want them`)

slightlyComplexConcise(3,1);

// BLOCK BODY
// the 'return' keyword IS required. we will include curly braces.
// Sometimes it will make sense to use block body if we need to do multiple lines of code.

let blockArrow = (x,y) => {
    return `${x} and ${y} are in a block body arrow function`
    //ANY code below the return statement in a function will be ingnored. If we write code below it, it will not run 
    //console.log();
} 

console.log(blockArrow(1,2));

//! CHALLENGE
let hero = 'Robin Hood';
let nock = 1;

function shot(x,y) {
    y < console.log(`${x} only shot ${y} arrow ...`) : console.log(`${x} shot ${y} arrows at the target!`);
};

shot(hero, nock);

let hero = 'Robin Hood';
let nock = 1;

let shot = (x, y) => y < 3 ? console.log(`${x} only shot ${y} arrow..`) : console.log(`${x}shot ${y} arrows at the target!`);

shot(hero, nock);

//*Using  a block body arrow function, pass the same variables but increase the number of shots until the second console.log is printed

let hero = 'Robin Hood';
let nock = 1;

// 1 - Block body arrow function (?)
// 2 - pass in 2 variables
// 3 - run the conditional 
// 4 - repeat the code until the result changes?

let shoot = (x, y) => {
    if(y < 3){
    console.log(`${x} only shot ${y} arrow..`)
    }else{
    console.log(`${x}shot ${y} arrows at the target!`)
    };
}

shoot(hero, nock);