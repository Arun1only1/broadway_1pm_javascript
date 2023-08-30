const laptops = [
  {
    name: "Inspiron 3511",
    price: 55000,
    brand: "dell",
  },
  {
    name: "Acer Nitro",
    price: 109000,
    brand: "acer",
  },
  {
    name: "TUF F15",
    price: 205000,
    brand: "asus",
  },
  {
    name: "Vivobook",
    price: 76000,
    brand: "asus",
  },
  {
    name: "Aspire 5",
    price: 87500,
    brand: "acer",
  },
  {
    name: "Modern 14",
    price: 92000,
    brand: "msi",
  },
  {
    name: "Thinkpad X13",
    price: 149000,
    brand: "lenovo",
  },
  {
    name: "Legion 5 PRO",
    price: 188000,
    brand: "lenovo",
  },
  {
    name: "Predator Helios 300",
    price: 169000,
    brand: "acer",
  },
  {
    name: "GP66 Leopard",
    price: 199000,
    brand: "msi",
  },
];

// Increase price of each laptop by 10,000

// const updatedLaptops = laptops.map((item, index, self) => {
//   const newPrice = item.price + 10000;

//   return { ...item, price: newPrice };
// });

// console.log(updatedLaptops);

// update name of Legion 5 PRO to "Yoga 6"

// remove laptops whose price is above 190000
// const newLaptopList = laptops.filter((item, index, self) => {
//   if (item.price < 190000) {
//     return item;
//   }
// });

// console.log(newLaptopList);

// decrease price of MSI modern 14 by 20,000

// sort product from price in descending order

// const laptopList = laptops.sort((a, b) => {
// return a.price - b.price;
//   return b.price - a.price;
// });

// console.log(laptopList);
