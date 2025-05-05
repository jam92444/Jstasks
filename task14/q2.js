const a = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];
const b = [{ id: 1, age: 25 }, { id: 2, age: 30 }];


function merge(items1,item2){
    const result = items1.map((person)=> ({
        name: person.name,
        age:  item2.find(({id})=> id === person.id ).age
    }))
    console.log(result)
}
merge(a,b)