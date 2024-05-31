<script>
import MyFunction from "../../helpers/function.js";
import Store from "../../data/store.js";

export default {
	name: "SingleCard",
	props: ["elemento", "array"],
	data() {
		return {
			MyFunction,
			Store,
		};
	},
};
</script>

<template>
	<div class="box_hover">
		<div>
			<img
				class="my_img"
				:src="MyFunction.getImg(elemento.poster_path)"
			/>
		</div>
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
		<!-- click  -->
		<div class="info p-3">
			<div class="box d-flex gap-3">
				<div class="col-auto">
					<img
						class="backdrop"
						:src="MyFunction.getImg(array.backdrop_path)"
					/>
					<h5>{{ array.title }}</h5>
					<h5>{{ array.name }}</h5>
				</div>
				<div class="col-4">
					<p class="fs_small">{{ array.overview }}</p>
					<span class="fs_small"
						>Release: {{ array.release_date }}</span
					><br />
					<span
						>Lingua:
						<img
							:src="
								MyFunction.getFlag(array.original_language)
							" /></span
					><br />
					<span v-for="star in Store.stars"
						><i
							:class="
								star <= Math.floor(array.vote_average / 2 + 1)
									? 'fa-solid'
									: 'fa-regular'
							"
							class="fa-star"
						></i
					></span>
					<p v-if="elemento.name">Serie TV</p>
					<p v-if="elemento.title">Film</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
p {
	font-size: 12px;
}
.fa-star {
	color: yellow;
}
.info {
	display: none;
	width: 100%;
	background-color: rgba(2, 2, 2, 0.9);
	position: fixed;
	top: 4rem;
	left: 0;
	z-index: 999;
}

.fs_small {
	font-size: 12px;
}

.box {
	width: 100%;
}

.backdrop {
	max-width: 250px;
}

.box_hover:hover .info {
	display: block;
}
</style>
