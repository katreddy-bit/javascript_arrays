const array=[1,2,3,4,5,6,6];
const exclude=6;
// function except(array,exclude){
//     for (let num of array){
//         if (num===exclude) array.pop(num)
//     }
//     return array;
// }
// console.log(except(array,exclude));

function except(array,exclude){
    const output=[];
    for (let num of array){
        if (num !== exclude) output.push(num)
    }
    return output
}
console.log(except(array,exclude));