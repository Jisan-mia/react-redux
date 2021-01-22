import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import Product from "../Product/Product";

const Shop = (props) => {
	// console.log(props);
	const { products, addToCart } = props;
	const productFlexBox = {
		display: "flex",
		justifyContent: "space-around",
		alignItem: "center",
		flexWrap: "wrap",
		border: "2px solid blue",
	};

	return (
		<div>
			<h1>Shop</h1>
			<div style={productFlexBox}>
				{products.map((product) => (
					<Product
						key={product.id}
						product={product}
						addToCart={addToCart}
					></Product>
				))}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		cart: state.cart,
		products: state.products,
	};
};

const mapDispatchToProps = {
	addToCart: addToCart,
};

// connect(mapStateToProps, mapDispatchToProps)(Shop);

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
