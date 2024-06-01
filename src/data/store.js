import { reactive } from "vue";

const iMieiDati = reactive({
	popularMovie: [],
	popular: "popular",
	topRated: "top_rated",
	upComing: "upcoming",
	topRatedMovie: [],
	upComingMovie: [],
	searchMovie: [],
	inputValue: "",
	stars: [1, 2, 3, 4, 5],
});

export default iMieiDati;
