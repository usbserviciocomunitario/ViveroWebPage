import { Request, Response } from "express";
import { handle_http } from "../utils/error_handle";
import { create_user } from "../services/user_service";

const post_user =async  (req:Request,res:Response)=>{
    try{

        const response_user = await  create_user(req.body);
        res.send(response_user)
    }catch(e){
        handle_http(res,"ERROR_CREATING_USER")
    }
}

const get_users = (req:Request,res:Response)=>{
    try{

    }catch(e){
        handle_http(res,"ERROR_LISTENING_USERS")
    }
}
const put_user = (req:Request,res:Response)=>{
    try{

    }catch(e){
        handle_http(res,"ERROR_UPDATING_USER")
    }
}

const delete_user = (req:Request,res:Response)=>{
    try{

    }catch(e){
        handle_http(res,"ERROR_DELETING_USER")
    }
}

const get_user = (req:Request,res:Response)=>{
    try{

    }catch(e){
        handle_http(res,"ERROR_READING_USERS")
    }
}

export {post_user,get_users,get_user,put_user,delete_user}