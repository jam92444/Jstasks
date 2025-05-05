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
  return customers.map(({ customerId, name, orders }) => {
    let totalSpent = 0;
    const itemBreakdown = {};

    orders.forEach(({ items }) => {
      items.forEach(({ name: itemName, price }) => {
        totalSpent += price;
        itemBreakdown[itemName] = (itemBreakdown[itemName] || 0) + 1;
      });
    });

    return {
      customerId,
      name,
      totalSpent,
      itemBreakdown,
    };
  });
}

const data = customerData(customers);

console.log(data);

/*
[
  {
    customerId: 1,
    name: 'Alice',
    totalSpent: 1340,
    itemBreakdown: { Laptop: 1, Mouse: 1, Keyboard: 1 }
  },
  {
    customerId: 2,
    name: 'Bob',
    totalSpent: 345,
    itemBreakdown: { Monitor: 1, Mouse: 1 }
  }
]
*/
