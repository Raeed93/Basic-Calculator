console.log("this is my first javascript file");

var number = 5; //in line comment 
/*
multiline comment
hahaha
just playing
*/

var MyName = "Raed";
MyName = 8;

var a;
var b = 2;
console.log(a)
a = 5;
b = a;

console.log(a)

// Example how tot create a string

var firstName = "Raed";
var lastName = "Hassan";

// example double qoutes string inside each other

var mySign = 'i am a "double qouted" string inside"double qoutes"'
console.log(mySign)

// var myHero = "FirstLine/n/t//SecondLine/nthirdLine" **usig commands such as /n , /t

//Example of adding two strings 

var myStr = "this is the first sentence. "
myStr += "this is the second sentence."
console.log(myStr)

//Example contructing strings with variables 

var ourNAme = "ReesbyRecruitment";
var ourStr = "Hello, our name is " + myName + ", how are you?";

var myName = "Raed";
var myString = "My name is " + myName + " and i am well";
console.log(myString)

// appending variables to a string

var someAdjective = "worthwile";
var myStr = "Learning to code is ";
myStr += someAdjective;
console.log(myStr)

//Example .. Reusable function 
/*
function ourReusableFunction() {
    console.log("Hey, world");
}
ourReausableFunction();
*/
// another example
function functionWithRaed(a, b) {
    console.log(a + b);
}
functionWithRaed(10, 5)

// Example global scoop and local scoop with functions

var myGlobal = 10;

function fun1() {
    //assign oopsGlobal here
    oopsGlobal = 5;
}

// only change code above this 
function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal:  " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();

// Example of passing a value into a function

function minusSeven(num) {
    return num - 7;
}

console.log(minusSeven(10));

function timesFive(num) {
    return num * 5;
}

console.log(timesFive(5));

// Boolean functions 

function testLogicalOr(val) {

}