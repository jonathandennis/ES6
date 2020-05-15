// let and const

// ES5 ex01
/*
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6 ex01

const name6 = 'Jane Smith'; // const is a variable that will not change over time
let age6 = 23; // let is a variable that will/can change or mutate over time
//name6 = 'Jane Miller';  // can't declare change in const variable
//console.log(name6); // throws error in console as name6 is a const and not supposed to change
*/
/*
// ES5 ex02
// In ES5 var is FUNCTION scoped and variables are accessible withing the function
function driversLicence5(passedTest) {
    if (passedTest) {
        var firstName = 'John';
        var yearOfBirth = 1990;

        console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
    }
}
driversLicence5(true);
// and this way
function driversLicence5(passedTest) {
    if (passedTest) {
        var firstName = 'John';
        var yearOfBirth = 1990;
    }
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}
driversLicence5(true);

// ES6 ex02
// In ES6 let and cost are BLOCK(code between braces) scoped and not function scoped.
// Only works like this
function driversLicence6(passedTest) {
    if (passedTest) {
        let firstName = 'John'; 
        const yearOfBirth = 1990;

        console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
    }
}
driversLicence6(true);
// and not like this. these variable are only accessible within their block

function driversLicence6(passedTest) {
    if (passedTest) {
        let firstName = 'John'; 
        const yearOfBirth = 1990;
    }
    //console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');  // logs error firstName is not defined
}
driversLicence6(true);

// need to declare variables outside of the block, assign value inside
function driversLicence6(passedTest) {
    
    let firstName; // let allows declaration of variable and assigning value in different blocks
    //const yearOfBirth; cant assign value to const like this 
    const yearOfBirth = 1990; // need to declare variable and assign value in same block with const
    
    if (passedTest) {
        firstName = 'John';
        //yearOfBirth = 1990; cant assign value to const like this 
    }
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');  // logs error firstName is not defined
}
driversLicence6(true);
*/
// another example to illustrate differences in the use of variables between 5function and 6block scopes
// ES6 i is a different variable inside and outside the block with let
/*
let i = 23;

for (let i = 0; i < 5; i++) {
    console.log(i);  // 0, 1, 2, 3, 4
}

console.log(i); // 23
*/
/*
// ES5 Not block scope, so i is 5
var i = 23;

for (var i = 0; i < 5; i++) {
    console.log(i);  // 0, 1, 2, 3, 4
}

console.log(i); // 5
*/

// blocks and IIFEs

{
    const a = 1;
    let b = 2,
}
console.log(a + b); // error as variables not accessible outside of block. GREAT FOR SECURITY similar to IIFE
// above would work with var!!
// to get same security in ES5 uses IIFE
(function() {
    var c =3;
})();

console.log(c);



