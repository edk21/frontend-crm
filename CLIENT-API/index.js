const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const helmet = require("helmet")
const morgan = require("morgan")
const mongoose = require('mongoose');
require("dotenv").config()


const PORT = process.env.PORT || 3001

//API security
app.use(helmet())

//handle cors error
app.use(cors())

//mongoose connection
// const MONGO_URI = 'mongodb+srv://admin:edwin123456@cluster0.2hte0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(process.env.MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
});


if(process.env.NODE_ENV !== "production") {
  const connection = mongoose.connection;

  connection.once('open', function () {
    console.log('MongoDB database connection established successfully');
  });
  connection.once('error', (error) => {
    console.log(error);
  });

  //logger
  app.use(morgan('tiny'));
}


//bodyParser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//Routers
//load routers
const userRouter = require("./src/routers/user.router")
const ticketRouter = require("./src/routers/ticket.router")

//use routers
app.use("/v1/user", userRouter)
app.use("/v1/ticket", ticketRouter)

//error handling
const handleError = require("./src/utils/errorHandler")

app.use("*", (req, res, next) => {
    const error = new Error('Ressouces are not found!');
    error.status = 404
    
    next(error)
})

app.use("*", (error, req, res, next) => {
    handleError(error, res)
})


app.use("/",(req, res, next) => {
    res.json({message: "Welcome to the client API"})
})

app.listen(PORT, ()=> {
    console.log(`API running on port ${PORT}`)
} )