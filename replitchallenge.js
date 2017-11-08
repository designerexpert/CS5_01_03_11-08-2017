function reverseNumber(n) {
    let strNum = n.toString();
    return Number(strNum.split('').reverse().join(''));
  }
  
console.log(reverseNumber(12345));

function reverseNumber0(n) {
    let number = n;
    let reversed = 0;
    while (number !== 0) {
      reversed *= 10;
      reversed += number % 10;
      number -= number % 10;
      number /= 10;
   }
   return reversed;
  }
  
  console.log(reverseNumber0(123456));

  function reverseNumber1(n) {
    let number = n;
    let reversed = 0;
    while (number !== 0) {
      reversed = reversed * 10;             //reversed *= 10;
      reversed = reversed + (number % 10);  // reversed += number % 10;
      number = number - (number%10);        //number -= number % 10;
      number = number / 10;                 // number /= 10;
   }
   return reversed;
  }

  console.log(reverseNumber1(123456));
  