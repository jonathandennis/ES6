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
/*
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
*/
/*
//////////////////////////
// Strings

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;
 
function calcAge(year) {
    return 2020 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.'); 

//ES6   known as Template Literals
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));  // startsWith  can test is strings starts with something
console.log(n.endsWith('th'));  // endsWith      or ends with something
console.log(n.includes('oh'));
console.log(firstName.repeat(5));
console.log(`${firstName} `.repeat(5));
*/
/*
///////////////////////
// Arrow functions

const years = [1990, 1965, 1982, 1937];

// ES5   to return an array of each elements age
var ages5 = years.map(function(el) {    // map loops through all elements
    return 2020 - el;
});
console.log(ages5);

// ES6 
let ages6 = years.map(el => 2020 - el);
console.log(ages6);

// if more than one argument is called then you need to wrap in parenthesis
ages6 = years.map((el, index) => `Age element ${index + 1}: ${2020 - el}.`); 
console.log(ages6);

// if more than 1 line, then you need curly braces and the return is not implicit and needs to be called
ages6 = years.map((el, index) => {
    const now = new 
    Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`
});
console.log(ages6);
*/
/*
///////////////////////////
// Arrow functions 2

// ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {

        var self = this;  // work around as 'this' points to the global object and returns undefined. defining it here 
        document.querySelector('.green').addEventListener('click', 
        function() {
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
}
//box5.clickMe();

// ES6

var box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {

        document.querySelector('.green').addEventListener('click', 
        () => {  // arrow functions share the 'this' keyword around them
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
//box6.clickMe();
////////////////////////////
// examples in diffences for 'this' keyword
function Person(name) {
    this.name = name;
}

// ES5
Person.prototype.myFriends5 = 
function(friends) {

    var arr = friends.map(function(el) {
        return this.name + ' is friends with ' + el;
    }.bind(this));  // bind workaround to have 'this' work locally 
    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);

// ES6
Person.prototype.myFriends6 = 
function(friends) {

    var arr = friends.map(el =>
    `${this.name} is friends with ${el}`);

    console.log(arr);
}
new
Person('Mike').myFriends6(friends);
*/

///////////////////////////////////
// Destructuring

