<script>
import MyFunction from "../../helpers/function.js";

export default {
	name: "Popular",
	props: ["elemento"],
	data() {
		return {
			MyFunction,
		};
	},
};
</script>

<template>
	<img :src="MyFunction.getImg(elemento)" />
	<h5 class="mb-0">{{ elemento.title }}</h5>
	<p v-if="elemento.title != elemento.original_title" class="mb-0">
		{{ elemento.original_title }}
	</p>
	<p class="mb-0">{{ elemento.original_language }}</p>
	<p class="mb-0">{{ Math.floor(elemento.vote_average / 2 + 1) }}</p>
</template>

<style scoped>
p {
	font-size: 12px;
}
img {
	width: 250px;
}
</style>
