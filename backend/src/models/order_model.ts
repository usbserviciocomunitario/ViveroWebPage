import { Schema, model } from 'mongoose';
import {order_interface} from "../interfaces/order_interface";
import { get_day } from '../utils/utils';
const orderSchema = new Schema<order_interface>(
  {
    order_uuid: { 
      type: String,
      unique: true,
      required:true
    },
    user_uuid:{
        type: String,
        required:true
    },
    product_uuid:{
        type: String,
        required:true
    },

    order_detail: {
        order_price: String,
        order_description: String,
        order_receipt: String
    },
    order_datetime: { 
      type: String,
      default: get_day()
    },
    order_status: {
      type: String, 
      default: 'active'
    },
  },
  {
    timestamps:false,
    versionKey: false
  }
);

const order_model = model('grocery_order', orderSchema);

export default order_model;