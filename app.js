console.log('Hello Node!');

const profileDataArgs = process.argv.slice(8, process.argv.length);
console.log(profileDataArgs);


// const animalArray = ['dog', 'cat', 'pig'];

// animalArray.push('cow');

// const personObj = {
//   name: 'Lernantino',
//   age: 99
// };

// personObj.age = 100;
// personObj.occupation = 'Developer';

// Notice the lack of parentheses around the `profileDataArr` parameter?
const printProfileData = profileDataArr => {
    // This...
    for (let i = 0; i < profileDataArr.length; i += 1) {
      console.log(profileDataArr[i]);
    }
  
    console.log('================');
  
    // Is the same as this...
    profileDataArr.forEach((profileItem) => {
      console.log(profileItem)
    });
  };
  
printProfileData(profileDataArgs);

// const message = 'Hello Node!';

// if (true === true) {
//   const message = 'Hello ES6!';
//   let sum = 5;
//   sum += 10;
//   console.log(message);
//   console.log(sum);
// }

// console.log(message);
// console.log(sum);



// var is function-scoped, so redeclaring it in a block will cause its value outside the block to change as well:

var one = 'one: declared outside the block';

if (true === true) {
  var one = 'one: declared inside the block'; // notice: we redeclare 'one' here
  console.log(one); // prints 'one: declared inside the block'
}

console.log(one); // also prints 'one: declared inside the block', because the variable was redeclared in the 'if' block. The outer 'var' variable was therefore destroyed and replaced by inner var variable.

// 'let' is block-scoped, so redeclaring a 'let' variable inside of a block creates a different 'let' variable with the same name whose scope is inside the block:

let two = 'two: declared outside the block';

if (true === true) {
 two = 'two: declared inside the block';
  console.log(two); // prints 'two: declared inside the block'
}

console.log(two); // prints 'two: declared outside the block', because two declared inside the block is a separate variable. The 'let' variables are unrelated and therefore are unaffected by each other.
