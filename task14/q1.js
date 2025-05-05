const items = [
    { category: 'Fruit', name: 'Apple' },
    { category: 'Vegetable', name: 'Carrot' },
    { category: 'Fruit', name: 'Banana' }
];

function res(items){
    const result = {};

    items.forEach(({category,name}) => {
        if(!result.hasOwnProperty(category)){
            result[category] =[]
        }
        result[category].push(name)
        
    });

    console.log(result)
}

res(items)