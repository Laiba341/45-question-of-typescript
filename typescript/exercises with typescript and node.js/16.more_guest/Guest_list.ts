let Guest_list :string[]=['aina','saba','tayyaba','laiba'];
//for(let i=0; i<Guest_list.length; i++){
   // console.log('Dear mrs'+Guest_list[i] +',\n\nit is our pleasure to invite you in our party .\n\nthank you\n\n')
//}
let absent_Guest :string ='aina';
let new_Guest :string ='kunwal';
Guest_list[0]=new_Guest;
for(let i=0; i<Guest_list.length; i++){
    console.log('Dear mrs'+Guest_list[i] +',\n\nit is our pleasure to invite you in our party .\n\nthank you\n\n')
}
console.log(`mrs ${absent_Guest }is not coming to the party.`);
console.log ('good news!we find big table so we are invite more guest')
Guest_list.unshift('jaweria');
Guest_list.splice(2,0,'saba');
Guest_list.push('meriyam');
for(let i=0; i<Guest_list.length; i++){
    console.log('Dear mrs'+Guest_list[i] +',\n\nit is our pleasure to invite you in our party .\n\nthank you\n\n')
}