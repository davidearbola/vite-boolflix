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
			<div v-if="!Store.inputValue">
				<div v-for="film in Store.popularMovie">
					<img :src="MyFunction.getImg(film)" />
					<h5>{{ film.title }}</h5>
					<p v-if="film.title != film.original_title">
						{{ film.original_title }}
					</p>
					<p>{{ film.original_language }}</p>
					<p>{{ film.vote_average }}</p>
				</div>
			</div>
			<div v-if="!Store.inputValue">
				<div v-for="film in Store.topRatedMovie">
					<img :src="MyFunction.getImg(film)" />
					<h5>{{ film.title }}</h5>
					<p v-if="film.title != film.original_title">
						{{ film.original_title }}
					</p>
					<p>{{ film.original_language }}</p>
					<p>{{ film.vote_average }}</p>
				</div>
			</div>
			<div v-if="!Store.inputValue">
				<div v-for="film in Store.upComingMovie">
					<img :src="MyFunction.getImg(film)" />
					<h5>{{ film.title }}</h5>
					<p v-if="film.title != film.original_title">
						{{ film.original_title }}
					</p>
					<p>{{ film.original_language }}</p>
					<p>{{ film.vote_average }}</p>
				</div>
			</div>
			<div>
				<div v-for="film in Store.searchMovie">
					<img :src="MyFunction.getImg(film)" />
					<h5>{{ film.title }}</h5>
					<p v-if="film.title != film.original_title">
						{{ film.original_title }}
					</p>
					<p>{{ film.name }}</p>
					<p v-if="film.name != film.original_name">
						{{ film.original_name }}
					</p>
					<p>{{ film.original_language }}</p>
					<p>{{ film.vote_average }}</p>
				</div>
			</div>
		</div>
	</main>
</template>

<style scoped></style>
