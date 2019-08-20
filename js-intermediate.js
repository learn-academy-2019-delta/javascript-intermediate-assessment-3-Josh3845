// ASSESSMENT 3: INTERMEDIATE JAVASCRIPT
// Coding practical questions

// Be sure to use all given test cases

// 1. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]



// 2. Write a function called oddChecker that takes in an array and returns a new array of only odd numbers.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [9, 7, 199, -9]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [7, 23, -823]
oddChecker = (odd) => {
 let find = odd.filter(odds => {
    if(odds % 2 !== 0){
      return find
    }else {
      return "hi"
    }
  })
}
console.log(oddChecker(fullArr1));


// 3. Given the object below, complete the console.log to find specific information:

var bicycle = {
	type: "Roadbike",
	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
	wheels: {
		count: 2,
		specs: ["road tires", "AX-7563", "80-115 PSI"],
		brand: "Trek"
	}
}

// Log the type of bicycle:
console.log(bicycle.type)

// Log the bell:
console.log(bicycle.gear[2])

// Log the PSI:
console.log(bicycle.wheels.specs[2])


// 4. Write a function that takes one argument of type array and returns the contents of that array in reverse order.

var originalArray1 = [1, 2, 3, 4, 5, 6, 7]
// Expected output: [7, 6, 5, 4, 3, 2, 1],
var originalArray2 = ["a", "t", "l", "e", "d"]
// Expected output: ["d", "e", "l", "t", "a"]

reverse = (revArr) => {
  let reversed = revArr.reverse()
  return reversed
}
console.log(reverse(originalArray2));

// 5. Write the code that would make this test pass.

describe("multTwo", () => {
    test ("returns an array with all the numbers multiplied by two", () => {
        expect(multTwo([3, 4, 5])).toEqual([6, 8, 10])
        expect(multTwo([23, -9, 0])).toEqual([46, -18, 0])
        expect(multTwo([4.5, -4.5, 12])).toEqual([9, -9, 24])
    })
})

let num = [3,4,5]
multTwo = (multi) => {
  let final = multi.map(num => num *2)
  return final
}
console.log(multTwo(num));

// 6. Write a function called letterCounter that logs the number of times the letter "l" appears in ourString.

var ourString = "Hello Learn Students!"
// Expected output: 3

letterCounter = (find) => {
  let letter = find.split("")
  final = letter.filter(letter => letter.toLowerCase().includes("l"))
  return final.length

}
console.log(letterCounter(ourString));

// 7. Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "lamas"
// Expected output: “am”


middle = (mid) => {
  let center = mid.length / 2.0
  // let thisLetter = Math.floor(center)
  let thisLetter = Math.floor(center)
    let otherLetter = center - 1
    // console.log(center);
  if(center % 2 !== 0){

    return mid[thisLetter]
  }
    else if(center % 2 === 0) {
console.log(center);
      return mid[otherLetter].join(mid[center])
      console.log(center);
    }
}


console.log(middle(middleLetters2));
// After many differnet variations of the above and running tests I somehow have an issue with the if and or else if statement.  I also know the join function isn't correct.  


// 8. Write a program to get the area of a sphere using object classes. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)

let sphere = {sphere1: 8, sphere2: 12, sphere3: 15}
let area = 3.14

 finArea = () => {
   console.log(sphere.sphere1);
 }
// not sure how to get started on this one

// 9. Use object destructuring to return the nested values of specs. Expected output: 4, "manual"
// Don't overthink this one, it's just destrcturing practice.

var myCar = {
  make: "VW",
  model: "Jetta",
  specs: {
    doors: 4,
    transmission: "manual",
  }
}

const {doors} = myCar.specs
// console.log(myCar.specs.doors);

console.log(doors);

// 10. Stretch: Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []
