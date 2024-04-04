const array=[1,2,3,4];
console.log(move(array,0,0))
function move(array,index,offset){
    const position=index+offset;
    if (position>=array.length || position<0){
        return  console.error('invalid off set.....');
    }

    const output=[...array];
    const element=output.splice(index,1)[0];
    output.splice(position,0,element);
    return output

}