// //1
// let num = prompt("NUM = ")
 
// if (num % 10 === 0){
//     console.log("good")
// }
// else(
//     console.log("bad")
// )

// //2
// let name1 = prompt("Please Enter Your Name");
// let age  = prompt("Please Enter Your Age");

// alert(`${name1} is ${age} Years Old`)

// //3
// let month = prompt("Enter Month Name");

// switch (month.toLowerCase()) {
//     case "january":
//     case "february":
//     case "march":
//         console.log("Quarter 1");
//         break;
//     case "april":
//     case "may":
//     case "june":
//         console.log("Quarter 2");
//         break;
//     case "july":
//     case "august":
//     case "september":
//         console.log("Quarter 3");
//         break;
//     case "october":
//     case "november":
//     case "december":
//         console.log("Quarter 4");
//         break;
//     default:
//         console.log("Wrong Input");
// }

// //4
// let str = prompt ("Enter Your String")

// if ((str[0] == 'A' || str[0] == 'a') && (str.length > 5)){
//     console.log("Golden String")
// }
// else{
//     console.log("Error! Not a Golden string")
// }
//5
let a = prompt("Enter First number");
let b = prompt("Enter Second number");
let c = prompt("Enter Third number");

function largest(a,b,c){
    if (a>b){
       if (a>c){
        console.log(a, "is the largest")
       }
       else{
        console.log(c, "is the largest")
       }
    }
    else{
        if (b>c){
            console.log(b, "is the largest")
           }
           else{
            console.log(c, "is the largest")
           }
    }
}
largest(a,b,c);