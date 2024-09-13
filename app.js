//comparison operator
let favNumber1 = 26;
let favNumber2 = 6;
// greater than
let greater = favNumber1 > favNumber2;
console.log('Is 26 greater than 6? ', greater);

// less than
let lessThan = favNumber1 < favNumber2;
console.log('Is 26 less than 6? ', lessThan);

//greater than or equal to
let greaterEqual = favNumber1 >= favNumber2;
console.log('Is 26 greater than or equal to 6? ', greaterEqual);

//less than or equal to
let lessEqual = favNumber1 <= favNumber2;
console.log('Is 26 less than or equal to 6? ', lessEqual);

// strict equality
let strictEqual = favNumber1 === favNumber2;
console.log(strictEqual);

//loose equality
let looseEquality = favNumber1 == favNumber2;
console.log(looseEquality);

//strict inequality
let strictInequality = favNumber1 !== favNumber2;
console.log(strictInequality);

// loose inequality
let looseInequality = favNumber1 != favNumber2;
console.log(looseInequality);

//and
let and = favNumber1 > 0 && favNumber2 > 0;
console.log(and);

//or
let or = favNumber1 < 0 || favNumber2 > 0;
console.log(or);

//not
let not = (!(favNumber1 == favNumber2));
console.log(not);