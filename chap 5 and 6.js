/* program to generate a multiplication table
upto a range */

// take number input from the user
const number = parseInt(prompt('Enter an integer: '));

// take range input from the user
const range = parseInt(prompt('Enter a range: '));

//creating a multiplication table
for(let i = 1; i <= range; i++) {
    const result = i * number;
    console.log(`${number} * ${i} = ${result}`);
}
//  recursive function using loop 
function countup(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countup(n - 1);
      countArray.push(n);
      return countArray;
    }
  }
  console.log(countup(10));

  // Function that outputs the value one
const outputOne = () => {
    console.log(1);
  };
  
  // Function that outputs the value two
  const outputTwo = () => {
    console.log(2);
  };
  
  // Function that outputs the value three and invokes the first two functions
  const outputThreeAndInvoke = () => {
    console.log(3);
  
    // Invoking the first two functions
    outputOne();
    outputTwo();
  };
  
  // Function that outputs the word four
  const outputFour = () => {
    console.log('four');
  };
  
  // Using setTimeout to invoke functions with a delay
  setTimeout(outputOne, 0); // Invokes the first function immediately
  setTimeout(outputThreeAndInvoke, 1000); // Invokes the third function after a delay of 1000 milliseconds (1 second)
  
  // Invoking the fourth function
  outputFour();

  // Create a variable for the max value
let maxValue = 5;

//  Generate a random number for the solution
let solution = Math.floor(Math.random() * maxValue) + 1;
console.log("Solution:", solution); // Comment out for the final version

//  Create a variable to track whether the answer is correct
let isCorrect = false;

//  Use a while loop to iterate a prompt for user input
while (!isCorrect) {
    // Prompt the user to enter a number between 1 and the max value
    let userGuess = prompt(`Guess a number between 1 and ${maxValue}:`);
    userGuess = Number(userGuess); // Convert the prompt response to a number

    //  Check if the user's guess is correct or not
    if (userGuess === solution) {
        isCorrect = true;
        console.log("Congratulations! You guessed the correct number:", solution);
    } else {
        // Provide feedback and continue the loop
        if (userGuess > solution) {
            console.log("Too high! Try again.");
        } else {
            console.log("Too low! Try again.");
        }
    }
}








//practice exercise 5.2
//  Set the starting counter to 0
let counter = 0;

//  Create a variable for the step value
let step = 10;

//  Add a do while loop to increment the counter by the step amount
do {
    console.log("Counter:", counter);
    counter += step;
} while (counter < 100);

//  Continue to loop until the counter is equal to or more than 100



//practice exercise 5.3

//  Setup a blank array, myWork
let myWork = [];

// Use a for loop to create a list of 10 objects
for (let i = 1; i <= 10; i++) {
    //  Use a ternary operator to alternate the status value
    let status = i % 2 === 0 ? false : true;

    // Create a lesson using a temporary object variable
    let lesson = {
        name: `Lesson ${i}`,
        status: status,
    };

    //  Push the object to the myWork array
    myWork.push(lesson);
}

//  Output the array to the console
console.log(myWork);




//practice exercise 5.4

// Step 1: Create an empty array, myTable, to hold the table data
let myTable = [];

// Step 2: Set variable values for the number of rows and columns
let numRows = 3;
let numColumns = 4;

// Step 3: Set up a counter variable with an initial value of 0
let count = 0;

// Step 4: Create a for loop to construct each row of the table
for (let i = 0; i < numRows; i++) {
    // Create a new temporary array (tempTable) to hold each row of data
    let tempTable = [];

    // Step 5: Nest a second loop within the first to count the columns
    for (let j = 0; j < numColumns; j++) {
        // Increment the counter and add the value to the tempTable array
        counter++;
        tempTable.push(count);
    }

    // Push the tempTable array (representing a row) into the myTable array
    myTable.push(tempTable);
}

// Output the generated table to the console
console.log(myTable);






//practice exercise 5.5
// Create a grid array variable
let grid = [];

//  Set a value of 64 for the number of cells
let totalCells = 64;

//  Set a counter to 0
let cou = 0;

//  Create a global variable for the row array
let row = [];

//  Create a loop to populate the grid
for (let i = 0; i < totalCells + 1; i++) {
    //  Add an outer if statement to check if the counter is divisible by 8
    if (counter % 8 === 0) {
        // : Inside the outer if statement, add another if statement to check if the row is defined
        if (row !== undefined) {
            // Add the row to the main grid array
            grid.push(row);
        }

        // Clear the row array if the counter is divisible by 8
        row = [];
    }

    //  Increment the main counter by 1
    cou++;

    //: Push the value of the counter to the row array
    row.push(cou);

    //  Check if the value of the counter is equal to the total number of columns
    if (counter === 8) {
        // Add the current row to the grid
        grid.push(row);
    }
}
//  Output the grid to the console
console.log(grid);




//practice exercise 5.6

//  Create an empty array
let myArray = [];

//  Run a loop 10 times, adding a new incrementing value to the array
for (let i = 1; i <= 10; i++) {
    myArray.push(i);
}

//  Log the array into the console
console.log("Array:", myArray);

//  Use the for loop to iterate through the array and output into the console
console.log("Using for loop:");
for (let j = 0; j < myArray.length; j++) {
    console.log(myArray[j]);
}

//  Use the for of loop to output the value into the console from the array
console.log("Using for of loop:");
for (let value of myArray) {
    console.log(value);
}


//practice exercise 5.7

// Step 1: Create a simple object with three items
let myObject = {
    name: "Anoosh",
    age: 22,
    city: "Karachi"
};

// Step 2: Using the for in loop, get the properties' names and values and output to the console
console.log("Object properties and values:");
for (let key in myObject) {
    console.log(`${key}: ${myObject[key]}`);
}

// Step 3: Create an array containing the same three items
let Array = ["Arhama", 22, "Karachi"];

// Using the for loop to output the values from the array into the console
console.log("\nArray values:");
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

//practice exercise 5.8
// Set up a string variable to use as output
let outputString = "";

//  Select a number to skip, and set that number as a variable

let skipNumber = 7;

//  Create a for loop that counts to 10

for (let i = 1; i <= 10; i++) {
    //  Add a condition to check if the value of the looped variable is equal to the number to be skipped
    
    if (i === skipNumber) {
      
        //  If the number is to be skipped, continue to the next number
        continue;
    }

    //  As you iterate through the values, append the new count value to the end of the main output variable
    outputString += i;
}

//  Output the main variable after the loop completes
console.log("Output with continue:", outputString);

//  Reuse the code, but change the continue to break and see the difference
outputString = "";

for (let i = 1; i <= 10; i++) {
    // Change continue to break
    if (i === skipNumber) {
        // Step 5: If the number is to be skipped, break out of the loop
        break;
    }

    //  As you iterate through the values, append the new count value to the end of the main output variable
    outputString += i;
}

// Output the main variable after the loop completes
console.log("Output with break:", outputString);


