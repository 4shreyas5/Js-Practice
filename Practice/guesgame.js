const num = prompt("Enter maximum number: ");

// Generating random number 
const random  = Math.floor(Math.random() * num ) + 1;

let guess = prompt("Guess the number: ")

while (true){
    if (guess == "Quit"){
        console.log("You Quit The Game");
        break;
    }
    
    if (guess == random){
        console.log("You are right ! The number was",random)
        break;
    }
    else if(guess<random){
        guess = prompt("Hint: Your guess was too small! Please try again...")
    }
    else {
        guess = prompt("Hint: Your guess was too big! Please try again...")
    }
}