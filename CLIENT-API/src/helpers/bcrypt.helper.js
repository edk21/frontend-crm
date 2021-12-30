const bcrypt = require("bcrypt")
const saltRounds = 10

const hashedPassword = plainPassword => {
    return new Promise(resolve => {
        resolve(bcrypt.hashSync(plainPassword, saltRounds))
    })
}

module.exports = {
  hashedPassword,
};