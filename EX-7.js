const movies=[
    {title:'a',year:2018,rating:5.0},
    {title:'b',year:2018,rating:3.5},
    {title:'c',year:2017,rating:3.0},
    {title:'d',year:2018,rating:4.5},
    {title:'e',year:2017,rating:5.0},
];
// function pick(movies){
//     const output=[];

//     for (let item  of movies){
//         if (item.year===2018 && item.rating>4) output.push(item.title)
//     }
//     return output.sort().reverse();
// }
// console.log(pick(movies));
const output=movies
    .filter(m=>m.year===2018 && m.rating>=4)
    .sort((a,b)=>a.rating-b.rating)
    .map(m=>m.title);
console.log(output);
