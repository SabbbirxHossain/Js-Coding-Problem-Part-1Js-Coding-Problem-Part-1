function leapYear(year){
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) { return "Leap Year"; } else { return "Not Leap year"; }
}

let  Year = 1700;
console.log(leapYear(Year));