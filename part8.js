let arr = [1,2,3,4,5,6,7,8,9]

// function print(el) {
//     console.log(el)
// }

print = (el) => {
    console.log(el)
}

arr.forEach(print)

//Map
let array = [
    {
        name:"Shreyas",
        marks:98
    },
    {
        name:"Jyotendra",
        marks:99
    },
    {
        name:"Manvi",
        marks:100
    }
]

let gpa = array.map((el) => el.marks/10)
 //

 let a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

 let even  =  a.filter((el) => (el%2 == 0))
// spread

let obj = {...arr}
//rest

function mini (a,b,c,d){
    console.log(arguments)
}