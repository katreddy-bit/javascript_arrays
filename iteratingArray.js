const numbers=[1,2,3,4,5];
for (let num of numbers){
    console.log(num);
}

numbers.forEach((num,index)=>console.log(index,num));