// //Arrow Function 
// const sum = (a,b) => {
//     console.log(a+b);
// }
// // implicit arrow function 
// const mul = (a,b) => (a*b)

// //setTimeout
// console.log("Hello World!")

// // setTimeout(() => {
// //     console.log("MY COMPUTER")
// // },4000)

// // console.log("Welcome to")

// //setInterval

// let id = setInterval(() => {
//     console.log("Hello")
// },2000)
// clearInterval(id)
console.log("Hello World")
let id = setInterval(() => {console.log("Hello World")}, 2000);
console.log("Hello World")
setTimeout(()=>{clearInterval(id)},10000)
console.log("Hello World")