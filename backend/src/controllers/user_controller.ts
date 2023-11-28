import { Request, Response } from "express";
import { handle_http } from "../utils/error_handle";
import { create_user, list_users, update_user,read_user,delete_users } from "../services/user_service";

const post_user =async  (req:Request,res:Response)=>{
    try{
        const response_user = await  create_user(req.body);
        console.log(req.body)
        res.send(response_user)
    }catch(e:any){
        handle_http(res,"0001",e.message)
    }
}

const get_users =async (req:Request,res:Response)=>{
    try{
        const response_users =  await list_users(req.query)
        res.send(response_users)
    }catch(e:any){
        handle_http(res,"0005",e.message)
    }
}
const put_user = async (req:Request,res:Response)=>{
    try{
        const { user_uuid } = req.params;  // Supongo que estás pasando user_uuid como parámetro en la URL
        const updateData = req.body as { user_status?: string; user_detail?: any };
    
        const response_update_user = await update_user(user_uuid, updateData);
        res.send(response_update_user);
    }catch(e:any){
        handle_http(res,"0003",e.message)
    }
}

const delete_user =async (req:Request,res:Response)=>{
    try{
        const { user_uuid } = req.params;  
        console.log
        const response_deleted_user = await delete_users(user_uuid);
        res.send(response_deleted_user);
    }catch(e:any){
        handle_http(res,"0004",e.message)
    }
}

const get_user =async  (req:Request,res:Response)=>{
    try{
        const { user_uuid } = req.params;
        const response_read_user = await read_user(user_uuid);
        res.send(response_read_user); 

    }catch(e: any){
        handle_http(res,"0002",e.message)
    }
}



export {post_user,get_users,get_user,put_user,delete_user}