//REQUIRES
import express from "express"
import path from 'path'
//STARTUP-SETUP EXPRESS WEB-SERVER
var app = express();
app.use(express.static(path.join(__dirname, "../static"))); //public folder for client side sources (like htdocs or wwwroot)
app.listen(1337); //port given in environment variable needed for e.g. Azure hosting
console.log('👉  http://localhost:1337');