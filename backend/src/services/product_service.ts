import "dotenv/config"
import product_model from '../models/product_model';
import {product_detail, product_update_data} from '../interfaces/product_interface';
import { v4 as uuidv4 } from 'uuid';
import { product_filters } from '../interfaces/product_interface';
import { delete_file } from "../utils/utils";
import { read_session } from "./session_service";

const SERVER = process.env.SERVER || "http://localhost"
const PORT= process.env.PORT || "3001"

const create_product = async (product_detail : product_detail, product_img_url:string)=>{
    try{
        const detail = product_detail;
        const product_create = await product_model.create({
            product_uuid: uuidv4(),
            product_detail:detail,
            product_img_url:`${SERVER}:${PORT}/${product_img_url}`
        });
        return product_create;
    }catch(error){
        throw(error)
    }
   
}

const list_products = async({search_field,search_text,datetime_start,datetime_end,}: product_filters) => {
    try{
        const filter: Record<string, any> = {};
        if (search_field && search_text) {
          const fields = search_field.split(',');
          const values = search_text.split(',');
    
          if (fields.length === values.length) {
            fields.forEach((field, index) => {
              filter[field] = values[index];
            });
          }
        }
    
        if (datetime_start && datetime_end) {
          filter.product_datetime = {
            $gte: datetime_start,
            $lte: `${datetime_end}T23:59:59.999Z`,
          };
        }
        const products = await product_model.find(filter);
    
        return products;
    }catch(error){
        throw(error)
    }
   
}

const update_product = async (product_uuid:string, update_data: product_update_data) =>{
    try {
        const product = await product_model.findOne({ product_uuid });
    
        if (!product) {
          throw new Error('product does not exist');
        }
  
        if (update_data.product_status !== undefined) {
          product.product_status = update_data.product_status;
        }

        if (update_data.product_detail !== undefined) {

          product.product_detail = {
            ...product.product_detail,
            ...update_data.product_detail,
          };
        }

        if(update_data.filename !==undefined){
            const old_product_filename :any = product.product_img_url.split('/').pop();
            delete_file(`${__dirname}/../storage`,old_product_filename);
            product.product_img_url = `${SERVER}:${PORT}/${update_data.filename}`
        }
    
        await product.save();
    
        return product;
      } catch (error) {
        throw error;
      }
}

const read_product = async (product_uuid: string) =>{
  try{
    const product = await product_model.findOne({product_uuid});
    if(!product_uuid){
      throw new Error('product does not exist');
    }
    return product
  }catch(error){
    throw error
  }
}


const delete_products = async (product_uuid: string,session_token: string) =>{
  try{

    const user_session :any = await read_session(session_token)

    if(user_session.user.user_detail.user_role!="admin"){
        throw new Error("the user doees not administrator")
    }

    const deleted_product = await product_model.findOneAndDelete({ product_uuid });
     if (!deleted_product) {
        throw new Error('Product does not exist');
      }

     const old_product_filename : any =deleted_product.product_img_url.split('/').pop();
     delete_file(`${__dirname}/../storage`,old_product_filename);
     return deleted_product;
  }catch(error){
    throw error
  }
}

export {create_product,list_products,update_product,read_product,delete_products}