let firstName = prompt("What is your first name?");
console.log(firstName);
document.write("Hello " + firstName + ", how goes it?");

// ------------------------------------------------------------------
// STRUCTURE OF AN IF-STATEMENT (CONDITIONAL)

// if (this is true) {do this code} <-- CAN BE WRITTEN LIKE THIS BUT...

// NORMALLY WRITTEN LIKE THIS FOR READABILITY
// if (firstName == "Kassie"){
//     document.write("Hiya teacher!")
// }

// ------------------------------------------------------------------

if (firstName == "Kassie"){
    document.write("Hiya Teach!");
} else if (firstName == "Ben") {
    document.write("YOU ROCK SO MUCH!");
} else {
    document.write("HOWDY Y'ALL.");
}

let age = prompt("How old are you?");
if (age == 33) {
    document.write("You are 33 KASSIE.");
} else {
    document.write("You are " + age + " years old.");
}