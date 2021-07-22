//LOOPS
/*
Loops allow us to go over a block of information or code in a determined amount of cycles. It's important to note that it is possible for us to write code
without declaring an endpoint. 

Loops help us repeat a process without wrighting a lot of code. 
*/

/*
STRUCTURE
We have to setup our loops in a way that we can 
    1) See where we are in a loop. 
    2) Consider what sort of condition we want to run it against, and 
    3) Note when we are done with that condition and move on to the next iteration. 

    We need to:
        1) Create an Index
        2) Run a Condiiton
        3) Change to the indexing variable (execution of condition)
*/

//? Let's count to 10:

for( let i = 0; i <= 10; i++){
    console.log(i);
}

/*
We state our loop with a "for ". Within this function, we are injecting
some parameters tha JS will run against. index; condition, change index
-> result. 
Withig parameters, we are stating our index declaration to 0. This is our baseline. We move on to asking if that variable is less than or equal to the numner 10, take that set number and add 1 to it. 
Once that is processed, return that value (in this case "console.log" of that number).
Once our condition is met, we reurn a FALSE which ends our loop. 

THIS is important to note: 
for(<create an index variable); <run condition>; <change index>) {
    <return results>
    <cont. until the condition is met> 
}
*/

//? If we don't indicate what our condition is, the loop will not have a finsih line and thus run until we have to force close it. 

//INFINITE LOOP!

/*
for( let i = 0; i++){
    console.log(i);
}
*/

//No condition means that JS doesn't know when to stop and will never assume that information. 

//! CHALLENGE:

for( let a = 2; a > -10; a -= 4 ){
    console.log(a);
}

//We aren't limited by positive or negative number. We can cycle through varaibles assigned with strings.

let word = "supercalifragilisticexpialidocious"

for(let b = 0; b < word.length; b++){
    //length is a method we can use in 35 that helps us determine a value we may not know. 
    console.log(b, word[b]);
    //1) We set of each index and are displaying that. 
    //2) We set to dispaly the value withing the "object" of word. Each character that is assigned to the variable of "word" is provided an index value and this is how we are cycling through it. 
    console.log(`teh letter ${word[b]} is in positon: ${b}`);
}


/*
    FOR IN LOOPS    
    With for loops, we are seeking an incex value and runing it against a condition. For in loops do not require an index number. 
*/

let city = {
    name: 'Indianapolis',
    pop: 877000,
    speedway: true
}

for(info in city){
    console.log(info);
    console.log(city[info])
}

/*
     for(varibale in object){

     }
*/

let list = ['milk', 'eggs', 'lunch meat', 'bread', 'banaanas'];

for(item in list){
    console.log(item);
    console.log(list[item])
}

//! CHALLENGE

let myName = 'dwiGht';

let propCase;

for(let index = 0; index <= myName.length -1; index++){
 //   console.log(myName.split(''));
 //   console.log(myName[index]);

    if(index === 0){
     propCase = console.log(myName[index].toUpperCase());  // propCase = 'D'
    }else {
    propCase += myName[index].toLowerCase(); //'D' + 'w' = 'Dw'
    }
   
}
console.log(propCase);

// FOR IN VERSION
let myName = 'dwIght';

let propCase;

for(index in myName){
    index == 0 ? propCase = myName[index].toUpperCase() :
    propCase += myName[index].toLowerCase();
}

console.log(propCase);

// ERROR
let myObject = {
    string: 'Peter',
    boolean: true,
    number: 1
};

for(item of myObject){
    console.log(item);
}

let indexArray = ['spot 1', 2, true, 'not fifth'];

for(let pos of indexArray){
    console.log(pos, 'was run through a "for of" loop');
}

/*
 for(variable of interable){
     code goes here
 }
 *an interable is something that has numbers assigned to it like an array, where the first item is assigned a 0, the second a 1, adn so on ... [eg. arrays, strings]
*/

let officeCharacters = ['Dwight', 'Michael', 'Jim', 'Stanley', 'Pam'];

for(worker of officeCharacters){
    if(worker === 'Dwight' || worker === 'Michael'){

    console.log(worker, 'works in the office.'); 
 }
 if(worker === 'Jim' && worker !== 'Dwight'){
     console.log("Bear,Beets, and Galatica");
 }
}