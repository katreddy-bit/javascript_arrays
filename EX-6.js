const array=[1,2,5,11,3,10,4];
console.log(max(array));
// function max(array){
//     let maxnum=0;;
//     for (let num  of array){
//         if (maxnum<num) maxnum=num
//     }
//     return maxnum;
// }


// using reduce function

// function max(array){
//     return array.reduce((accumulater,currentValue)=>{
//         return (accumulater<currentValue) ? currentValue:accumulater

//     },0);
// }

function max(array){
    if (array.length===0) return undefined
    return array.reduce((a,b)=>(a>b)?a:b);
}