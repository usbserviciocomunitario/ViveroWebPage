import { Request, Response } from "express";
import { handle_http } from "../utils/error_handle";
import { create_order} from "../services/order_service";
import custom_request from "../interfaces/util_interfaces";

const post_order = async(req:custom_request,res:Response) =>{
    try{
        const {order_detail,product_uuid} = req.body
        const session_token : any = req.session_token
        const order_data = {order_detail,product_uuid,session_token}
        const response_create_order = await create_order(order_data);
       res.send(response_create_order);
    }catch(e:any){
        handle_http(res,"3001",e.message)
    }
}

export {post_order}