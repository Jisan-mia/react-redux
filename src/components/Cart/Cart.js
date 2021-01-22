import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../../redux/actions/cartActions";

const Cart = (props) => {
	console.log(props);
	const { cart, removeFromCart } = props;
	const productCartFlexBox = {
		display: "flex",
		justifyContent: "space-around",
		alignItem: "center",
		flexWrap: "wrap",
		border: "2px solid red",
	};
	return (
		<div>
			<h2>Cart</h2>
			<div style={productCartFlexBox}>
				{cart.map((item, index) => (
					<h3
						style={{
							border: "1px solid gray",
							padding: "5px",
							margin: "5px",
							textAlign: "center",
						}}
						key={index}
					>
						{item.name}{" "}
						<button onClick={() => removeFromCart(item.cartId)}>X</button>
					</h3>
				))}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		cart: state.cart,
	};
};

const mapDispatchToProps = {
	removeFromCart: removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
