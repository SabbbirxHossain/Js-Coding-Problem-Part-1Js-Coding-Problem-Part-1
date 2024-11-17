/*
function inchToFeet(inch){
  return inch/12;
}
let inchi  =  40;
console.log(inchToFeet(inchi).toFixed(3));
*/

function inchToFeet(inch){
  const inchFraction = inch/12;
  const inchInteger = parseInt(inchFraction);
  const remainder = inch % 12;
  const result = `The height is ${inchInteger} feet and ${remainder} inch. `;
  return result;
}

console.log(inchToFeet(12));