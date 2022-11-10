const key = "4514181cd975a1abe8a4f12c12e0bf00";

const requestsApi = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,

  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,

  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,

  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,

  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,

  requestDrama: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1&with_genres=80`,

  requestAnime: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1&with_genres=16`,
};

export default requestsApi;
