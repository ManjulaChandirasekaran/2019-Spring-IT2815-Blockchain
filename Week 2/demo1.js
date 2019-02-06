
//JS statements end with ;
//Ctrl+shift+i to get developer tool bar
//JS blocks are enclosed in { }

alert("hello world!"); //Window popup that is in the face
console.log("console log hello");

var x;
console.log(x);

x = 10;
console.log(x);

//Dynamic data types means you can save number or string or 
//bool in the same variable
x="Manjula";
console.log(x);

var a = 50;
var b = 10;
console.log(a+b);

var sum = a+b;
console.log(sum);

var product = a*b;
console.log(product);

var quotient = a/b;
var reminder = a % b;
console.log(quotient + " " + reminder);

var x = 10;
x+1; //Answer is not saved anywhere and does not impact x
console.log(x);

//Combination operators
x=x+1; //x value is changed
x+=1; //x value is changed

x++; //x value is changed by 1
x--; //x value is changed by 1

var fname = "Manjula";
var lname = "Chandirasekaran";
var fullname = fname + ", "+ lname; //Concats 2 strings 
console.log(fullname);
console.log("length = " + fullname.length); //gets length of string
console.log("substr = " + fullname.substr(2,3)); // substring from posn 2, pulls 3 chars
console.log("slice = " + fullname.slice(5,10)); // substring from posn 5 to posn 10

console.log(x > 10); //returns boolean
console.log(x == 10); //returns boolean

var flag = x > 2;
console.log(flag);

//Conditional statements are here
//== operator is different than = (assignment operator)
if (x == 10) //If statement checks boolean (== operator)
{
    console.log("x is equal to 10");
    fullname = "Anthony";
}
else
{
    console.log("x is not equal to 10");
}

x = 5;
while( x > 10) //Execute only if condition is true
{
    console.log("while loop"); //Loop does not execute as x < 10
    x = 100;
}

do{
    console.log("do while loop");
}
while (x>10); //Executes once before checking if condition is true


//For loop needs a starting point, an ending point and an incrementor/decrementor
for(var i=0; i<10; i++) //loops from 0-9
{
    console.log(i);
}











