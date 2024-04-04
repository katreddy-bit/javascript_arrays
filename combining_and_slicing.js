// const num1=[{id:1}];
// const num2=[5,6,7,8];
// const combinig=num1.concat(num2);
// num1[0].id=10;
// const slice=combinig.slice();
// console.log(slice);
// console.log(combinig);

const first=[1,2,3];
const secound =[4,5,6,7];
const combined=[...first,'a','b',...secound];
const copy=[...combined];
console.log(combined);
console.log(copy);