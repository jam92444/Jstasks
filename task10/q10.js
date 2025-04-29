const products = [
  {
    id: 1,
    name: "Laptop",
    category: "Electronics",
    price: 1200,
    stock: { warehouse: 5, store: 2 },
  },
  {
    id: 2,
    name: "Shoes",
    category: "Fashion",
    price: 80,
    stock: { warehouse: 20, store: 10 },
  },
  {
    id: 3,
    name: "Smartphone",
    category: "Electronics",
    price: 900,
    stock: { warehouse: 0, store: 5 },
  },
  {
    id: 4,
    name: "T-Shirt",
    category: "Fashion",
    price: 25,
    stock: { warehouse: 15, store: 5 },
  },
];

const filterProduct = products
  .filter(
    (item) =>
      item.category === "Electronics" &&
      item.stock.store + item.stock.warehouse >= 5
  )
  .map((item) => ({
    name: item.name,
    totalStock: item.stock.store + item.stock.warehouse,
  }));


  console.log(filterProduct)