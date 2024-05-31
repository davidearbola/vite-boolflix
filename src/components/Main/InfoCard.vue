<script>
import MyFunction from "../../helpers/function.js";
import Store from "../../data/store.js";
export default {
	name: "InfoCard",
	data() {
		return {
			MyFunction,
			Store,
		};
	},
	props: ["elemento"],
};
</script>

<template>
	<div class="info p-3">
		<div class="box">
			<img
				:src="MyFunction.getImg(elemento.backdrop_path)"
				class="w-100"
			/>
			<h3>{{ elemento.title }}</h3>
			<p class="fs_small">{{ elemento.overview }}</p>
			<span class="fs_small">Release: {{ elemento.release_date }}</span>
			<div>
				<span
					>Lingua:
					<img
						:src="
							MyFunction.getFlag(elemento.original_language)
						" /></span
				><br />
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
			<i class="fa-solid fa-xmark"></i>
		</div>
	</div>
</template>

<style scoped>
.info {
	height: 100vh;
	width: 100%;
	background-color: rgba(104, 104, 104, 0.08);
	position: absolute;
	top: 0;
	left: 0;
	z-index: 999;
}

.fs_small {
	font-size: 12px;
}

.box {
	width: 40%;
}

.fa-xmark {
	position: absolute;
	top: 1rem;
	right: 1rem;
	font-size: 2rem;
}
</style>
