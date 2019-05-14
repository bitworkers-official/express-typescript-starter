//REQUIRES
import express from "express"
//STARTUP-SETUP EXPRESS WEB-SERVER
var app = express();
app.use(express.static("./dist")); //public folder for client side sources (like htdocs or wwwroot)
app.listen(1337); //port given in environment variable needed for e.g. Azure hosting
console.log(new Date() + " ** Express up and Listening ** ");