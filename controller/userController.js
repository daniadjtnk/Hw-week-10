const User = require("../model/userModel")
const userServices = require("../services/userServices")

class userController {
    static index = async(req, res, next) => {
        try{
            const data = await userServices.get_all_users(next)
            res.status(200).json(data)
        } catch(err){
            next(err)
        }
    }

    static show = async(req, res, next) => {
        const id = req.params.id
        try{
            const data = await User.getUsersById(id, next)
            res.status(200).json(data)
        } catch(err) {
            next(err)
        }
    }

    static create = async(req, res, next) => {
        const userData = req.body

        try{
            const data = await User.createUsers(userData, next)
            res.status(200).json({ message: "User created" })
        } catch(err) {
            next(err)
        }
    }

    static update = async(req, res, next) => {
        const id = req.params.id
        const userData = req.body
        try {
            const data = await User.update(id, userData, next)
            res.status(200).json({message: "User updated"})
        } catch(err) {
            next(err)
        }
    }

    static delete = async(req, res, next) => {
        const id = req.params.id
        try {
            const data = await User.delete(id, next)
            res.status(200).json({message: "User deleted"})
        } catch(err) {
            next(err)
        }
    }
}

module.exports = userController;