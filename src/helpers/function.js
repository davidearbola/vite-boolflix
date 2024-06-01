import axios from "axios";
import Store from "../data/store.js";

const myFunction = {
	getHomeMovie: function (nome, resultProperty) {
		const options = {
			method: "GET",
			// url: `https://api.themoviedb.org/3/movie/popular`,
			url: `https://api.themoviedb.org/3/movie/${nome}`,
			params: { language: "en-US", page: "1" },
			headers: {
				accept: "application/json",
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjY5N2EwNjU3NzNjN2Y4ZjM0ZTdmOGFjMjhjNWIxZCIsInN1YiI6IjY2NTcwYzUzZWYwNWQ5MDUwNTU5OTYzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J8d2CpL0hFgMCCiCm0g6QVL5wqb-nuBcq76ldpS3uVc",
			},
		};

		axios.request(options).then((response) => {
			// Store.popularMovie = response.data.results;
			Store[resultProperty] = response.data.results;
			console.log(Store.popularMovie);
		});
	},
	getSearchMovie: function () {
		const options = {
			method: "GET",
			url: "https://api.themoviedb.org/3/search/multi",
			params: {
				query: Store.inputValue,
				include_adult: "false",
				language: "en-US",
				page: "1",
			},
			headers: {
				accept: "application/json",
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjY5N2EwNjU3NzNjN2Y4ZjM0ZTdmOGFjMjhjNWIxZCIsInN1YiI6IjY2NTcwYzUzZWYwNWQ5MDUwNTU5OTYzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J8d2CpL0hFgMCCiCm0g6QVL5wqb-nuBcq76ldpS3uVc",
			},
		};

		axios.request(options).then(function (response) {
			Store.searchMovie = response.data.results;
		});
	},

	getImg(elemento) {
		return `https://image.tmdb.org/t/p/w500${elemento}`;
	},
	getFlag(language) {
		if (language == "en") {
			return `https://flagsapi.com/GB/flat/16.png`;
		} else if (language == "it") {
			return `https://flagsapi.com/IT/flat/16.png`;
		} else if (language == "ja") {
			return `https://flagsapi.com/JP/flat/16.png`;
		} else if (language == "fr") {
			return `https://flagsapi.com/FR/flat/16.png`;
		} else {
			return language;
		}
	},
};

export default myFunction;
