const courses=[
    {id:1,
    name:'node.js'},
    {id:2,name:'javascipt'}
];
courses.sort((a,b)=>{
    if (a.name<b.name) return -1;
    if (a.name>b.name) return 1;
    return 0;
});
console.log(courses);
