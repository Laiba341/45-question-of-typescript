// Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.

// import { toASCII } from "punycode";

let magician:string[]=['harry potter','Hermione Granger','Ron Weasley','Albus Dumbledore'];

function make_great ( magicianArray:string[]){

 for(let i=0; i<magicianArray.length;i++){
    
         magician [i]='the great '+magicianArray[i]
}

}
    function show_magicions(magicions:string[]){

    magicions.forEach(element => {
        
        console.log(element);
    });
}
make_great( magician);
show_magicions(magician);