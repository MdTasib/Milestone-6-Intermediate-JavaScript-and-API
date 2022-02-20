// 1
const numbers = [1, 2, 3, 4, 55, 77, 22, 44, 11, 9];

const bigNumber = numbers.filter(number => number > 20);
console.log(bigNumber);

// 2
const products = [
	{ name: "pen drive", price: 650, color: "silver" },
	{ name: "mobile", price: 6000, color: "black" },
	{ name: "laptop", price: 40000, color: "Silver" },
	{ name: "pen", price: 5, color: "white" },
	{ name: "note book", price: 50, color: "white" },
];

const filterProductPrice = products.filter(product => product.price < 100);
console.log(filterProductPrice);

////////////
// const filterProductColor = products.filter(
// 	product => product.color == "silver"
// );

//////////////
// const filterProductColor = products.filter(product => {
// 	const productColor = product.color.toLowerCase();
// 	return productColor == "silver";
// });

const filterProductColor = products.filter(
	product => product.color.toLowerCase() == "silver"
);

console.log(filterProductColor);
