import axios from "axios";
import Store from "../data/store.js";

const myFunction = {
	getHomeMovie: function (nome, resultProperty) {
		const options = {
			method: "GET",
			url: `https://api.themoviedb.org/3/movie/${nome}`,
			params: { language: "en-US", page: "1" },
			headers: {
				accept: "application/json",
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjY5N2EwNjU3NzNjN2Y4ZjM0ZTdmOGFjMjhjNWIxZCIsInN1YiI6IjY2NTcwYzUzZWYwNWQ5MDUwNTU5OTYzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J8d2CpL0hFgMCCiCm0g6QVL5wqb-nuBcq76ldpS3uVc",
			},
		};

		axios.request(options).then((response) => {
			Store[resultProperty] = response.data.results;
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
	getGenreList() {
		const options = {
			method: "GET",
			url: "https://api.themoviedb.org/3/genre/movie/list",
			params: { language: "en" },
			headers: {
				accept: "application/json",
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjY5N2EwNjU3NzNjN2Y4ZjM0ZTdmOGFjMjhjNWIxZCIsInN1YiI6IjY2NTcwYzUzZWYwNWQ5MDUwNTU5OTYzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J8d2CpL0hFgMCCiCm0g6QVL5wqb-nuBcq76ldpS3uVc",
			},
		};
		axios.request(options).then(function (response) {
			Store.filmGenreList = response.data.genres;
		});
	},
	getFilmByGenre(index) {
		Store.activeSearch = "Genere";
		Store.genre = Store.filmGenreList[index].id;
		console.log(Store.genre);
		const options = {
			method: "GET",
			url: `https://api.themoviedb.org/3/discover/movie?with_genres=${Store.genre}`,
			params: {
				page: "1",
			},
			headers: {
				accept: "application/json",
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjY5N2EwNjU3NzNjN2Y4ZjM0ZTdmOGFjMjhjNWIxZCIsInN1YiI6IjY2NTcwYzUzZWYwNWQ5MDUwNTU5OTYzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J8d2CpL0hFgMCCiCm0g6QVL5wqb-nuBcq76ldpS3uVc",
			},
		};

		axios.request(options).then(function (response) {
			Store.searchGenre = response.data.results;
			console.log(Store.searchGenre);
		});
	},
	getCredits(id) {
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

		axios.request(options).then(function (response) {
			Store.credits = response.data.cast;
			console.log(Store.credits[0].name);
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
