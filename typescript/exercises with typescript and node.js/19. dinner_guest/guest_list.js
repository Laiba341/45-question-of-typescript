"use strict";
let Guest_list = ['aina', 'saba', 'tayyaba', 'laiba'];
//for(let i=0; i<Guest_list.length; i++){
// console.log('Dear mrs'+Guest_list[i] +',\n\nit is our pleasure to invite you in our party .\n\nthank you\n\n')
//}
let absent_Guest = 'aina';
let new_Guest = 'kunwal';
Guest_list[0] = new_Guest;
//for(let i=0; i<Guest_list.length; i++){
// console.log('Dear mrs'+Guest_list[i] +',\n\nit is our pleasure to invite you in our party .\n\nthank you\n\n')
//}
// console.log(`mrs ${absent_Guest }is not coming to the party.`);
// console.log ('good news!we find big table so we are invite more guest')
// array mein 3 guest add kiye hain.
Guest_list.unshift('jaweria');
Guest_list.splice(2, 0, 'saba');
Guest_list.push('meriyam');
//yahan per mene 6 guest ke array ko print kerwaya hai.
// for(let i=0; i<Guest_list.length; i++){
// console.log('Dear mrs'+Guest_list[i] +',\n\nit is our pleasure to invite you in our party .\n\nthank you\n\n')
//}
//sorry message to guest for not invting.
// console.log('\nsorry we can not arrange big table,only two peoples will be invited.');
//yahan per  meneguest remove kiye hain.
while (Guest_list.length > 2) {
    let remove_Guest = Guest_list.pop();
    //console.log(`sorry mrs.${remove_Guest},you are not inviting for dinner.`);
}
// hammare bache howe do invited guest.
// for(let i=0; i<Guest_list.length; i++){
//     console.log('Dear mrs'+Guest_list[i] +',\n\n you are still invited.\n\nthank you\n\n')
// }
//mene sare guest array se remove kar diye.
Guest_list.splice(0, 2);
console.log(Guest_list);
//Exercise no 19
//print a message indicating the numberof people you are inviting to dinner.
console.log(`Total number of Guest Are:${Guest_list.length})`);
