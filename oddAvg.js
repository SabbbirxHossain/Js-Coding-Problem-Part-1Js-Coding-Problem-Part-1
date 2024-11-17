function oddavg(num){
  let sum =0;
  const odd = [];
  for(let i of num){
    if(i%2 !== 0){
      odd.push(i);
      sum+=i;
    }
  }
  return sum/odd.length;
}


let numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(oddavg(numbers)); 