<script>
import Store from "../../data/store.js";
import MyFunction from "../../helpers/function.js";
import SingleCard from "./SingleCard.vue";
import InfoCard from "./InfoCard.vue";
import axios from "axios";

export default {
	name: "Search",
	components: {
		SingleCard,
		InfoCard,
	},
	data() {
		return {
			Store,
			MyFunction,
			active: "",
			visible: false,
		};
	},
	methods: {
		visibleInfo(index, id) {
			const options = {
				method: "GET",
				url: `https://api.themoviedb.org/3/movie/${id}/credits`,
				params: { language: "en-US" },
				headers: {
					accept: "application/json",
					Authorization:
						"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjY5N2EwNjU3NzNjN2Y4ZjM0ZTdmOGFjMjhjNWIxZCIsInN1YiI6IjY2NTcwYzUzZWYwNWQ5MDUwNTU5OTYzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J8d2CpL0hFgMCCiCm0g6QVL5wqb-nuBcq76ldpS3uVc",
				},
			};

			axios.request(options).then((response) => {
				Store.credits = response.data.cast;
				this.active = index;
				this.visible = true;
			});
		},
		notVisibleInfo() {
			this.active = "";
			this.visible = false;
		},
	},
};
</script>

<template>
	<h4 v-if="Store.inputValue">
		Trovati {{ Store.searchMovie.length }} risultati
	</h4>
	<div class="row">
		<template v-for="(film, i) in Store.searchMovie">
			<div class="col-2" @click="visibleInfo(i, Store.searchMovie[i].id)">
				<SingleCard :elemento="film" />
			</div>
			<InfoCard
				v-if="visible"
				:elemento="Store.searchMovie[active]"
				:cast="Store.credits"
			/>
		</template>
	</div>
	<i v-if="visible" class="fa-solid fa-xmark" @click="notVisibleInfo()"></i>
</template>

<style scoped>
.col-2 img {
	width: 100%;
	aspect-ratio: 9/16;
}
</style>
