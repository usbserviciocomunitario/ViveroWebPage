import "dotenv/config"
import express from "express"
import cors from "cors"
import { router } from "./routes";

const PORT = process.env.PORT || 3000

const app = express()
app.use(cors())
app.use(express.json());
app.use(router)

async function main () {
    console.log("initializing server...");

    try {
        app.listen(PORT);
        console.log('Server on port ', `http://localhost:${PORT}`)
    

    } catch (error) {
        console.log(error);
    }
}

main();