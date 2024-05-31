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
	<h4 v-if="Store.inputValue">
		Trovati {{ Store.searchMovie.length }} risultati
	</h4>
	<div class="row">
		<template v-for="(film, i) in Store.searchMovie">
			<div class="col-2">
				<SingleCard :elemento="film" :array="Store.searchMovie[i]" />
			</div>
		</template>
	</div>
</template>

<style scoped>
img {
	width: 100%;
	aspect-ratio: 9/16;
}
</style>
