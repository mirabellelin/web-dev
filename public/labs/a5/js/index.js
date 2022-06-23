// alert('Hello World!');

//writing to console
console.log('Hello World!');

console.log('Variables and Constants');
var global1 = 10;
var functionScoped = 2;
let blockScoped = 5;
const constant1 = global1 + functionScoped -
    blockScoped;

//variable types
console.log('Variable types');
let numberVariable = 123;
let floatingPointNumber = 234.345;
let stringVariable = 'Hello World!';
let booleanVariable = true;
let isNumber = typeof numberVariable;
let isString = typeof stringVariable;
let isBoolean = typeof booleanVariable;

//booleans
console.log('Boolean Variables');
let true1 = true;
let false1 = false;
let false2 = true1 && false1;
let true2 = true1 || false1;
let true3 = !false2;
let true4 = numberVariable === 123;
let true5 = floatingPointNumber !== 321.432;
let false3 = numberVariable < 100;

//conditionals
console.log('If else');
if(true1) {
    console.log(true);
}
if(!false1) {
    console.log('!false1');
} else {
    console.log('false1');
}

//ternary conditional operator: concise alternative to the if statement
//three args: conditional expression ? value if true : value if false
const loggedIn = true;
const greeting = loggedIn ? 'Welcome!' : 'Please login';
console.log(greeting)

/////////////
//functions//
/////////////

//Legacy ES5 function (aka ECMAScript 5 (ES5))
//syntax: function <functionName> (<parameterList>) { <functionBody> }
console.log('Legacy ES5 function')
function add (a, b) {
    return a + b;
}
const twoPlusFour = add(2, 4);
console.log(twoPlusFour);

//new ES6 functions (aka arrow functions)
console.log('New ES6 function')
const subtract = (a, b) => {
    return a - b;
}
const threeMinusOne = subtract(3, 1);
console.log(threeMinusOne);

//implied return of ES6, like lambda
const multiply = (a, b) => a * b;
const fourTimesFive = multiply(4, 5);
console.log(fourTimesFive);

//optional parenthesis if there's only one parameter
const square = a => a * a;
const plusOne = a => a + 1;
const twoSquared = square(2);
const threePlusOne = plusOne(3);
console.log(twoSquared);
console.log(threePlusOne);

//////////
//Arrays//
//////////

console.log('Arrays');
let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ['string1', 'string2'];
let variableArray1 = [
    functionScoped,
    blockScoped,
    constant1,
    numberArray1,
    stringArray1
];
console.log(variableArray1);

//index and length
const length1 = numberArray1.length;
const index1 = numberArray1.indexOf(3);

// adding new items
numberArray1.push(6);
stringArray1.push('string3');
// remove 1 item starting on 3rd spot
numberArray1.splice(2, 1);
stringArray1.splice(1, 1);
console.log(numberArray1);
console.log(stringArray1);


//////////////
//For Loops///
//////////////

console.log('For Loops');
for (let i=0; i<stringArray1.length; i++) {
    const string1 = stringArray1[i];
    console.log(string1);
}

//map function
console.log('Map');
const squares = numberArray1.map(square);
const cubes = numberArray1.map(a => a * a * a);

//find
//takes predicate function as arg
console.log('Find');
const four = numberArray1.find(a => a === 4);
const string3 = stringArray1.find(a => a === 'string3');

//find index
console.log('Find index');
const fourIndex = numberArray1.findIndex(a => a === 4);
const string3Index = stringArray1.findIndex(a => a === 'string3');

//filter
console.log('Filter');
const numbersGreaterThan2 = numberArray1.filter(a => a > 2);
const evenNumbers = numberArray1.filter(a => a % 2 === 0);
const oddNumbers = numberArray1.filter(a => a % 2 !== 0);


/////////////////////
//Template Strings///
/////////////////////

console.log('Template strings');
const five = 2 + 3;
const result1 = "2 + 3 = " + five;
console.log(result1);
// ' encloses numbers like "
const result2 = `2 + 3 = ${2 + 3}`;
console.log(result2);
const username = "alice";
const greeting1 = `Welcome home ${username}`;
console.log(greeting1);
const loggedIn1 = false;
const greeting2 = `Logged in: ${loggedIn1 ? "Yes" : "No"}`;

////////////
//jQuery///
///////////
const init = () => {
    console.log('Hello world from jQuery');

    //bind jQuery to DOM
    const bindById = $('#bind-by-id');
    const bindByClass = $('.bind-by-class');
    console.log('Binding to DOM');
    console.log(bindById);
    console.log(bindByClass);

    //changing style
    const changeStyle = $('#change-style');
    const changeStyle2 = $('.change-style');
    changeStyle.css('color', 'red');
    changeStyle2.css('color', 'blue');

    //get attribute
    const getIdAttr = $("#get-id-attr");
    const id = getIdAttr.attr('id');
    console.log(id);

    //set attribute
    const setClassAttr = $("#set-class-attr");
    setClassAttr.attr('class', 'class-0');
}
// $(init);
init();


//add class
const addClass1Example = $("#add-class-1");
addClass1Example.addClass('class-1');
//remove class
const removeClass1Example = $("#remove-class-1");
removeClass1Example.removeClass('class-2');

