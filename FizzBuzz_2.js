// fizzBuzz_2

for (number = 1; number < 101; number += 1)
  if (number % 5 === 0 && number % 3 === 0)
    console.log("FizzBuzz");
  else if (number % 5 === 0 && number % 3 !== 0)
    console.log("Buzz");
  else if (number % 3 === 0)
    console.log("Fizz")
  else 
    console.log(number);

//order was reversed as the clast case was a superset of first case.
