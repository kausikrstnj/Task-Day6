// Movie class definition
class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    // Method to filter movies with rating "PG"
    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}

// Creating an instance of Movie
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

// Example array of Movie instances
const moviesArray = [
    new Movie("Movie1", "Studio1", "PG"),
    new Movie("Movie2", "Studio2", "PG-13"),
    new Movie("Movie3", "Studio3", "R"),
    // Add more Movie instances as needed
];

// Filtering movies with rating "PG"
const pgMovies = Movie.getPG(moviesArray);

// Logging the result
console.log(pgMovies);
