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

function customerData(customers) {
  let sample = [];
  customers.forEach(({ orders }) => {
    orders.forEach(({ items }) =>
      items.forEach((product) => sample.push(product))
    );
  });
  const result = customers.map(({ customerId, name, orders }) => ({
    customerId,
    name,
    totalSpent: orders
      .map(({ items }) =>
        items.map(({ price }) => price).reduce((acc, val) => acc + val, 0)
      )
      .reduce((acc, val) => acc + val, 0),
    itemBreakdown: sample.reduce((acc, item) => {
      acc[item.name] = 1;
      return acc;
    }, {}),
  }));

  return result;
}

const data = customerData(customers);

console.log(data);
