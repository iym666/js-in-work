'use strict';

const now = new Date('2023-10-22');
  // new Date.parse('2023-10-22')

//setters
console.log(now.setHours(40));
console.log(now)

// getters
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getHours());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

let start = new Date();

for (let i = 0; i < 100000; i++) {
  let some = i ** 3;
}

let end = new Date();

alert(`Loop worked for ${end - start} millsec`); // 4