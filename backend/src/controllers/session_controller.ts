
import { Request, Response } from "express";
import { handle_http } from "../utils/error_handle";


const post_session =async  (req:Request,res:Response)=>{
    try{

       
    }catch(e:any){
        handle_http(res,"1001",e.message)
    }
}