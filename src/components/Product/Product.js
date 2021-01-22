import React from "react";

const Product = (props) => {
	const { addToCart, product } = props;
	return (
		<div style={{ border: "1px solid gray", padding: "8px", margin: "8px" }}>
			<h3>{product.name}</h3>
			<button onClick={() => addToCart(product.id, product.name)}>
				Add to Cart
			</button>
		</div>
	);
};

export default Product;
