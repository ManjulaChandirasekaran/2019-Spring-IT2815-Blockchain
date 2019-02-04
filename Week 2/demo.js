//JS blocks are enclosed in {}
//JS statements end with ;
//JS script is included in the head section of html in <script> tag

//This is a script file
//Why are these 2 working when I didnt even call them???

//alert("Hello world!");
console.log("Hi there!!!");

//Variable = Storage

var x;
console.log(x); //Undefined value

x = 5;//Assignment operator
console.log(x); // Assigned value

//Arithmetic operators

//Add 2 numbers
var a=50;
var b=8;
console.log(a,b,a+b);

var sum = a+b;
console.log(sum);

var product = a*b;
console.log(product);

var quotient = a/b;
console.log(quotient);

var reminder = a % b;
console.log(reminder);

x+1;
console.log(x);

x=x+1;
console.log(x);

x++;
console.log(x);

var fname = "Henry";
var lname = "Matisse";
var space = " ";
var fullname = fname + space + lname;
console.log(fullname);

var subStr = fullname.substr(3,2); //3th position 2 letters
console.log(subStr);

var slicedStr = fullname.slice(2,10); //Slice from posn 2 to posn 10
console.log(slicedStr);

console.log(fullname.indexOf("Mat"));//Get position of the string "Mat"

console.log(fullname.length); //Get length

var sentence = "hello world!";
var index = 2;
console.log('The character code ' + sentence.charCodeAt(index) + ' is equal to ' + sentence.charAt(index));
//if statement
//for statement
//while statement

//Sum of even numbers
//Sum of odd numbers

//Count number of words
//Reverse a sentence
