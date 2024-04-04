const numbers=[1,3,-1,6,8,-4];
const allPositive=numbers.every((num)=>num>=0);
console.log(allPositive);


const atLeastOnePositive=numbers.some((num)=>num>=0);
console.log(atLeastOnePositive);