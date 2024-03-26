
//Write a program that creates Objects containing these items.
let person_Name :string = 'tayyaba';
const personName_Array:string[]=['person','hifza','aliyan'];

interface person{
    age: number,
    name: string,
    nationaility:string,
    student:boolean,
}
//ye person object banane ka tarika hai
let person :person ={
    age:17,
    name:'tayyaba',
    nationaility:'pakistani',
    student:true

} 
//print person object
console.log (person);
interface car{
    maker:string,
    color:string,
    automatic:string,
}
//car object
let car ={
    maker:'toyota',
    color:'black',
    automatic:true,
}
//print car
console.log(car);