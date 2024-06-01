<script>
import MyFunction from "../../helpers/function.js";
import Store from "../../data/store.js";
import Popular from "./Popular.vue";
import TopRated from "./TopRated.vue";
import UpComing from "./UpComing.vue";
import Search from "./Search.vue";
import FilmGenere from "./FilmGenere.vue";

export default {
	name: "AppMain",
	components: {
		Popular,
		TopRated,
		UpComing,
		Search,
		FilmGenere,
	},
	data() {
		return {
			MyFunction,
			Store,
		};
	},
};
</script>

<template>
	<main class="p-3 my_bar">
		<FilmGenere />
		<Popular v-if="Store.activeSearch == 'Home'" />
		<TopRated v-if="Store.activeSearch == 'Home'" />
		<UpComing v-if="Store.activeSearch == 'Home'" />
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
