<script>
import MyFunction from "../../helpers/function.js";
import Store from "../../data/store.js";
import Popular from "./Popular.vue";
import TopRated from "./TopRated.vue";
import UpComing from "./UpComing.vue";
import Search from "./Search.vue";

export default {
	name: "AppMain",
	components: {
		Popular,
		TopRated,
		UpComing,
		Search,
	},
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
	<main class="p-3 my_bar">
		<Popular />
		<TopRated />
		<UpComing />
		<Search />
	</main>
</template>

<style scoped>
main {
	background-color: #222;
	color: white;
	height: calc(100vh - 4rem);
	overflow: auto;
}
</style>
