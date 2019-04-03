const people = [
    {age: 46,name: 'roger'},
    {age: 99,name: 'tiger'},
    {age: 33,name: 'don'},
    {age: 28,name: 'hei'}
]

var orderPeople = function(people){
    return people.sort((a,b)=>{
        return a.age - b.age;
    })
}
console.log(orderPeople(people));