//1. Convert the string "123" to a number and add 7.

let num = Number("123");
console.log(num + 7);


//2. Check if the given variable is falsy and return "Invalid" if it is. 

let value =0;
if (!value) {
    console.log("Invalid");
}


//3. Use for loop to print all numbers between 1 and 10, skipping even numbers using continue

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}


//4.Create an array of numbers and return only the even numbers using filter method.

let numbers = [1, 2, 3, 4, 5]
let evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});
console.log(evenNumbers);


//5. Use the spread operator to merge two arrays, then return the merged array.

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let mergedArray = [...array1, ...array2];
console.log(mergedArray);   


//6. Use a switch statement to return the day of the week given a number (1 = Sunday ...., 7 = Saturday).

let day =2;
switch(day) {
case 1:
console.log("Sunday");}
break;
case 2:
console.log("Monday");
break;
case 3:
console.log("Tuesday");
break;
case 4:
console.log("Wednesday");
break;
case 5:
console.log("Thursday");
break;
case 6:
console.log("Friday");
break;
case 7:
console.log("Saturday");
break;
console.log("Invalid day");


//7. Create an array of strings and return their lengths using map method

let words ["a", "ab", "abc"]
let lengths = words.map(word => word.length);
console.log(lengths);


//8. Write a function that checks if a number is divisible by 3 and 5.

function checkNumber(num) {
if (num % 3 === 0 && num % 5 === 0) {
    return "Divisible by both;
} else {
    return not divisible by both;
 }
}
console.log(checkNumber(15));

//9. Write a function using arrow syntax to return the square of a number

const square = (num) => num * num;
console.log(square(5));


//10.Write a function that destructures an object to extract values and returns a formatted string.

function getPersonInfo(person) {
    const { name, age } = person;
    return `${name} is ${age} years old`;
}

const person = {
    name: "John",
    age: 25
};

console.log(getPersonInfo(person));


//11.Write a function that accepts multiple parameters (two or more) and returns their sum.

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5));


//12. Write a function that returns a promise which resolves after 3 seconds with a 'Success' message.

function myPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Success");
        }, 3000);
    });
}

myPromise().then(message => {
    console.log(result);
});

//13. Write a function to find the largest number in an array.

function largestNumber(arr) {
    return Math.max(...arr);
}   
console.log(largestNumber([1, 7, 3, 2, 4]));


//14. Write a function that takes an object and returns an array containing only its keys.

let person = {
    name: "John",
    age: 30,
};
console.log(Object.keys(person));


//15. Write a function that splits a string into an array of words based on spaces.

let sentence = "the quick brown fox";
console.log(sentence.split(" "));






//Part 2: Essay Questions


//1. What is the difference between forEach and for...of? When would you use each?

forEach is used to llob througt array and canot use break or continue 

for...of is used to llob througt array and can use break or continue


//2. What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples.

hoisting is js behavior moveing declaration to the top of the scope

TDZ is that the period where let and const wxist


//3. What are the main differences between == and ===?

== compares values after type and be true

=== compares values and data type without type and be false


//4. Explain how try-catch works and why it is important in async operations.

handles the error without stopping the programing


//5. What’s the difference between type conversion and coercion? Provide examples of each.

conversion:using functions like number() or string()

coercion:it is automatic conversion by js




