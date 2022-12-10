class Movie {
	constructor(title, year, duration, rentPrice) {
		this.title = title;
		this.year = year;
		this.duration = duration;
		this.rentPrice = rentPrice;
		this.actors = [];
		this.genres = [];
		this.available = true;
	}

	addActor(actor) {
		this.actors.push(actor);
	}

	addGenre(genre) {
		this.genres.push(genre);
	}

	getActors() {
		return this.actors;
	}

	getGenres() {
		return this.genres;
	}

	getRentalFee() {
		return this.rentPrice;
	}

	isMovieAvailable() {
		return this.available;
	}

	rentMovie() {
		this.available = false;
	}

	returnMovie() {
		this.available = true;
	}
}

class RentalStore {
	constructor(name) {
		this.name = name;
		this.movies = [];
	}

	addMovie(movie) {
		this.movies.push(movie);
	}

	getMovies() {
		return this.movies;
	}

	getMovieByTitle(title) {
		return this.movies.find((movie) => movie.title === title);
	}

	getAvailableMovies() {
		return this.movies.find((movie) => movie.available === true);
	}
}
class Customer {
	constructor(name) {
		this.name = name;
		this.rentals = [];
	}

	addRental(rental) {
		this.rentals.push(rental);
	}

	get totalFees() {
		let totalFees = 0;
		for (let rental of this.rentals) {
			totalFees += rental.rentPrice;
		}
		return totalFees;
	}

	get rentalsSummary() {
		let summary = `Rental Record for ${this.name}\n`;
		for (let rental of this.rentals) {
			summary += `\t${rental.title}\t${rental.rentPrice}\n`;
		}
		summary += `Amount owed is ${this.totalFees}\n`;
		return summary;
	}
}

const theMartian = new Movie('The Martian', 2015, 140, 56);
theMartian.addActor('Matt Damon');
theMartian.addGenre('Science fiction');
theMartian.rentMovie();
theMartian.returnMovie();
const interstellar = new Movie('Interstellar', 2014, 169, 40);
interstellar.addActor('Matthew McConaughey');
interstellar.addGenre('Science fiction');
const blockbuster = new RentalStore('Blockbuster');
blockbuster.addMovie(theMartian);
blockbuster.addMovie(interstellar);

const customer = new Customer('Jenny Joseph');
customer.addRental(theMartian);
customer.addRental(interstellar);

//   console.log(blockbuster.getMovies()); // [Movie, Movie]
console.log(blockbuster.getMovieByTitle('The Martian')); // Movie
console.log(customer.rentalsSummary);
