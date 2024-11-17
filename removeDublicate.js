function removeDublicate(num){
  const unique = [];
  for(let i of num){
    if(unique.includes(i) === false){
      unique.push(i);
    }
  }
  return unique;
}

let array = [1,2,3,4,5,5,6,7,1,3,8,9,10];
console.log(removeDublicate(array));
