console.log("hello");
DoSomething(); //Function is called here

var x = 100;
ChangeMyVariable(100); //Function with 1 parameter is called here
console.log("Outside value of x unaltered: ",x);

var y = ReturnABoolean(x);//Function with return value is called here
console.log("Returned value from ReturnABool function: ", y);

var p=100;
var q = "Cindi";
var r="dog"
Display(p,q,r);//Function with 3 parameters is called here

var sum = AddNumbers(10,20);
console.log(sum);
var diff = SubtractNumbers(20,10);
console.log(diff);
var prod = MultiplyNumbers(10,20);
console.log(prod);

var sumOf = Calculate(100,20,"+");
var diffOf = Calculate(100,20,"-");
var prodOf = Calculate(100,20,"*");
console.log(sumOf, diffOf, prodOf);

function Calculate(a,b,c) //3rd parameter will specify operation + or - or *
{
    if (c == "+")
       output=a+b;
    else if (c == "-")
        output=a-b;
    else if (c=="*")
        output=a*b;
    else
        output="do nothing";    
    
    console.log(output);
    return output;
}

function ChangeText(x)
{
    x.innerHTML = "Button";
//    x.style.visibility = "hidden";
    x.style.backgroundColor = "blue";
    x.style.color = "white";
    x.style.width = "150px";
    x.style.padding = "10px";
    x.style.margin = "10px";
}

function DisplayHey()
{
    console.log("hey");
}
function DoSomething() //Function declaration
{
    console.log("My name is DoSomething and I am a function");

}

function ChangeMyVariable(x)
{
    x = "I changed the variable";
    console.log("Inside ChangeMyVariable function:",x);
}

function ReturnABoolean(x)
{
    if (x == 100)
        return false;
    else
        return true;
}

function Display(a,b,c)//Function with 3 parameters that writes the 3 parameters to console.log inside the function
{
    console.log(a,b,c);
}

//Function 1 - AddNumbers(a,b)      : Add 2 numbers and return the sum
//Function 2 - SubtractNumbers(a,b) : Subtract 2 numbers and return the difference
//Function 3 - MultiplyNumbers(a,b) : Multiple 2 numbers and return the product

function AddNumbers(a,b)
{
    var sum = a+b;
    return sum;
}

function SubtractNumbers(a,b)
{
    var diff = a-b;
    return diff;
}

function MultiplyNumbers(a,b)
{
    var prod = a*b;
    return prod;
}

