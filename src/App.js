import React from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Shop from "./components/Shop/Shop";
const App = () => {
	return (
		<div className="main">
			<Cart></Cart>
			<Shop></Shop>
		</div>
	);
};

export default App;
