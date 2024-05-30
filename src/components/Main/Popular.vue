<script>
import Store from "../../data/store.js";
import MyFunction from "../../helpers/function.js";
import SingleCard from "./SingleCard.vue";

export default {
	name: "Popular",
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
	<h4 v-if="!Store.inputValue">I Film più visti</h4>
	<div v-if="!Store.inputValue" class="d-flex overflow-x-auto">
		<div v-for="film in Store.popularMovie" class="mx-2">
			<SingleCard :elemento="film" />
		</div>
	</div>
</template>

<style scoped></style>
