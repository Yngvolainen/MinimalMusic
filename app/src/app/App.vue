<template>
	<Header></Header>
	<Home></Home>
	<Footer></Footer>
</template>

<script>
	import Header from '../components/Header.vue'
	import Home from '../views/Home.vue'
	import Footer from '../components/Footer.vue'

	export default {
		components: {
			Header,
			Home,
			Footer
		}
	}

</script>

<style>
	@import '../style/reset.css';
	@import '../style/variables.css';
	@import '../style/fonts.css';
	@import '../style/style.css';
</style>
