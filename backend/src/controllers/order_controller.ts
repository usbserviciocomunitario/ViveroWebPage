import { Request, Response } from "express";
import { handle_http } from "../utils/error_handle";
import { create_order, list_orders, read_order,delete_orders} from "../services/order_service";
import custom_request from "../interfaces/util_interfaces";
import order_model from "../models/order_model";

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

const get_orders = async(req:custom_request,res:Response) =>{
    try{
        const session_token : any =req.session_token;
        const response_list_orders = await list_orders(session_token);
        res.send(response_list_orders);
    }catch(e:any){
        handle_http(res,"3002",e.message)
    }
}

const get_order = async( req:custom_request, res:Response) =>{
    try{
       const {order_uuid} = req.params;
       const response_read_order = await read_order(order_uuid);
       res.send(response_read_order);
    }catch(e:any){
        handle_http(res,"3003",e.message)
    }
}

const delete_order = async(req:custom_request,res:Response)=>{
    try{
        const {order_uuid} = req.params;
        const session_token :any = req.session_token
       const response_delete_order = await delete_orders(order_uuid, session_token);
       res.send(response_delete_order)
    }catch(e:any){
        handle_http(res,"3004",e.message)
    }
}
export {post_order,get_orders,get_order,delete_order}