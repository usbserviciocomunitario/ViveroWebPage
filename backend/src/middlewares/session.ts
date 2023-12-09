import { Request, Response, NextFunction } from "express";
import { verify_token } from "../utils/jwt_handle";
import custom_request from "../interfaces/util_interfaces";
import session_model from "../models/session_model";
import { handle_http } from "../utils/error_handle";
  
const check_session_jwt = async (req:custom_request,res:Response,next:NextFunction)=>{
    try{
        const user_session_token = req.headers["session_token"] || null

        if(user_session_token === null){
            throw new Error("Peticion need session token")
        }

        const session : any = await session_model.findOne({session_token:user_session_token});
        const start_date = new Date(session.session_date_start);
        const end_date = new Date(session.session_date_end);
        const current_date = new Date();
        if(!(current_date >= start_date && current_date <= end_date)){
            session.session_status = session.session_status === "active" ? "inactive" : session.session_status;
            await session.save();
            throw new Error("Session expired");
        }
        verify_token(`${user_session_token}`);

        if(session.session_status!=="active"){
            throw new Error("Session expired")

        }

    
        req.session_token = `${user_session_token}`
        next()
        
    }catch(e:any){
       
        handle_http(res,"1004",e.message)
    
    }
}

export {check_session_jwt}