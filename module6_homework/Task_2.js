function simpleNumber(num) {
  if(num === 0 || num === 1 || num > 999) {
  console.log('Error');
  return false;
} else if(num===2) {
  console.log(`${num} is a simple number`);
  return false;
} else if(num > 2 && num % 2 ===0) {
  console.log(`${num} is not a simple number`);
  return false;
} else {
  for(let i=1; i < num; i++) {
   do{    
     i++ 
     a = num % i;     
   } while(a!=0);
   if(i==num) {
    console.log(`${num} is a simple number`);
   } else {
    console.log(`${num} is not a simple number`);
   } return false;
    }
  }
}

simpleNumber(6);