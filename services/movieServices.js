const movieRepository = require("../repositories/movieRepositories")

class movieServices{
    static get_all_movies = async (next) => {
        try{
            const data = movieRepository.all(next);
            return data;
        } catch {
            next(err)
        }
    }
}

module.exports = movieServices;