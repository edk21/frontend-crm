const express = require("express")
const router = express.Router()

const { hashedPassword, comparePassword } = require('../helpers/bcrypt.helper');
const { insertUser, getUserByEmail } = require('../models/user/User.model');

router.all("/", (req, res, next) => {
    res.json({ message: "return from user router "})

    next()
})

//Create new user route
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

//user signin router
router.post("/login", async (req, res) => {
    const { email, password } = req.body
    //get user from db

    //hash our password and compare with the db one

    if(!email || !password){
        return res.json({ status: 'error', message: 'Invalid form submition' });
    }

    //get user with email from db
    const user = await getUserByEmail(email)
    
    const passFromDb = user && user._id ? user.password : null

    if(!passFromDb){
        return res.json({ status: 'error', message: 'Invalid email or password' });
    }

    const result = await comparePassword(password, passFromDb)

    res.json({ status: "success", message: "Login successfull" })
})

module.exports = router