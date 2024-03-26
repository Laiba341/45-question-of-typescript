"use strict";
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
let alienColor = 'green';
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is yellow, print a message that the player earned 10 points.
if (alienColor === 'green') {
    console.log('the player earned 5 points.');
}
else if (alienColor === 'yellow') {
    console.log('the player earned 10 points.');
}
else if (alienColor === 'red') {
    console.log('the player earned 15 points.');
}
else {
    console.log('please select right color');
}
//version 2 of the programe
alienColor = 'yellow';
if (alienColor === 'greeen') {
    console.log('the player earned 5 points.');
}
else if (alienColor === 'yellow') {
    console.log('the player earned 10 points.');
}
else if (alienColor === 'red') {
    console.log('the player earned 15 points.');
}
else {
    console.log('please select right color');
}
alienColor = 'red';
if (alienColor === 'greeen') {
    console.log('the player earned 5 points.');
}
else if (alienColor === 'yellow') {
    console.log('the player earned 10 points.');
}
else if (alienColor === 'red') {
    console.log('the player earned 15 points.');
}
else {
    console.log('please select right color');
}
//• Write three versions of this program, making sure each message is printed for the appropriate color alien.
