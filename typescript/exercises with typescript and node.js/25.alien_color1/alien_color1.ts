//alien Colors #1: Imagine an alien was just shot down in a game. Create a
//variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
let alien_color:string='green';
if(alien_color==='green'){
    console.log("playerjust earned 5 points");
}
//• Write one version of this program that passes the if test and another that
//fails. 
alien_color='yellow';
//(The version that fails will have no output.)
if(alien_color==='green'){
    console.log("player earned just 5 points");
}