// var name = "Kaustubh";
// console.log(name);

// var statement = 'She said - \"How\'s the family?\"'
// console.log(statement);

//  //------------ Concatenation --------------

//  var whole = "Hello" + " World!";    // Allowed, unlike C++

// //---------------------Methods------------------

// var length = whole.length;
// console.log(whole, length);

// var index = whole.indexOf("World");
// console.log(index);

// var index2 = whole.indexOf("world");
// console.log(index2);

// console.log(whole[1]);

// var world = whole.substr(6, 5); // (start, length)
// console.log(world);

// console.log(whole.toLowerCase());  // this method returns a new string. Does not modify input
// console.log(whole.toUpperCase());

var first = "Hello";
var second = "hello";

if(first === second) {
  console.log("Equal");
}
else {
  console.log("Different");
}

function compare(a, b) {
  console.log(a + " < " + b, a<b);
}
compare('a', 'A');