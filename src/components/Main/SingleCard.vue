<script>
import MyFunction from "../../helpers/function.js";
import Store from "../../data/store.js";

export default {
	name: "Popular",
	props: ["elemento"],
	data() {
		return {
			MyFunction,
			Store,
		};
	},
};
</script>

<template>
	<div>
		<h5 class="mb-0">{{ elemento.title }}</h5>
		<h5 class="mb-0">{{ elemento.name }}</h5>
	</div>
	<div>
		<p v-if="elemento.title != elemento.original_title" class="mb-0">
			{{ elemento.original_title }}
		</p>
		<p v-if="elemento.name != elemento.original_name" class="mb-0">
			{{ elemento.original_name }}
		</p>
	</div>
	<div>
		<img :src="MyFunction.getFlag(elemento.original_language)" />
		<span v-for="star in Store.stars"
			><i
				:class="
					star <= Math.floor(elemento.vote_average / 2 + 1)
						? 'fa-solid'
						: 'fa-regular'
				"
				class="fa-star"
			></i
		></span>
	</div>
	<div>
		<p v-if="elemento.name">Serie TV</p>
		<p v-if="elemento.title">Film</p>
	</div>
</template>

<style scoped>
p {
	font-size: 12px;
}
i {
	color: yellow;
}
</style>
