import { Request, Response, NextFunction } from "express";
import { verify_token } from "../utils/jwt_handle";
import custom_request from "../interfaces/util_interfaces";

  
const check_session_jwt = (req:custom_request,res:Response,next:NextFunction)=>{
    try{
        const user_session_token = req.headers["session_token"] || null

        if(user_session_token === null){
            throw new Error("Peticion need session token")
        }
        verify_token(`${user_session_token}`);
    
        req.session_token = `${user_session_token}`
        next()
        
    }catch(e:any){
       
        res.status(400)
        res.send(e.message)
    }
}

export {check_session_jwt}