<script>
import MyFunction from "../../helpers/function.js";
import Store from "../../data/store.js";

export default {
	name: "AppMain",
	data() {
		return {
			MyFunction,
			Store,
		};
	},
	created() {
		this.MyFunction.getPopularMovie();
		this.MyFunction.getTopRatedMovie();
		this.MyFunction.getUpComingMovie();
	},
};
</script>

<template>
	<main>
		<div class="d-flex">
			<div>
				<div v-for="film in Store.popularMovie">
					{{ film.title }}
				</div>
			</div>
			<div>
				<div v-for="film in Store.topRatedMovie">
					{{ film.title }}
				</div>
			</div>
			<div>
				<div v-for="film in Store.upComingMovie">
					{{ film.title }}
				</div>
			</div>
		</div>
	</main>
</template>

<style scoped></style>
