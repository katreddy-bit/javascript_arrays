const array=[1,2,3,4,5,6,7];
const searchElement =0;
function includes(array,searchElement){
    for (let num of array){
        if (num===searchElement) return true
    }
    return false;
}
console.log(includes(array,searchElement));