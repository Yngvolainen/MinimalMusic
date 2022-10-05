
import About from './views/About.vue';
import Product from './components/Product.vue';
import Main from './components/Main.vue';
import Cart from './components/Cart.vue';

export default [

	{ name: 'main', path: '/', component: Main },
	{ name: 'about', path: '/about', component: About},
	{ name: 'cart', path: '/cart', component: Cart},
	
	{ name: 'product', path: '/records/:theProduct', component: Product},
	{ name: 'artist', path: '/artist/:theArtist', component: Main},
];
