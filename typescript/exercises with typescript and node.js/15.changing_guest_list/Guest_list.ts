let Guest_list :string[]=['aina','tayyaba','laiba'];
for(let i=0; i<Guest_list.length; i++){
    console.log('Dear mrs'+Guest_list[i] +',\n\nit is our pleasure to invite you in our party .\n\nthank you\n\n')
}
let absent_Guest :string ='aina';
let new_Guest :string ='kunwal';
Guest_list[0]=new_Guest;
for(let i=0; i<Guest_list.length; i++){
    console.log('Dear mrs'+Guest_list[i] +',\n\nit is our pleasure to invite you in our party .\n\nthank you\n\n')
}
console.log(`mrs ${absent_Guest }is not coming to the party.`);