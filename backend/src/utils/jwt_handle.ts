import { sign,verify } from "jsonwebtoken";
const JWT_SECRECT = process.env.JWT_SECRET || "Semilla"

const generate_token = async (user_uuid:string)=>{
    const jwt =  sign({user_uuid},JWT_SECRECT,{
        expiresIn: "600s"
    });
    return jwt
}

const verify_token = (session_token:string) =>{
    const is_correct = verify(session_token,JWT_SECRECT)
    return is_correct;
}

export {generate_token,verify_token}