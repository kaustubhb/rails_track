// var myDiv = document.getElementById('myDiv');
// myDiv.style.background = 'black';
// myDiv.style.color = 'white';

// // undefined and null
// var myVar;

// //undefined = true;
// console.log(typeof(myVar) === "undefined"); // better
// console.log(myVar === undefined);

// var x = null;   // falsey value
// if(myVar === null) {
//   console.log("if");
// }
// else {
//   console.log("else");
// }

// //----------------- scope -----------------

// var world = "World!";

// function sayHello() {
//   var hello = "Hello ";

//   function inner() {
//     var extra = " There is more..";
//     console.log(hello + world + extra);
//   }
//   inner();
// }

// sayHello();

// //------------------ shadowing ---------------
// var myColor = "blue";
// console.log("myColor before myFunc() is "+ myColor);

// function myFunc()
// {
//   var myColor = "yellow";
//   myNumber = 42;
//   console.log("myColor inside myFunc() " + myColor);
// }
// myFunc();
// console.log("myColor after myFunc() is "+ myColor);
// console.log("myNumber after myFunc() is "+ myNumber);

//---------------------- Hoisting ----------------------

function doSomething(doit) {
  var color = "blue";
  if(doit) {
    var color="red";    // this is referencing the same variable declared in enclosing function's scope
    var number=10;
    console.log("color in if: ", color);
  }
  console.log("color after if: ", color);
}

doSomething(false);
doSomething(true);