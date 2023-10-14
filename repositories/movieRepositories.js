const Movie = require("../model/movieModel")

class movieRepository{
    static all = async (next) => {
        try {
            const data = await Movie.getMovies(next)
            return(data)
    } catch (err) {
        next(err);
    }
}
}

module.exports = movieRepository;