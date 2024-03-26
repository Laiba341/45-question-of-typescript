"use strict";
// Magicians: Make a array of magician’s names. Pass the array to a function
//called show_magicians(), which prints the name of each magician in the array.
Object.defineProperty(exports, "__esModule", { value: true });
let magician = ['harry potter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumbledore'];
function show_magicions(magicions) {
    magicions.forEach(element => {
        console.log(element);
    });
}
show_magicions(magician);
