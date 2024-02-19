import "dotenv/config"
import product_model from '../models/product_model';
import donation_model from "../models/donation_model";
import {product_detail, product_update_data} from '../interfaces/product_interface';
import { v4 as uuidv4 } from 'uuid';
import { donation_filters } from "../interfaces/donation_interface";
import { delete_file } from "../utils/utils";
import { read_session } from "./session_service";


const SERVER = process.env.SERVER || "http://localhost"
const PORT= process.env.PORT || "3001"

const create_donation= async (session_token:string,product_detail : product_detail, donation_delivery_date: string,product_img_url:string)=>{
    try{

        const user = (await read_session(session_token)).user;

    
        const detail = product_detail;
        const product_create = await product_model.create({
            product_uuid: uuidv4(),
            product_detail:detail,
            product_img_url:`${SERVER}:${PORT}/${product_img_url}`,
            product_status: "pending"
        });

        const donation_detail = {
            donation_img_url: product_create.product_img_url,
            donation_delivery_date
        }

        const donation_create = await donation_model.create({
            donation_uuid: uuidv4(),
            user_uuid: user.user_uuid,
            product_uuid : product_create.product_uuid,
            donation_detail,
            donation_status:"pending"
        })



        return donation_create;
    }catch(error){
        throw(error)
    }
   
}


const list_donations = async({search_field,search_text,datetime_start,datetime_end,}: donation_filters) => {
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
          filter.donation_datetime = {
            $gte: datetime_start,
            $lte: `${datetime_end}T23:59:59.999Z`,
          };
        }
        const products = await donation_model.find(filter);
    
        return products;
    }catch(error){
        throw(error)
    }
   
}

const update_status_donation = async()=>{

}



export {create_donation, list_donations,update_status_donation}