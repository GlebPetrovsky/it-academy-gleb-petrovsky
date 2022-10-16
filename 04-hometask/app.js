const str = '1';
const num = 1;
const boolTrue = true;
const boolFalse = false;

console.log(str + boolTrue, str + num, num + boolTrue, num + boolFalse);

console.log(str * boolTrue, str * num, num * boolTrue, num * boolFalse);

console.log(str / boolTrue, str / num, num / boolTrue, num / boolFalse);

console.log(+str, Number(str));
console.log(String(num));
console.log(Boolean(str), Boolean(num));
