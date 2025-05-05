const items = [
    { category: 'Fruit', name: 'Apple' },
    { category: 'Vegetable', name: 'Carrot' },
    { category: 'Fruit', name: 'Banana' }
];

function pair(items){
    const result = {};

    items.forEach(({category,name}) => {
        if(!result.hasOwnProperty(category)){
            result[category] =[]
        }
        result[category].push(name)
        
    });

    return result
}

const data = pair(items)
console.log(data)