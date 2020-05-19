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
/*
///////////////////////////////////
// Destructuring

// convenient way to extract data from a data structure like an object or an array

//ES5
//var john = ['John', 26];
//var name = john[0];
//var age = john[1];

//ES6
const [name, age] = ['John', 26];
console.log(name);
console.log(age);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

// example below if we dont want key names to match
const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);

// more destructuring and returning multiple values
function calcAgeRetirement(year) {
    const age2 = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age);
console.log(retirement);
*/

/////////////////////////////////////////////
// Arrays
// uses html example
/*
const boxes = document.querySelectorAll('.box');  // returns Node list

// ES5  to select all boxes and make them blue
/*
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerblue';
});
*/
/*
// ES6 the new 'from' method transforms the Node list automatically to an array. 
const boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');

// looping over arrays (to change the text in the boxes)
// ES5
/*
for(var i = 0; i < boxesArr5.length; i++) {

    if(boxesArr5[i].className === 'box blue') {
        continue; 
    }
    boxesArr5[i].textContent = 'I changed to blue!';
}
*/
/*
// ES6  has new loop called 'for of'
for (const cur of boxesArr6) {
    if(cur.className.includes('blue')) {
        continue; 
    }
    cur.textContent = 'I changed to blue!';
}
*/
/*
// new array methods to find elements in an array
//
// ES5
var ages = [12, 17, 8, 21, 14, 11];

var fullAge = ages.map(function(cur) {
    return cur >= 18;
});
console.log(fullAge);

console.log(fullAge.indexOf(true)); // to find the index 
console.log(ages[fullAge.indexOf(true)]); // to get the age

//ES6 
//has new methods of 'findIndex' and 'find'
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));
*/
/*
///////////////////////////////////////////////
// Spread operators   *Used in the function call*

function addFourAges(a, b, c, d) {
    return a + b + c + d;
}
var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

// how to pass that entire array into a function
//ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages); 
console.log(sum2);

// ES6  introduces spread operator '...', it expands the array
const sum3 = addFourAges(...ages);
console.log(sum3);

// ES6 spread operator, another use case is joining arrays
const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily);

// also works on Node lists

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes]; //gets us node list

Array.from(all).forEach(cur => cur.style.color = 'purple');
*/

//////////////////////////////////////////////
//  Rest parameters - allows one to pass an arbitray number of arguments into a function. 
// look same as spread operator, but works the oposite. *Used in the function declaration*

/* ES5  without rest parameters
function isFullAge5() {
    //console.log(arguments); // does not return an array, but an object that needs to be converted to array
    var argsArr = Array.prototype.slice.call(arguments); // need to convert to an array

    argsArr.forEach(function(cur) {
        console.log((2016 - cur) >= 18);
    })
}

isFullAge5(1990, 1999, 1965); 
isFullAge5(1990, 1999, 1965, 2016, 1987); 
*/
/*
//ES6 introduces rest parameters
function isFullAge6(...years) {
    //console.log(years); // returns an array which is better than the object in es5
    years.forEach(cur => console.log((2016 - cur) >= 18));
} 

isFullAge6(1990, 1999, 1965, 2016, 1987);
*/
/*
// take a step further
// ES5  without rest parameters
function isFullAge5(limit) {
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments, 1); // need to convert to an array

    argsArr.forEach(function(cur) {
        console.log((2016 - cur) >= limit);
    })
}

isFullAge5(21, 1990, 1999, 1965); //first argument is limit
//isFullAge5(1990, 1999, 1965, 2016, 1987); 


function isFullAge6(limit, ...years) {
    //console.log(years); // returns an array which is better than the object in es5
    years.forEach(cur => console.log((2016 - cur) >= limit));
} 

isFullAge6(16, 1990, 1999, 1965, 2016, 1987); // first argument is limit
*/

////////////////////////////////////////
// Default parameters
// used when you want to set one or more parameters to be preset as a default
/*
// ES5 before default parameters
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

    lastName === undefined ? lastName = 'Smith' : lastName = lastName;  // using ES5 to preset parameters 
    nationality === undefined ? nationality = 'american' : nationality = nationality;

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}
var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish'); // able to override parameters. this case emily got married.
*/
// ES6 using default parameters
/*
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') { // specify default parameters right where they are declared
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');
*/

