const numbers=[1,2,3,1,4,5];
// console.log(numbers.indexOf(1));
// console.log(numbers.lastIndexOf(1));
// console.log(numbers.indexOf(1,2));
// console.log(numbers.includes(1));
const obj=[
    {id:1,name:'a'},
    {id:2,name:'b'}
];
const course=obj.find(function(obj){
    return obj.name==='a'
})
const course1=obj.find(function(obj){
    return obj.name==='x'
})
const course2=obj.findIndex(obj => obj.name==='a');
console.log(course);
console.log(course1);
console.log(course2);