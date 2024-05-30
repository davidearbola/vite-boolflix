<script>
import Store from "../../data/store.js";
import MyFunction from "../../helpers/function.js";
import SingleCard from "./SingleCard.vue";

export default {
	name: "UpComing",
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
	<h4 v-if="!Store.inputValue">Coming Soon</h4>
	<div
		v-if="!Store.inputValue"
		class="d-flex overflow-x-auto mb-3 pb-3 my_bar"
	>
		<div v-for="film in Store.upComingMovie" class="mx-2">
			<img class="my_img" :src="MyFunction.getImg(film)" />
			<SingleCard :elemento="film" />
		</div>
	</div>
</template>

<style scoped></style>
