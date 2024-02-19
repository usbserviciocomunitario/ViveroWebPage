import { Request, Response } from "express";
import custom_request from "../interfaces/util_interfaces";
import { handle_http } from "../utils/error_handle";
import { create_donation, list_donations, update_status_donation } from "../services/donation_service";

const post_donation = async(req:custom_request,res:Response) =>{
    try{
        const {product_detail, donation_delivery_date} = req.body
        const {file} :any = req
        const filename = file.filename;
        const json_product_detail = JSON.parse(product_detail);
        const session_token : any = req.session_token;
        const response_create_donation = await create_donation(session_token,json_product_detail,donation_delivery_date,filename);
       res.send(response_create_donation);
    }catch(e:any){
        handle_http(res,"4001",e.message)
    }
}


const get_donations =  async(req:Request,res:Response) =>{
    try{
        const response_donations =  await list_donations(req.query)
        res.send(response_donations)
      
    }catch(e:any){
        handle_http(res,"4002",e.message)
    }
}


const put_status_donation = async(req:Request,res:Response) =>{
    try{
        const response_donations =  await update_status_donation(req.query)
        res.send(response_donations)
      
    }catch(e:any){
        handle_http(res,"4003",e.message)
    }
}

export  {post_donation, get_donations, put_status_donation}


