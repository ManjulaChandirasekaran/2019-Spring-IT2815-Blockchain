//Javascript object

//JSON - Javascript Object Notation
    //Used for data exchange
    //"key":"value"
    //No functions allowed in the value part
    //No trailing commas 

window.onload = function()
{
    //All DOM code goes here

    /*Car has:
    year
    make
    model
    color
    wheels
    vin
    */

    var car = {
        year: 2019,
        make: "Toyota",
        model:"Corolla",
        color: "Silver",
        vin: 423423423423423423,
        doors: 5,
        engine: true,
        engineType: "blah",
        name: function(){
            return "LightningMcQueen";
        },
        id: function(){
            return this.year+this.make+this.model;
        }
    };


    console.log(car);

    //Access properties
    console.log(car.year);
    console.log(car.make);

    //Access methods
    console.log(car.id());
    console.log(car.name());

    //Access using a subscript like an array
    console.log(car["year"]);

    //Change property value
    car.year = 2016;
    console.log(car.year);

    //Change property to method
    car.year = function()
    {
        return 2015;
    }

    console.log(car.year());

    car.fourwheel = false;
    console.log(car);

    delete car.color;
    console.log(car);


    var jsonCar = {
        "year": 2019,
        "make": "Ford",
        "model": "F-150"
    };

    console.log(jsonCar.year);
    var strJSON = JSON.stringify(jsonCar);
    console.log(strJSON);

    var objJSON = JSON.parse(strJSON);
    console.log(objJSON);

}




    

   
