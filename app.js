console.log("Hello World!\n==========\n");

// Exercise 1 and 3 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 0; i < 100; i++) {
  if (i % 2 == 1) {
    console.log(i);
  }
}

let num = 1;
while (num <= 100) {
  if (num % 2 == 1) {
    console.log(num);
  }
  num++;
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(`${i}FIZZBUZZ`);
  } else if (i % 5 == 0) {
    console.log(`${i}BUZZ`);
  } else if (i % 3 == 0) {
    console.log(`${i}FIZZ`);
  }
}

//Exercise 4 Section
console.log("EXERCISE 4:\n==========\n")
let value = Math.round(Math.random() * 500); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let i = 1; i <= n; i++) {
  if (i == value) {
    console.log(`Found Value ${value}`);
    break;
  }
  if (i == n){
    console.log(`Did not find ${value} within 1-${n}`);
  }
}

//Exercise 5 Section (bonus)
console.log("EXERCISE 5:\n==========\n")
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);


for (let i = start; i <= end; i++){
    let output = "";

    if (i % fizzDivisor == 0){
        output += "FIZZ";
    }
    if (i % buzzDivisor == 0){
        output += "BUZZ";
    }
    console.log(`${i} ${output}`);
}

console.log(fizzDivisor, buzzDivisor);