const Movie = require("../model/movieModel")
const movieServices = require("../services/movieServices")

class movieController {
    static index = async(req, res, next) => {
        try{
            const data = await movieServices.get_all_movies(next)
            res.status(200).json(data)
        } catch(err){
            next(err)
        }
    }

    static show = async(req, res, next) => {
        const id = req.params.id
        try{
            const data = await Movie.getMoviesById(id, next)
            res.status(200).json(data)
        } catch(err) {
            next(err)
        }
    }

    static create = async(req, res, next) => {
        const movieData = req.body

        try{
            const data = await Movie.createMovies(movieData, next)
            res.status(200).json(data)
        } catch(err) {
            next(err)
        }
    }

    static update = async(req, res, next) => {
        const id = req.params.id
        const movieData = req.body
        try {
            const data = await Movie.update(id, movieData, next)
            res.status(200).json({message: "Movie updated"})
        } catch(err) {
            next(err)
        }
    }

    static delete = async(req, res, next) => {
        const id = req.params.id
        try {
            const data = await Movie.delete(id, next)
            res.status(200).json({message: "Movie deleted"})
        } catch(err) {
            next(err)
        }
    }
}

module.exports = movieController;