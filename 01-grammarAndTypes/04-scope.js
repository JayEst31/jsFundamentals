/*
SCOPE
What is scope?

- scope is how a computer keeps track of all it's variables in a program.
- scope can be nested, where there is an outer scope that encloses an inner scope
*/

let scope = 'Earth';

let getFromGlobal = 'the moon!';

if(true){
    let scope = 'Indiana';
    console.log(scope, 'marks the local scope');
    let kindaLocal = 'Noblesville';

    if(true){
        let scope = 'Indianapolis';
        console.log(scope, 'is the capital of Indiana.');
    }
    console.log(scope, 'should be closest to Indianapolis');
}


/*
LET vs Var

Var adn LEt seem to operate the same way, but while do have a lot of the same functionality (both let us declare and initialize variablees), they behave differently
- var is scoped to the nearest function block
- let is scoped to the nearest enclosing block
*/ 