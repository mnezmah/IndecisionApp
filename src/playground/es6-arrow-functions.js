// // es5 function  -always anonymous
// const square = function(x) {
//  return x * x;
// };

// // es5 function  - second way
// function squareTwo(x) {
//   return x * x;
// };

// console.log(square (3));


// // es6 function - regular  way

// const squareArrowOne = (x) => {
//   return x * x;
// }

// // es6 function - another way - single expression
// // if we have single row, we don't need a fucntion body with {curley brackets}, and we don't need to return it, it returns implicitly (automatically)
// const squareArrow = (x) => x * x; 


// console.log(squareArrow(9));



// // const getFirstName = (fullName) => {
// //  return fullName.split(' ')[0];
// // };


// const getFirstName = (firstName) => firstName.split(' ')[0];

// console.log(getFirstName('Milivoj Smith'));


const add =  (a, b ) => {
  // console.log(arguments);
 return a + b;
}

console.log(add(55, 1, 1001));

const user = {
  name: 'Andrew', 
  cities: ['Philadelphia', 'New York', 'Dublin'], 
  printPlacesLived()  {
    return this.cities.map((city) => this.name + ' has lived in ' + city + '!');
  }
};

console.log(user.printPlacesLived());

const multiplier =  {
  numbers: [2, 4, 6],
  mulitplyBy: 2,
  multiply() {
    return this.numbers.map((number) => this.mulitplyBy * number);
  }
}

console.log(multiplier.multiply());