import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState = {
	cart: [],
	products: [
		{ id: 1, name: "Lenovo Laptop" },
		{ id: 2, name: "Asus Laptop" },
		{ id: 3, name: "Dell Laptop" },
		{ id: 4, name: "HP Laptop" },
		{ id: 5, name: "Walton Laptop" },
	],
};

const cartReducers = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			//    const newId = action.id;
			//    const newCart = [...state.cart, newId]
			//    return {cart: newCart}
			const newItem = {
				productId: action.id,
				name: action.name,
				cartId: state.cart.length + 1,
			};
			return { ...state, cart: [...state.cart, newItem] };

		case REMOVE_FROM_CART:
			const remaningCartProduct = state.cart.filter(
				(product) => product.cartId !== action.id
			);
			return { ...state, cart: remaningCartProduct };

		default:
			return state;
	}
};

export default cartReducers;
