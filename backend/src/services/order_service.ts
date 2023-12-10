import product_model from "../models/product_model";
import order_model from "../models/order_model";
import session_model from "../models/session_model";
import { order_data } from "../interfaces/order_interface";
import { make_receipt } from "../utils/utils";
import { v4 as uuidv4 } from 'uuid';
import { response } from "express";

const create_order = async (order_data:order_data ) => {
    try{

        const user_session = await session_model.findOne({session_token: order_data.session_token });

        if(!user_session){
            throw new Error("Error reading user session in the creation of the order")
        }

        const user_uuid = user_session.user.user_uuid;
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

export {create_order}