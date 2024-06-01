<script>
import Store from "../../data/store.js";
import MyFunction from "../../helpers/function.js";
import SingleCard from "./SingleCard.vue";

export default {
	name: "TopRated",
	components: {
		SingleCard,
	},
	data() {
		return {
			Store,
			MyFunction,
		};
	},
	created() {
		this.MyFunction.getHomeMovie(Store.topRated, "topRatedMovie");
	},
};
</script>

<template>
	<h4 v-if="!Store.inputValue">I Film più votati</h4>
	<div
		v-if="!Store.inputValue"
		class="d-flex overflow-x-auto mb-3 pb-3 my_bar"
	>
		<template v-for="(film, i) in Store.topRatedMovie">
			<div class="d-flex flex-column mx-2">
				<SingleCard :elemento="film" :array="Store.topRatedMovie[i]" />
			</div>
		</template>
	</div>
</template>

<style scoped></style>
