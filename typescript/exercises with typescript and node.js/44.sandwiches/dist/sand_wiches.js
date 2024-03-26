"use strict";
// Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.
function makeSandwich(item) {
    console.log('\n\nmaking your sandwich with:');
    item.forEach(element => console.log("-" + element));
    console.log('enjoy your sandwich!\n');
}
makeSandwich(['ham', 'cheese', 'lettuce']);
makeSandwich(['turkey', 'bacon']);
makeSandwich(['peanut butter', 'jelly']);
