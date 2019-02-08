/**
 * 
 */
"use strict"
let num = "hey";
//alert(Boolean(num));

// if Boolean(password) returns false, user hasn't typed anything'

/*let pro = prompt("Hey boy!");
let con = confirm("You're a psychologist?");

alert(typeof pro);
alert(typeof con);*/

// (con == true) ? alert(Boolean(10)): Boolean("");
showMessage("John", "Hey Deli!");
function showMessage(from, mesg = "hello") {
	alert(from + ": " + mesg);
}

