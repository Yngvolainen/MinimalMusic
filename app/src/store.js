export default {
	state() {
		return {
			shoppingcart: [],
			browseBy: 'records',
			artistParams: null,
			artistResult: null,
		};
	},
	getters: {
		getCartItems(state) {
			return state.shoppingcart
		},
		getBrowseBy(state) {
			return state.browseBy
		},
		getArtistParams(state) {
			return state.artistParams
		}
 	},
	actions: {
		runAddToCart(store, item) {
			store.commit('addToCart', item)
		},
		runRemoveFromCart(store, item) {
			store.commit('removeFromCart', item)
		},
		runChangeBrowseCategory(store, category) {
			store.commit('changeBrowseCategory', category)
		},
		runEmptyCart(store) {
			store.commit('emptyCart')
		},
		runChangeSort(store, sorting) {
			store.commit('changeSort', sorting)
		}
	},
	mutations: {
		changeBrowseCategory(state, category) {
			state.browseBy = category
		},
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

