require("dotenv").config({path: "./.env"})
const express = require('express');
const app = express();
//databse
require("./models/dbconfig").dbconnection();
//route
const userRouter = require('./routes/userRoute');

//logger 
// morgan using for check that koun sa route hit hua h
const logger = require("morgan");
app.use(logger("tiny"));
// app.use(require("morgan")("tiny"))

// body parser  
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRouter) // defined route
app.all("*", function(req,res,next){
	res.status(404).json({
		success: false,
		message : `${req.url}route not found`,
	});
});








// const dotenv = require("dotenv");
// dotenv.config({path: "./.env"});
// const PORT = process.env.PORT;

app.listen(process.env.PORT,() =>{
	console.log(`Server is running on port ${process.env.PORT}`);
})