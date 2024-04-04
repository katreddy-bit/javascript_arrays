const num=[1,2,3,-1,4];
const items=num.filter(n=>n>=0).map(n=>({value:n})).filter(n=>n.value>2).map(n=>n.value)
console.log(items);