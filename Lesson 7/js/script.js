// var x = 5;
// var y = 10;
// var z = x + y;

// var x = 2;
// var x = add(2, 3); // x = 5

// function add(x, y, z) {
//     return x + y + z;
// }

// var z = 2;
// printer();

// console.log("After printer called z: " + z);

// function x() {
//     var z = 0;
//     console.log("Printer shows z: " + z); // 0
// }

// x(); // Printer shows z: 0

// var x = function(value) {
//     console.log("Show: " + value);
// }

// x(1); // Show: 1

// var car = {
//     name: "Cerato",
//     model: "Kia",
//     weightInTon: 10,
//     color: "white",
//     start: function() {
//         console.log("Kia start to move");
//     },
//     brake: function() {
//         console.log("Kia brake");
//     }
// }

// console.log(car);

// // function call
// car.start();
// car.brake();

// // 3000 ms = 3s;
// setTimeout(function() {
//     // write your own logic
//     window.alert("Timeout!");
// }, 3000);

// var z = 0;
// setInterval(function() {
//     z += 1; // z = z + 1;
//     console.log(z);
// }, 1000);

function changeText() {
    var style = "color: red; content: \'\'";
    document.getElementsByClassName("title").innerHTML = "<span style='" + style + "'>Foo</span>";
}