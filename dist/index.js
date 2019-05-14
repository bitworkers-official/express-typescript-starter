"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//REQUIRES
const express_1 = __importDefault(require("express"));
//STARTUP-SETUP EXPRESS WEB-SERVER
var app = express_1.default();
app.use(express_1.default.static("./dist")); //public folder for client side sources (like htdocs or wwwroot)
app.listen(1337); //port given in environment variable needed for e.g. Azure hosting
console.log(new Date() + " ** Express up and Listening ** ");
