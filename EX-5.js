const array=[1,2,3,1,3,2,4,5,6,7,0,8,0];
const searchElement=0

// function count(array,searchElement){
//     let count=0;
//     for (let  num of array){
//         if (num===searchElement) count++

//     }
//     return count;

// }
// console.log(count(array,searchElement));


//   using reduce  
console.log(count(array,searchElement));
function count(array,searchElement){
    return array.reduce((accumulater,currentValue)=>{
        const occurence=(currentValue===searchElement) ? 1:0;
        return accumulater+occurence;
    },0);
}
