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

function printName(givenName){
    console.log("The name you gave me is:", givenName);
}

// printName("Your name goes here");

function addNumbers(num1, num2){
    let total = num1 + num2;
    console.log(total);
}

addNumbers(5, 5);
addNumbers(1);
addNumbers("three", "four");

