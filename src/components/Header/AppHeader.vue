<script>
import Store from "../../data/store.js";
export default {
	name: "AppHeader",
	data() {
		return {
			Store,
		};
	},
};
</script>

<template>
	<header>
		<nav class="d-flex justify-content-around">
			<h5>Boolflix</h5>
			<span>Home</span>
			<span>Film</span>
			<span>Serie Tv</span>
			<span>Generi</span>
			<input type="text" v-model="Store.inputValue" />
			<button>Cerca</button>
		</nav>
	</header>
</template>

<style scoped></style>