/////////////////////////////////////////////////
// Maps  Map completely new for ES6
// map is a new key value data structure, anything can be used for a key, strings, numbers, booleans, functions, ect... Maps are iterable(able to loop through)
// use .set .get .has and clear to manipulate maps
/*
const question = new Map();
question.set('question', 'What is the official name of the latest major JavaScript version?'); // key, value
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer :D');
question.set(false, 'Wrong, please try again!');

console.log(question.get('question'));
//console.log(question.size); // to get length

//question.delete(4); // to delete using key

if(question.has(4)) { // or use in if statement
//    question.delete(4); 
    //console.log('Answer 4 is here');
}

//question.clear(); // clear everything from map
/*
// looping through maps using forEach
question.forEach((value, key) => 
console.log(`This is ${key}, and it's set to ${value}`));
*/
/*
// using for of
for (let [key, value] of question.entries()) {
//console.log(`This is ${key}, and it's set to ${value}`);
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}

const ans = parseInt(prompt('Write the correct answer')); // parseInt returns a number NOT a string
console.log(question.get(ans === question.get('correct')));
*/

//////////////////////////////////////////
// Classes
// for prototypal inheiritance. Classes make it easier to implement iheiritance and create objects based on blueprints
/*
//ES5  uses function constructors
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');

// Same thing but using classes with ES6 
class Person6 {    // Class declaration
    // constructor
    constructor (name, yearOfBirth, job) {      
        this.name = name;                       // same as before  
        this.yearOfBirth = yearOfBirth;         // same as before
        this.job = job;                         // same as before
    }                       // no need for separating puctuation
    // method
    calculateAge() {        // no need declare function
        var age = new Date().getFullYear - this.yearOfBirth;    // same as before
        console.log(age);                                     
    }

    static greeting() {
        console.log('Hey there!');
    }
}

const john6 = new Person6('John', 1990, 'teacher');
Person6.greeting();
*/
/////////////////////////////////////////////////////
// Classes and subclasses
/*
//ES5  
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var Athlete5 = function(name, yearOfBirth, job, olymicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
    this.olymicGames = olymicGames;
    this.medals = medals;    
}

Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
}

var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);

johnAthlete5.calculateAge();
johnAthlete5.wonMedal();
*/
/*
// Same thing but using classes with ES6 
class Person6 {    // Class declaration
    // constructor
    constructor (name, yearOfBirth, job) {      
        this.name = name;                       // same as before  
        this.yearOfBirth = yearOfBirth;         // same as before
        this.job = job;                         // same as before
    }                       // no need for separating puctuation
    // method
    calculateAge() {        // no need declare function
        var age = new Date().getFullYear() - this.yearOfBirth;    // same as before
        console.log(age);                                     
    }
}

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames =  olympicGames;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);

johnAthlete6.calculateAge();
johnAthlete6.wonMedal();
*/
/////////////////////////////////////////////////////
// Coding challenge

/////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.
*/
/*
class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}


class Park extends Element {
    constructor(name, buildYear, area, numTrees) {
        super(name, buildYear);
        this.area = area;
        this.numTrees = numTrees;
    }

    treeDensity() {
        const density = this.numTrees / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per sq km.`);
    }
}

class Street extends Element {
    constructor(name, buildYear, length, size = 3) {   // setting normal street default parameter
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, built in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
    }
}

const allParks = [new Park('Green Park', 1987, 0.2, 215),
                new Park('National Park', 1894, 2.9, 3541),
                new Park('Oak Park', 1953, 0.4, 949)];

const allStreets = [new Street('Ocean Ave', 1999, 1.1, 4),
                    new Street('Evergreen St', 2008, 2.7, 2),
                    new Street('4th St', 2015, .08),
                    new Street('Sunset Blvd', 1982, 2.5, 5)];

function calc(arr) {

    const sum = arr.reduce((prev, cur, index) => prev + cur, 0); /* 0 is place to start. Using .reduce(reduces arrays to one figure) Adds everything in the array in order. Using just prev, and cur, but typed out index to show that exists as an option. */
    return [sum, sum / arr.length];
}

function reportParks(p) {
    console.log('------PARKS REPORT------');

    // Density
    p.forEach(el => el.treeDensity());
    // Average age
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);

    // which park has more than a thousand trees
    const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees.`);
}

function reportStreets(s) {
    console.log('------STREETS REPORT------');
    // total and average length of the towns streets
    const [totalLength, avgLength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} streets have a total length of ${totalLength}km, with an average of ${avgLength}km.`)
    // classify sizes
    s.forEach(el => el.classifyStreet());


}

reportParks(allParks);
reportStreets(allStreets);
*/

