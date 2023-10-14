const User = require("../model/userModel")

class userRepository{
    static all = async (next) => {
        try {
            const data = await User.getUsers(next)
            return(data)
    } catch (err) {
        next(err);
    }
}
}

module.exports = userRepository;