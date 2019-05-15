import * as  express from "express"
import * as path from 'path'

// create express server
export const app = express();
// public folder for client side sources (like htdocs or wwwroot)
app.use(express.static(path.join(__dirname, "../static"))); 