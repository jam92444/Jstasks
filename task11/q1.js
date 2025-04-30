let products = [
  {
    id: 1,
    productName: "ABC",
    qty: 2,
    priceId: 3,
  },
  {
    id: 2,
    productName: "DEF",
    qty: 5,
    priceId: 2,
  },
  {
    id: 3,
    productName: "GHI",
    qty: 1,
    priceId: 1,
  },
  {
    id: 4,
    productName: "JKL",
    qty: 6,
    priceId: 2,
  },
];

let priceList = [
  {
    priceId: 1,
    price: 10,
  },
  {
    priceId: 2,
    price: 15,
  },
  { priceId: 3, price: 12 },
];

const result = products.map(({priceId,productName, ...item}) => ({
  ...item,
  productName:productName.toLowerCase(),
  totalPrice: priceList.find((id) => id.priceId === priceId).price * item.qty,
  price: priceList.find((price) => price.priceId === priceId).price,
}));

console.log(result)