//Hide content

//Show content

//Change style and text

//Change content

//Add an element

//Remove an element

//ChangeShape

//Unobstrusive js using button 1 (anonymous)
//Unobstrusive js using button 2 (regular function)

window.onload = function(){
//Write all DOM code here or inside a function
//All DOM function calls go here

    console.log("hello");
    var elem = document.getElementById("contentContainer");
    console.log(elem.innerHTML); //Get content of an element
    
    var elem2 = document.getElementById("buttonContainer");
    console.log(elem2.innerHTML);
    
    var elem3 = document.getElementById("zoom");
    console.log(elem3.innerHTML);

    var elem4 = document.getElementById("mylink1");
    console.log(elem4.href);//Get attribute of an element

    var buttons = document.getElementsByClassName("button-a");
    console.log(buttons.length);
    console.log(buttons[0].id, buttons[0].innerHTML);
    console.log(buttons[1].id, buttons[1].innerHTML);
    console.log(buttons[2].id, buttons[2].innerHTML);

}

function HideContent()
{
    var elem = document.getElementById("div1");
    
    //To hide content, set visibility to hidden
    elem.style.visibility = "hidden"; //display: none
}

function ShowContent()
{
    var elem = document.getElementById("div1");
    
    //To show content, set visibility to visible
    elem.style.visibility = "visible"; //display: none
}

function ChangeStyle(myElem)
{
    console.log(myElem.id);
    myElem.style.fontSize = "1.2em";
}

function ChangeContent()
{
    var elem = document.getElementById("div3");
    elem.innerHTML = "This is a dynamic content that I am adding";

    //Change div4 also
    //Change google link to read "Click here to go to Tri-c"
    // and point to http://www.tri-c.edu

    var link = document.getElementById("mylink1");
    link.href = "http://www.tri-c.edu";
    link.innerHTML = "Click here to go to Tri-C";

}

function AddAnElement()
{
    var para = document.createElement("p");
    para.innerHTML = "This is a brand new para that I created dynamically";
    para.id="newpara";
    var parent = document.getElementById("contentContainer3");
    parent.appendChild(para);

    //Add a link - same parent - www.yahoo.com
    var link = document.createElement("a");
    link.innerHTML="New link";
    link.id = "newlink";
    link.href="http://www.yahoo.com";
    parent.appendChild(link);

}

function RemoveAnElement()
{
    var elem = document.getElementById("para-a");
    var parent = document.getElementById("contentContainer3");
    parent.removeChild(elem);

    var elem = document.getElementById("newpara");
    var parent = document.getElementById("contentContainer3");
    parent.removeChild(elem);

    var elem = document.getElementById("newlink");
    var parent = document.getElementById("contentContainer3");
    parent.removeChild(elem);
}