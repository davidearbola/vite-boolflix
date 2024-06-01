<script>
import Store from "../../data/store.js";
import MyFunction from "../../helpers/function.js";
import SingleCard from "./SingleCard.vue";
import InfoCard from "./InfoCard.vue";
import axios from "axios";

export default {
	name: "Popular",
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
	created() {
		this.MyFunction.getHomeMovie(Store.popular, "popularMovie");
	},
};
</script>

<template>
	<h4 v-if="!Store.inputValue">I Film più visti</h4>
	<div
		v-if="!Store.inputValue"
		class="d-flex overflow-x-auto mb-3 pb-3 my_bar"
	>
		<template v-for="(film, i) in Store.popularMovie">
			<div
				class="d-flex flex-column mx-2"
				@click="visibleInfo(i, Store.popularMovie[i].id)"
			>
				<SingleCard :elemento="film" />
			</div>
			<InfoCard
				v-if="visible"
				:elemento="Store.popularMovie[active]"
				:cast="Store.credits"
			/>
			<i
				v-if="visible"
				class="fa-solid fa-xmark"
				@click="notVisibleInfo()"
			></i>
		</template>
	</div>
</template>

<style scoped></style>
