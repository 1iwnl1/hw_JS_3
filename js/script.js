// Задача 26

var myStr = "This is the start. " + "This is the end.";

// Задача 27

var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

// Задача 28

var myName = "Dima";
var myStr = "My name is " + myName + " and I am well!";

// Задача 29

var someAdjective = "awesome!";
var myStr = "Learning to code is ";
myStr += someAdjective;

// Задача 30

var lastNameLength = 0;
var lastName = "Lovelace";

lastNameLength = lastName.length;

// Задача 31

var firstLetterOfLastName = "";
var lastName = "Lovelace";

firstLetterOfLastName = lastName[0];

// Задача 32

var myStr = "Jello World";
myStr = "Hello World"; 

// Задача 33

var lastName = "Lovelace";
var thirdLetterOfLastName = lastName[2];

// Задача 34

var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 1];

// Задача 35

var lastName = "Lovelace";
var secondToLastLetterOfLastName = lastName[lastName.length - 2];

// Задача 36

var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

var wordBlanks = myNoun + " " + myAdjective + " " + myVerb + " " + myAdverb; 

// Задача 37

var myArray = ["string", 10];

// Задача 38

var myArray = [["Bulls", 23], ["White Sox", 45]];

// Задача 39

var myArray = [50,60,70];
var myData = myArray[0];

// Задача 40

var myArray = [18,64,99];
myArray[0]= 45;

// Задача 41

var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[2][1];

// Задача 42

var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);

// Задача 43

var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();

// Задача 44

var myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift();

// Задача 45

var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35])

// Задача 46

var myList = [["Chocolate Bar", 15],["Chocolate Ba", 16],["Chocolate B", 17],["Chocolate", 18],["Chocolat", 19]];

// Задача 47

function reusableFunction() 
{
  console.log("Hi World");
}
reusableFunction();

// Задача 48

function functionWithArgs(numOne, numTwo)
{
  console.log(numOne + numTwo);
}

functionWithArgs(1,2);
functionWithArgs(7,9);

// Задача 49

var myGlobal = 10;
function fun1()
{
oopsGlobal = 5;
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

// Задача 50

function myLocalScope() 
{
    var myVar;
    console.log('inside myLocalScope', myVar);
}
myLocalScope();
console.log('outside myLocalScope', myVar);

// Задача 51

var outerWear = "T-Shirt";
function myOutfit() 
{
    var outerWear ="sweater";
    return outerWear;
}
myOutfit();

// Задача 52

function timesFive(num) 
{
    return num * 5;
}
timesFive(5);
timesFive(2);
timesFive(0);

// Задача 53

var sum = 0;
function addThree() 
{
  sum = sum + 3;
}

function addFive() 
{
  sum = sum + 5;
}
addThree();
addFive();

// Задача 54

var processed = 0;
function processArg(num) 
{
    return (num + 3) / 5;
}
processed = processArg(7);

// Задача 55

function nextInLine(arr, item) 
{
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];
  
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));