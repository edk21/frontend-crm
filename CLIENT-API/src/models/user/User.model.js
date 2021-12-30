const { UserSchema } = require("./User.schema")

const insertUser = (userObj) => {
    return new Promise((resolve, reject) => {
        UserSchema(userObj)
            .save()
            .then((data) => resolve(data))
            .catch((err) => reject(err))
    })
    
}

module.exports = {
    insertUser,
}