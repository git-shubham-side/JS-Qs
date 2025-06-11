// Q.1] Write a JavaScript program to get the first n elements of an array. [n can be any positive number ,
// Write a JavaScript program to get the last n elements of an array. [n can be any positive number].

// let n = 3;
// let arr = [7, 8, 9, 6, 4, 4, 5, 7, 8];
// console.log(arr.slice(n));

// ----------------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------------

// Q.2] Write a JavaScript program to check whether a string is blank or not.

// let string = "";
// if (string.length == 0) {
//   console.log("String is Blank");
// } else {
//   console.log("Not Blank");
// }

// ---------------------------------------------------------------------------
// Q.4] Write a JavaScript program to test whether the character at the given (character)
//  index is lower case

// let string = "Shubham";
// idxnum = 3;
// console.log(string.indexOf("S"));
// console.log(string.charAt(idxnum));

// ---------------------------------------------------------------------------
// Q.5] Write a JavaScript program to strip leading and trailing spaces from a string
// let string = "  Shubham Rathod  ";
// console.log(string.trim());

// ---------------------------------------------------------------------------
// Q.6] Write a JavaScript program to check if an element exists in an array or not.
// let arr = [1];
// if (arr.length == 0) {
//   console.log("Array is Empty");
// } else {
//   console.log("Not Empty");
// }

// Q.7] Print the factorial of a number n.
//  [Factorial of a number n is the product of all positive integers less than or equal to
// a given positive integer and denoted by that integer. ]
//  Example:
//  7!(factorialof7)=1x2x3x4x5x6x7=5040
//  5!(factorialof5)=1x2x3x4x5=120
//  3!(factorialof3)=1x2x3=6
//  0! Isalways1

// let num = 7;
// let fact = 0;
// for (let i = 0; i <= num; i++) {
//   fact = i * i;
// }
// console.log(fact);

// 8] Create an input element on the page with a placeholder ”enter your name” and an
// H2 heading on the page inside HTML.
// The purpose of this input element is to enter a user’s name so it should only input
// letters from a-z, A-Z and space (all other characters should not be detected).
// Whenever the user inputs their name, their input should be dynamically visible inside
// the heading.
// [Please note that no other character apart from the allowed characters should be
// visible in the heading

// let input = document.querySelector("input");

// input.addEventListener("input", function () {
//   if (/^[A-Z-a-z]$/.test(input.value)) {
//     console.log(input.value);
//   } else {
//     alert("Wrong Input");
//   }
// });

// 9] Create a new array using the map function whose each element is equal to the
//  original element plus 5

// let array = [7, 8, 9, 6, 5, 4];
// let newarr = [];
// newarr = array.map((el) => {
//   return el + 5;
// });
// console.log(newarr);
// console.log("Hello");
