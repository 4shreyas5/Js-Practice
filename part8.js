let arr = [1,2,3,4,5,6,7,,8,9]

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
