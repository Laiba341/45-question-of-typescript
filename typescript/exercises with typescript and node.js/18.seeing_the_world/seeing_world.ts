//store the location in a array make sure the array is not alphabetical order.
let places:string[]=['Italy','germony','agra','eifel tower','times square'];
//print array in its original order.
console.log( 'original '+ places);
//print array in alphabetical order without modifying the actual list.
console.log('copy '+[...places].sort());//...places].sort()this condition make copy the actual list.
//show that your array is still in its original order by printing it.
console.log('original '+ places);
// print your array in reverse alphabetical order with out changing the order of the original list.
console.log('copy '+[...places].sort().reverse());
//show that your array is still in its original order by printing itagain.
console.log('original '+ places);
//reverse the order of your list. print the array to show that its order has changed.
console.log('original '+places.reverse());
//reverse the order of your list again. print the list  to show its back to its original order.
console.log('original '+places.reverse());
//sort your array so its stored in alphabetical order.print the array to show that its order has been changed.
console.log('original '+places .sort());
//sort to change your so its sorted in reverse alphabetical order .print the list to show that its order has changed.
console.log('original '+places .sort().reverse());