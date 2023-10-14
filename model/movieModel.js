const pool = require("../config/config")

class Movie {
    //function didalam class menjadi method
    static getMovies = async (next) => {
        const findQuery = `SELECT * FROM movies`

        try{
            const data = await pool.query(findQuery)

            return data.rows
        }   catch(err) {
                next(err)
        }
    }

    static getMoviesById = async (id, next) => {
        const query = `SELECT * FROM movies WHERE id = $1 ` //$1 adalah place holder
        try{
            const data = await pool.query(query, [id])

            if (data.rows.lengt === 0){
                throw { name: "MovieNotFound"}
            }

            return data.rows[0]
        } catch(err) {
            next(err)
        }
    }

    static createMovies = async(movieData, next) => {
        const {id, title, genres, year} = movieData

        if(!id || !title || !genres || !year){
            return next({
                name: "paramsError"
            })
        }

        const query = `INSERT INTO movies (id, title, genres, year) VALUES ($1, $2, $3, $4);`

        try{
            const data = await pool.query(query, [id, title, genres, year])

            return data.rows[0]
        } catch{
            next({err})
        }

    }

    static update = async(id, next) => {
        const query = `UPDATE movies SET genres = $1 WHERE id = $2`

        try {
            const data = await pool.query(query, [id])
            return data.rows[0]
        } catch(err){
            next(err)
        }
    }

    static delete = async(id, next) => {
        const query = `DELETE FROM movies WHERE id = $1;`

        try {
            const data = await pool.query(query, [id])
            return data.rows[0]
        } catch(err){
            next(err)
        }
    }
}

module.exports = Movie;