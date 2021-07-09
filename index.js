var exp1 = "hello";
var exp2 = "  FRIENDS";

//to change text to uppercase
 let test = exp1.toUpperCase();
 console.log("Text in uppercase ",test);
 
 //to change text to lowercase
 let test1 = exp2.toLowerCase();
  console.log("Text in lowercase",test1);

 //to display a particular letter in a word
 console.log(exp1.charAt(1));

 //to display only the selected letter in a word
 let test2=exp1.slice(0,4);
 console.log(test2);

 // to display the string in a arrays of string
 let test3 =exp2.split();
 console.log(test3);

 //to remove the white spaces in a string
 let test4 =exp2.trim();
 console.log(test4);


//to returns the position of the first occurrence of a specified value in a string.
 let test5 = exp1.indexOf("o");
 console.log(test5);

 //to return the strings between the given value
 let test6 = exp1.substr(1,4)
 console.log(test6);


 //  to concatenating two strings
let test8 = exp1.concat(' ', exp2);
console.log(test8); 

//to replace a letter
let test9 = exp1 .replace("l","o");
console.log(test9);
let test0 = exp1.replaceAll("l","o");
console.log(test0);