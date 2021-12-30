const express = require("express")
const router = express.Router()

const {hashedPassword} = require("../helpers/bcrypt.helper")
const {insertUser} = require("../models/user/User.model")

router.all("/", (req, res, next) => {
    res.json({ message: "return from user router "})

    next()
})

router.post("/", async (req, res,next) => {
    const { name, compagny, address, phone, email, password } = req.body

    try{
        //hash password
        const hashedPass = hashedPassword(password)

        const newUserObj = {
          name,
          compagny,
          address,
          phone,
          email,
          password: hashedPass,
        };
        const result = await insertUser(newUserObj);
        console.log(result);

        res.json({ message: 'New user created', result });
    }catch(error){
        console.log(error)
        res.json({ status: "error", message: error.message })
    }
})

module.exports = router