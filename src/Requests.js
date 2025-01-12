const key = '257dee3e'; // Replace with your actual OMDB API key

const BannerMovieURL = `https://www.omdbapi.com/?apikey=${key}&i=tt13622970`;

// List of 10 popular movies (IMDb IDs)
const topRatedMovies = [
  'tt4154796', // Avengers: Endgame
  'tt2975590', // Batman v Superman
  'tt0120338', // Titanic
  'tt2488496', // Star Wars: The Force Awakens
  'tt0848228', // The Avengers
  'tt1375666', // Inception
  'tt6751668', // Parasite
  'tt0111161', // The Shawshank Redemption
  'tt0068646', // The Godfather
  'tt0468569', // The Dark Knight
];

const horrorMovies = [
  'tt5040012', // The Conjuring
  'tt28015403', // Insidious
  'tt18412256', // The Ring
  'tt27534307', // Hereditary
  'tt23468450', // The Grudge
  'tt0103874', // A Quiet Place
  'tt13433802', // Get Out
  'tt4263482', // Midsommar
]

const actionMovies = [
  'tt7286456', // Joker
  'tt0325980', // Spider-Man: No Way Home
  'tt0369610', // The Dark Knight Rises
  'tt1860357', // Mad Max: Fury Road
  'tt0208092', // The Matrix
  'tt4154796', // Avengers: Endgame
  'tt2975590', // Batman v Superman
  'tt2488496', // Star Wars: The Force Awakens
  'tt0848228', // The Avengers
  'tt1375666', // Inception
];

const comedyMovies = [
  'tt18259086', // Inception (Comedy-Drama)
  'tt15677150', // The Hangover
  'tt13622970', // 21 Jump Street
  'tt6263850', // The Grand Budapest Hotel
  'tt0099785', // The Big Lebowski
  'tt0275491', // The Princess Bride
  'tt0389790', // Superbad
  'tt0212338', // Groundhog Day
  'tt0359950', // Ferris Bueller's Day Off
  'tt1083452', // Zombieland
];



const requests = {
  requestPopular: `https://www.omdbapi.com/?apikey=${key}&s=popular`, // Search for popular movies using a common keyword
  requestTopRated: `https://www.omdbapi.com/?apikey=${key}&s=top+gun`, // Search for a specific top-rated movie or related keyword
  requestTrending: `https://www.omdbapi.com/?apikey=${key}&s=trending`, // Use "trending" as a search term or another popular keyword
  requestHorror: `https://www.omdbapi.com/?apikey=${key}&s=horror`, // Search for horror movies
  requestUpcoming: `https://www.omdbapi.com/?apikey=${key}&y=2024`, // Replace with a keyword
}

export {requests, topRatedMovies, horrorMovies, actionMovies, comedyMovies, BannerMovieURL};