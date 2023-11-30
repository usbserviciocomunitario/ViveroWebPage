
import { Request, Response } from "express";
import { handle_http } from "../utils/error_handle";
import { create_session,read_session } from "../services/session_service";

const post_session =async  (req:Request,res:Response)=>{
    try{
        const {user_email,password} = req.body

        console.log(user_email,password)
        const session_response  = await create_session(user_email,password);
        res.send(session_response);
    }catch(e:any){
        handle_http(res,"1001",e.message)
    }
}

const get_session = async (req:Request,res:Response) =>{
    try{
        const {session_token} = req.params
        const response_read_session = await read_session(session_token);
        res.send(response_read_session);

    }catch(e:any){
        handle_http(res,"1002",e.message)
    }
}

export {post_session,get_session}