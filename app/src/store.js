export default {
	state() {
		return {
			shoppingcart: [],
		};
	},
	getters: {
		getCartItems(state) {
			return state.shoppingcart
		}
	},
	mutations: {
	
		addToCart(state, item) {
			let productId = item._id;

			// does the item already exist in cart?
			let isItemInCart = state.shoppingcart
			.map( x => x._id)
			.includes(productId);
			
			if (isItemInCart === true) {
				// if so increase amount
				state.shoppingcart.find( x => x._id === productId).amount++;
			} else {
				// if else, add to cart
				state.shoppingcart.push(item);
				state.shoppingcart.find( x => x._id === productId).amount = 1;
			}

		},
		removeFromCart(state, item) {
			let productId = item._id;
			// decrease amount if more than one exists in array
			if (state.shoppingcart.find( x => x._id === productId).amount > 1) {
				state.shoppingcart.find( x => x._id === productId).amount--;
			} else {
				// remove if only one remains
				// lots of trial and error before arriving at this solution
				let itemsCartIndex = (element) => element._id === productId;
				let indexOfItem = state.shoppingcart.findIndex(itemsCartIndex);
				state.shoppingcart.splice(indexOfItem, 1);
			}
		},
		emptyCart(state) {
			state.shoppingcart = new Array;
			// doing it twice for good measure
			state.shoppingcart = []
		}
	}
};

