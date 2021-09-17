let arr  = [12, 15, 5, 11 , null, 'meow', 123, NaN];


function showAmountOfNumbers(odd, even, zero) {
   odd = 0; 
   even = 0;
   zero = 0;
for(let i = 0; i < arr.length; i++) {
  if(typeof arr[i] === 'number' && !isNaN(arr[i])) {
    if(arr[i]%2 === 0) {
      even++;
    } else {
      odd++;
    }    
  }
}
console.log(`Even: ${even}`);
console.log(`Odd: ${odd}`);
console.log(`Other: ${arr.length-odd-even}`);
}
  
showAmountOfNumbers();