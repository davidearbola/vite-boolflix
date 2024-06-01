import { reactive } from "vue";

const iMieiDati = reactive({
	popular: "popular",
	topRated: "top_rated",
	upComing: "upcoming",
	genre: "",
	popularMovie: [],
	topRatedMovie: [],
	upComingMovie: [],
	searchMovie: [],
	filmGenreList: [],
	searchGenre: [],
	credits: [],
	inputValue: "",
	activeSearch: "Home",
	stars: [1, 2, 3, 4, 5],
});

export default iMieiDati;
