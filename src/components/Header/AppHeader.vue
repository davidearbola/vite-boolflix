<script>
import Store from "../../data/store.js";
import MyFunction from "../../helpers/function.js";

export default {
	name: "AppHeader",
	data() {
		return {
			Store,
			MyFunction,
		};
	},
	methods: {},
	created() {
		MyFunction.getGenreList();
	},
};
</script>

<template>
	<header>
		<nav class="row justify-content-between align-items-center p-3 m-0">
			<div class="col-2">
				<h3 class="mb-0 text-danger">Boolflix</h3>
			</div>
			<div class="col-6 d-flex justify-content-center gap-3">
				<span @click="Store.activeSearch = 'Home'">Home</span>

				<span id="film" class="position-relative"
					>Generi <i class="fa-solid fa-chevron-down"></i>
					<div>
						<span
							v-for="(genre, i) in Store.filmGenreList"
							@click="MyFunction.getFilmByGenre(i)"
							class="col-3"
							>{{ genre.name }}</span
						>
					</div></span
				>
			</div>
			<div class="col-3 text-end">
				<input
					type="text"
					v-model="Store.inputValue"
					@input="MyFunction.getSearchMovie()"
				/>
				<button>Cerca</button>
			</div>
		</nav>
	</header>
</template>

<style scoped>
nav {
	background-color: black;
	color: white;
	height: 4rem;
}

#film div {
	display: none;
}
#film:hover div {
	display: flex;
	flex-wrap: wrap;
	width: 500px;
	background-color: black;
	position: absolute;
	padding: 1rem;
}
</style>
