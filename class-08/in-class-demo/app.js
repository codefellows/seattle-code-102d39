let firstName = "";
let age = prompt("How old are you?");

function askName() {
    firstName = prompt("What is your first name?");
    console.log(firstName);
    document.write("Hello " + firstName + ", how goes it?");
}

// ------------------------------------------------------------------
// STRUCTURE OF AN IF-STATEMENT (CONDITIONAL)

// if (this is true) {do this code} <-- CAN BE WRITTEN LIKE THIS BUT...

// NORMALLY WRITTEN LIKE THIS FOR READABILITY
// if (this is true){
//    do this code;
// }

// EXAMPLE:
// if (firstName == "Kassie"){
//     document.write("Hiya teacher!")
// }

// ------------------------------------------------------------------

function customMessage(){
    let message = "";
    if (firstName == "Kassie"){
        message = "Hiya Teach!"
        document.write(message);
    } else if (firstName == "Ben") {
        message = "YOU ROCK SO MUCH!";
        document.write(message);
    } else {
        message = "HOWDY Y'ALL.";
        document.write(message);
    }
}

function userAge(){
    if (age == 33) {
        document.write("You are as old as Kassie."); // I changed this line from what we had in class, so it would make a little more sense.
    } else {
        document.write("You are " + age + " years old.");
    }
}

// let usersAge = userAge();
// console.log("This is result of function: ", usersAge);

// function printName(givenName){
//     console.log("The name you gave me is:", givenName);
// }

// // printName("Your name goes here");
function ratePage(){
    let userNumber = prompt("How many stars would you rate my page? 1-5");
    for (let i = 1; i <= userNumber; i++){
        document.write("<img class='star-pic' src='star.jpeg' />");
    }
}

// for (let i = 1; i < 5; i++){
    // execute this code
// }

// i = 1 | TRUE | execute code | i = 2
// i = 2 | TRUE | execute code | i = 3
// i = 3 | TRUE | execute code | i = 4
// i = 4 | TRUE | execute code | i = 5
// i = 5 | FALSE | BREAK LOOP


