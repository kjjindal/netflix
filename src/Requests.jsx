
// https://api.themoviedb.org/3/movie/550?api_key=eb5e7f88c9a39c6d8b4f9a47e8eb8ec2
const api='eb5e7f88c9a39c6d8b4f9a47e8eb8ec2';


const request={
fetchTrending:`/discover/tv?api_key=${api}&sort_by=popularity.desc`,
// fetchTrending:`/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10?api_key=${api}`,
fetchTopRated:`/discover/tv?api_key=${api}&sort_by=popularity.desc`,
fetchComedyMovies:`/discover/tv?api_key=${api}&sort_by=popularity.desc`,
fetchActionMovies:`/discover/tv?api_key=${api}&sort_by=popularity.desc`,
fetchHorrorMovies:`/discover/tv?api_key=${api}&sort_by=popularity.desc`,
fetchRomanceMovies:`/discover/tv?api_key=${api}&sort_by=popularity.desc`,
fetchDocumentaries:`/discover/tv?api_key=${api}&sort_by=popularity.desc`,
fetchNetflixOriginals:`/discover/tv?api_key=${api}&sort_by=popularity.desc`
}


export default request;