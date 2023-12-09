import "dotenv/config"
import express from "express"
import cors from "cors"
import { router } from "./routes";
import db_connect from "./config/mongo";
const PORT = process.env.PORT || 3000

const app = express()
const absolute_path = `${__dirname}/storage`
app.use(express.static(absolute_path));
app.use(cors());
app.use(express.json());
app.use(router)

async function main () {
    console.log("initializing server...");

    try {
        db_connect().then(()=>console.log("Connection Ready"))
        app.listen(PORT);
        console.log('Server on port ', `http://localhost:${PORT}`)
    

    } catch (error) {
        console.log(error);
    }
}

main();