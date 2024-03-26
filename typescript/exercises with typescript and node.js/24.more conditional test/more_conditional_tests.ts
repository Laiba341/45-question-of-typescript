

//Test no 1
//equality and inquality test
console.log("equality test with strings:","Apple"=== "Apple");

//trst no 2
//equality and inquality test
console.log("equality test with strings:",("Apple" as string)!= "orange");

//test no 3
//test using the lower case function
console.log("Lower Case function test::","HELLO".toLowerCase()==="hello")

//test no 4
// Numerical tests involving equality,
console.log("equality test with numbers:", 26===26);
// Numerical tests involving  and inequality,
console.log("inequality test with numbers:", (26 as number)!=35);

//test no 5
//greater than test,
console.log("Greater than test:",10>5);
//less than test,
console.log("less than test:",5>10);

//test no 6
//greater than or equal to
console.log("greater than or equal to test:",10>=10);
//less than or equal to
console.log("greater than or equal to:",5<=10);

//test no 7
//test using "and" operator
console.log("and operator test:",5==5 && 10>5);
//test using "or" operator
console.log("oR operator test:",5===5 || false);

//test no 8
//test whether an item is in a array
const fruits :string[]=['nashpati','banana','amrood'];
console.log('test "nashpati" in the array:',fruits.includes("nashpati"));
//test whether an item is not in a array
console.log('test "apple" is not in the array:',!fruits.includes("apple"));