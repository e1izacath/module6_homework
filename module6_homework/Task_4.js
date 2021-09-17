let a =+ prompt('Enter the first number');
let b =+ prompt('Enter the second number');


function showNumbers(from, to) {
  let timerId = setInterval(function(){
    console.log(a);
    if(a==b) {
      clearInterval(timerId);
    }
    a++;
  },1000)  
}
showNumbers(a,b);