import { Schema, model } from 'mongoose';
import {product_interface} from "../interfaces/product_interface";
import { v4 as uuidv4 } from 'uuid';
import { get_day } from '../utils/utils';
const productSchema = new Schema<product_interface>(
  {
    product_uuid: { 
      type: String,
      unique: true,
      required:true
    },

    product_detail: {
        product_name: String,
        product_species: String,
        product_soil_type: String,
        product_role: String,
        product_price: String,
        product_description: String,
     
    },
    product_img_url: {
        type:String,
        required:true
    },
    product_datetime: { 
      type: String,
      default: get_day()
    },
    product_status: {
      type: String, 
      default: 'active'
    },
  },
  {
    timestamps:false,
    versionKey: false
  }
);

const product_model = model('grocery_product', productSchema);

export default product_model;