const readline = require('readline');

const vin = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

vin.question('The input should be between 0 and 100: ', (grade) => {
    if (grade > 79) {
        console.log ('you got A')
    }else if (grade >= 60){
        console.log ('you got B')
    }else if (grade >=49){
        console.log ('you got C')
    }else if (grade >= 40){
        console.log ('you got D')
    }else {
    console.log ('you got E')}

    vin.close();
    });