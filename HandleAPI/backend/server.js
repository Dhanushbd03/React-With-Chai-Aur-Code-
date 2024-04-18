import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.get("/api/products", (req, res) => {
	const products = [
		{
			id: 1,
			name: "Laptop",
			price: 999.99,
			image:
				"https://www.pexels.com/photo/macbook-pro-near-iphone-and-apple-fruit-18105/",
		},
		{
			id: 2,
			name: "Smartphone",
			price: 699.99,
			image:
				"https://www.pexels.com/photo/selective-focus-photography-of-person-holding-turned-on-smartphone-1092644/",
		},
		{
			id: 3,
			name: "Headphones",
			price: 199.99,
			image: "https://www.pexels.com/photo/blue-headphone-1037992/",
		},
		{
			id: 4,
			name: "Tablet",
			price: 499.99,
			image: "https://www.pexels.com/photo/turned-on-ipad-1334597/",
		},
		{
			id: 5,
			name: "Smartwatch",
			price: 299.99,
			image:
				"https://www.pexels.com/photo/space-gray-aluminum-case-white-sport-band-strap-apple-watch-110471/",
		},
	];

	if (req.query.search) {
		const filterProducts = products.filter((product) =>
			product.name.includes(req.query.search)
		);

		res.send(filterProducts);
		return;
	}
	setTimeout(() => {
		res.send(products);
	}, 3000);
});

app.listen(port, () => {
	console.log(`server running @ http://localhost:${port}`);
});
0