import { sign,verify } from "jsonwebtoken";
import { minutos_to_segundos } from "./utils";
const JWT_SECRECT = process.env.JWT_SECRET || "Semilla"
const minutes = process.env.SESSION_LIFE || "10";
const generate_token = async (user_uuid:string)=>{
    const jwt =  sign({user_uuid},JWT_SECRECT,{
        expiresIn: minutos_to_segundos(minutes)+"s"
    });
    return jwt
}

const verify_token = (session_token:string) =>{
    try{
        const is_correct = verify(session_token,JWT_SECRECT)
        return is_correct;

    }catch(e:any){
        throw new Error("Invalid session token")
    }
   
}

export {generate_token,verify_token}