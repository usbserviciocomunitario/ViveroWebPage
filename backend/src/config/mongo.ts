import "dotenv/config"
import {connect} from "mongoose"

async function db_connect(): Promise<void>{
    const db_uri = <string> process.env.DB_URI
    await connect(db_uri);
}

export default db_connect;