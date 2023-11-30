import { Request, Response, NextFunction } from "express";
import { verify_token } from "../utils/jwt_handle";

interface CustomRequest extends Request {
    session_token?: string;
  }
  
const check_session_jwt = (req:CustomRequest,res:Response,next:NextFunction)=>{
    try{
        const user_session_token = req.headers["session_token"] || null

        if(user_session_token === null){
            throw new Error("Peticion need session token")
        }
        const is_ok = verify_token(`${user_session_token}`);
        if(!is_ok){
            throw new Error("Invalid session token")
        }else{
            req.session_token = `${user_session_token}`
            console.log(user_session_token);
            next()
        }
    }catch(e:any){
        res.status(400)
        res.send(e.message)
    }
}

export {check_session_jwt}