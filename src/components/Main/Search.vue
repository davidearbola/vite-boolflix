<script>
import Store from "../../data/store.js";
import MyFunction from "../../helpers/function.js";
import SingleCard from "./SingleCard.vue";

export default {
	name: "Search",
	components: {
		SingleCard,
	},
	data() {
		return {
			Store,
			MyFunction,
		};
	},
};
</script>

<template>
	<h4>Trovati {{ Store.searchMovie.length }} risultati</h4>
	<div class="d-flex overflow-x-auto">
		<div v-for="film in Store.searchMovie">
			<SingleCard :elemento="film" />
		</div>
	</div>
</template>

<style scoped></style>
