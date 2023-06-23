// // // VARIABLES
// // // LET, var, const

// // const name = "pizza";

// // // console.log(1); // Print to the console
// // const topping = "popcorn";
// // console.log(name, topping);

// // // TEMPLATE LITERALS
// // console.log(`${name} ${topping}`);

// // console.log("string" + "1");

// // // integer

// // // booleans

// // // console.log(Boolean(name));
// // // let prompt1 = prompt("how are you ?");
// // // let whereDidHeGo = prompt("where did he go");

// // // console.log(`${prompt1} went to the ${whereDidHeGo}`);

// // // alert(`${prompt1} went to the ${whereDidHeGo}`);

// // let prompt2 = prompt("What is your name ");
// // let prompt3 = prompt("How old are you?");
// // let prompt4 = prompt("what is your hobby");
// // alert(
// //   `Hi my name is ${prompt2}, I am ${prompt3}, and I like playing ${prompt4}.`
// // );
// // conditionals //////////

// //truthy values

// let x = 1;

// console.log(Boolean(x));
// // conditonal operators
// // ===; 1 === 1 is true
// // ==; loose equals; 1 == '1'

// // if statement

// //if (this is true) {then run this}
// if ("collin" === "collin") {
//   console.log("hello world");
// }
// if (x == 0) {
//   console.log("hello world");
// }
// let questComplete = false;
// let questComplete2 = false;
// let slimesDefeated = 0;

// // or operator

// if (slimesDefeated === 10) {
//   questComplete = true;
// }

// let i = 0;
// let k = 1;
// if (i === 1 || k === 1) {
//   console.log("hello world");
// }

// // ELSE; if the statement is false

// let v = 10;
// let u = 8;

// if (v === 9) {
//   console.log("hello world");
// } else {
//   console.log("goodbye world");
// }

// // else if
// let q = 0;
// if (q === 1) {
//   console.log("hello world");
// } else if (q === 0) {
//   console.log("goodbye world");
// } else {
//   console.log("something");
// }

// let username = prompt("enter your username");
// if (username === "collin123") {
//   alert("logged in!");
// } else if (userName === "lucy321") {
//   alert("logged in!");
// } else {
//   alert("no account found");
// }
// let randomNumber = Math.random();
// console.log(randomNumber);

// Math.floor(Math.random() * 4);
// console.log(randomNumber);

// let arr = ["liv", "kamar", "derrick"];
// console.log(arr[randomNumber]);

// if (arr[randomNumber] === "liv") {
//   console.log("hello world");
// }
let ranNUM = Math.floor(Math.random() * 10) + 1;
console.log(ranNUM);
console.log(typeof ranNUM);

let userGuess = prompt("guess the number");
console.log(userGuess);
console.log(typeof userGuess);

//user guess = 5
// math.random = 7
if (userGuess == ranNUM) {
  //this code runs when the statement is true.
  alert("success!");
} else {
  alert("Incorrect guess.");
}
