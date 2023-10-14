const userRepository = require("../repositories/userRepositories")

class userServices{
    static get_all_users = async (next) => {
        try{
            const data = userRepository.all(next);
            return data;
        } catch {
            next(err)
        }
    }
}

module.exports = userServices;