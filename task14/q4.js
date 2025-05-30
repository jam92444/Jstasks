const customers = [
  {
    customerId: 1,
    name: "Alice",
    orders: [
      {
        orderId: 101,
        date: "2024-05-15",
        items: [
          { name: "Laptop", price: 1200 },
          { name: "Mouse", price: 40 },
        ],
      },
      {
        orderId: 102,
        date: "2024-04-10",
        items: [{ name: "Keyboard", price: 100 }],
      },
    ],
  },
  {
    customerId: 2,
    name: "Bob",
    orders: [
      {
        orderId: 103,
        date: "2024-05-03",
        items: [
          { name: "Monitor", price: 300 },
          { name: "Mouse", price: 45 },
        ],
      },
    ],
  },
];

const items = customers
  .map(({ orders }) => orders)
  .flat()
  .map(({ items }) => items)
  .flat()
  .map(({ name }) => name)
  .flat();

//uniqe value
const unique = [...new Set(items)];
console.log("unique: ", unique);

// no of product sold in count
const count = items.reduce((acc, val) => {
  acc[val] = (acc[val] || 0) + 1;
  return acc;
}, {});
console.log("Items Count: ", count);


// customer orders
const customerOrders = (obj) => {
  const newObj = {};

  obj.forEach(({ name, orders }) => {
    newObj[name] = {};
    orders.forEach(({ orderId, items }) => {
      newObj[name][orderId] = items.map(({ name }) => name);
    });
  });
  return newObj;
};
const orders = customerOrders(customers);
console.log("Customer Orders: ", orders);


//average order value
const averageOrderValue = (customer) => {
  const result = customer.map(({ name, orders }) => ({
    name,
    averageOrderValue:
      orders.reduce(
        (acc, val) =>
          acc + val.items.reduce((acc1, val1) => acc1 + val1.price, 0),
        0
      ) / orders.length,
  }));
  return result;
};
console.log("Average Order Value: ", averageOrderValue(customers));


//Grouping items with name 
const GroupItemWithName = (customer, unique) => {
  const finalObj = {};

  for (const customerName in customer) {
    const purchases = customer[customerName];
    for (const key in purchases) {
      const items = purchases[key];
      unique.forEach((prod) => {
        if (items.includes(prod)) {
          if (!finalObj[prod]) {
            finalObj[prod] = [];
          }
          finalObj[prod].push(customerName);
        }
      });
    }
  }

  return finalObj;
};
console.log("Grouping item with name: ", GroupItemWithName(orders, unique));


// orders that includes a mouse
const filterOrderByProduct = (orders, product) => {
  const finalObj = [];

  for (const customerName in orders) {
    const purchases = orders[customerName];
    for (const key in purchases) {
      const items = purchases[key];
      if (items.includes(product)) {
        finalObj.push({
          name: customerName,
          orderId: key,
        });
      }
    }
  }
  return finalObj;
};
console.log(
  "Customers who ordered mouse: ", filterOrderByProduct(orders, "Mouse")
);


//customer who ordered only once
const orderOnce = (orders) => {
  const result = orders
    .filter(({ orders }) => orders.length < 2)
    .map(({ customerId, name }) => ({ customerId, name }));
  return result;
};
console.log("\n Ordered Only Once: ", orderOnce(customers));



//product bought more than once
const trendyProduct = (count) => {
    const data = []
    for(const key in count){
        if(count[key] > 1){
            data.push(key)
        }
    }
    return data
};
console.log("Item bought more than once: ",trendyProduct(count));
