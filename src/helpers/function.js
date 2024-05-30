import axios from "axios";
import Store from "../data/store.js";

const myFunction = {
	getPopularMovie: function () {
		const options = {
			method: "GET",
			url: "https://api.themoviedb.org/3/movie/popular",
			params: { language: "en-US", page: "1" },
			headers: {
				accept: "application/json",
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjY5N2EwNjU3NzNjN2Y4ZjM0ZTdmOGFjMjhjNWIxZCIsInN1YiI6IjY2NTcwYzUzZWYwNWQ5MDUwNTU5OTYzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J8d2CpL0hFgMCCiCm0g6QVL5wqb-nuBcq76ldpS3uVc",
			},
		};

		axios.request(options).then((response) => {
			Store.popularMovie = response.data.results;
		});
	},
	getTopRatedMovie: function () {
		const options = {
			method: "GET",
			url: "https://api.themoviedb.org/3/movie/top_rated",
			params: { language: "en-US", page: "1" },
			headers: {
				accept: "application/json",
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjY5N2EwNjU3NzNjN2Y4ZjM0ZTdmOGFjMjhjNWIxZCIsInN1YiI6IjY2NTcwYzUzZWYwNWQ5MDUwNTU5OTYzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J8d2CpL0hFgMCCiCm0g6QVL5wqb-nuBcq76ldpS3uVc",
			},
		};

		axios.request(options).then((response) => {
			Store.topRatedMovie = response.data.results;
		});
	},
	getUpComingMovie: function () {
		const options = {
			method: "GET",
			url: "https://api.themoviedb.org/3/movie/upcoming",
			params: { language: "en-US", page: "1" },
			headers: {
				accept: "application/json",
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjY5N2EwNjU3NzNjN2Y4ZjM0ZTdmOGFjMjhjNWIxZCIsInN1YiI6IjY2NTcwYzUzZWYwNWQ5MDUwNTU5OTYzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J8d2CpL0hFgMCCiCm0g6QVL5wqb-nuBcq76ldpS3uVc",
			},
		};

		axios.request(options).then((response) => {
			Store.upComingMovie = response.data.results;
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
};

export default myFunction;
