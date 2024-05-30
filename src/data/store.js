import { reactive } from "vue";

const iMieiDati = reactive({
	popularMovie: [],
	topRatedMovie: [],
	upComingMovie: [],
	searchMovie: [],
	inputValue: "",
	stars: [1, 2, 3, 4, 5],
});

export default iMieiDati;
