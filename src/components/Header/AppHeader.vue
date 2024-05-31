<script>
import Store from "../../data/store.js";
import MyFunction from "../../helpers/function.js";

export default {
	name: "AppHeader",
	data() {
		return {
			Store,
			MyFunction,
		};
	},
};
</script>

<template>
	<header>
		<nav class="row justify-content-between align-items-center p-3 m-0">
			<div class="col-2">
				<h3 class="mb-0 text-danger">Boolflix</h3>
			</div>
			<div class="col-6 d-flex justify-content-center gap-3">
				<span>Home</span>
				<span>Film</span>
				<span>Serie Tv</span>
				<span>Generi</span>
			</div>
			<div class="col-3 text-end">
				<input
					type="text"
					v-model="Store.inputValue"
					@input="MyFunction.getSearchMovie()"
				/>
				<button>Cerca</button>
			</div>
		</nav>
	</header>
</template>

<style scoped>
nav {
	background-color: black;
	color: white;
	height: 4rem;
}
</style>
