// 2 process.argv
var sum;
sum = process.argv.slice(2).map(Number).reduce((res, e) => res + e);
console.log(sum);