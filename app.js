let favMovie = 'Theri'

let guess  = prompt("Guess my Favourite Movie: ")

while ((guess != favMovie) && (guess != 'quit')){
    guess = prompt("Wrong Guess. Please try again! ")
}
if (guess == favMovie){
    console.log("You Won")
}
else{
    console.log("You Quit")
}