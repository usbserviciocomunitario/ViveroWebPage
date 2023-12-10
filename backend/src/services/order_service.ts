import product_model from "../models/product_model";
import order_model from "../models/order_model";
import session_model from "../models/session_model";
import { order_data } from "../interfaces/order_interface";
import { make_receipt } from "../utils/utils";
import { v4 as uuidv4 } from 'uuid';
import { response } from "express";
import { list_products } from "./product_service";
import { read_session } from "./session_service";

const create_order = async (order_data:order_data ) => {
    try{

        const session_user = await read_session(order_data.session_token);

        if(!session_user){
            throw new Error("Error reading user session in the creation of the order")
        }

        const user_uuid = session_user.user.user_uuid;
        const order_uuid = uuidv4();
        const product = await product_model.findOne({product_uuid: order_data.product_uuid})

        if(!product){
            throw new Error("Product does not exist")
        }
        var {order_detail}=  order_data;
        order_detail.order_receipt = make_receipt();
        order_detail.order_price = product.product_detail.product_price;
        const create_order = await order_model.create({
            order_uuid,
            user_uuid,
            product_uuid:product.product_uuid,
            order_detail
        })
        
        return create_order;
       
    }catch(error){
        throw error
    }
}

const list_orders = async(session_token: string) =>{
    try{
        const session_user = await read_session(session_token);
    
        if(!session_user){
            throw new Error("Error reading user session in the list of the orders")
        }
    
        const user_uuid = session_user.user.user_uuid;
        const user_role = session_user.user.user_detail.user_role;
        var orders;
        if(user_role!=="admin"){
             orders =await order_model.find({user_uuid})
        }else{
            orders = await order_model.find();
        }
    
        return orders
    }catch(error){
        throw error
    }
   
}


const read_order = async(order_uuid:string)=>{
    try{

        const read_order = await order_model.findOne({
            $or: [
                { order_uuid: order_uuid },
                { 'order_detail.order_receipt': order_uuid },
              ],
        });
        return read_order;
    }catch(error){
        throw error
    }
}

const delete_orders = async(order_uuid:string,session_token:string)=>{
    try{
        const user_session :any = await read_session(session_token)

        if(user_session.user.user_detail.user_role!="admin"){
            throw new Error("the user doees not administrator")
        }

        const deleted_order = await order_model.findOneAndDelete({ order_uuid });
        if (!deleted_order) {
           throw new Error('Order does not exist');
         }
        return deleted_order;
        
    }catch(error){
        throw error
    }
}
export {create_order,list_orders,read_order,delete_orders}