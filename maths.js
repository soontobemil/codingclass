
//const age = parseInt(prompt("How old are you?"));///execute from insise to outside (prompt)
// we use parseint to convert string to a number.

if (isNaN(age) || age <0) { //isNaN = this chekcs whether something is true or flase
  console.log ("please write a real positive number");  /// or || or one or the other
} else if (age < 18) {
    Alert ("You are underage.");
} else if (age >= 18 && age <= 50){ //&& both conditions 
    console.log ("You can drink");
} else if (age >= 51 && age <= 99){
    console.log ("You are too old to drink");
} else if (age === 100){ //equal sign is === (100%) or !== (if age is not)
    console.log ("Dammm Son!!!!");
} else if (age > 100){
    console.log ("Invalid Age");
}
