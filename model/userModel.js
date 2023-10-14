const pool = require("../config/config")

class Users {
    //function didalam class menjadi method
    static getUsers = async (next) => {
        const findQuery = `SELECT * FROM users`

        try{
            const data = await pool.query(findQuery)

            return data.rows
        }   catch(err) {
                next(err)
        }
    }

    static getUsersById = async (id, next) => {
        const query = `SELECT * FROM users WHERE id = $1 ` //$1 adalah place holder
        try{
            const data = await pool.query(query, [id])

            if (data.rows.lengt === 0){
                throw { name: "UsersNotFound"}
            }

            return data.rows[0]
        } catch(err) {
            next(err)
        }
    }

    static createUsers = async(userData, next) => {
        const {id, email, gender, password, role} = userData

        if(!id || !email || !gender || !password || !role){
            return next({
                name: "paramsError"
            })
        }

        const query = `INSERT INTO users (id, email, gender, password, role) VALUES ($1, $2, $3, $4, $5);`

        try{
            const data = await pool.query(query, [id, email, gender, password, role])

            return data.rows[0]
        } catch{
            next({err})
        }

    }

    static update = async(id, next) => {
        const query = `UPDATE users SET gender = $1 WHERE id = $2`

        try {
            const data = await pool.query(query, [id])
            return data.rows[0]
        } catch(err){
            next(err)
        }
    }

    static delete = async(id, next) => {
        const query = `DELETE FROM users WHERE id = $1;`

        try {
            const data = await pool.query(query, [id])
            return data.rows[0]
        } catch(err){
            next(err)
        }
    }
}

module.exports = Users;