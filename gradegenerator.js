// Import the readline module
const readline = require('readline');


// Create an interface to read user input
const vin = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// Prompt the user to input a grade between 0 and 100
vin.question('The input should be between 0 and 100: ', (grade) => {
    /// Check the grade and print the corresponding message
    if (grade > 79) {
        console.log ('you got A')
    }
    else if (grade >= 60){
        console.log ('you got B')
    }
    else if (grade >=49){
        console.log ('you got C')
    }
    else if (grade >= 40){
        console.log ('you got D')
    }
    else {
    console.log ('you got E')}

  // Close the interface to end the program
    vin.close();
    });