import "dotenv/config"
import product_model from '../models/product_model';
import donation_model from "../models/donation_model";
import mongoose from "mongoose";
import {product_detail, product_update_data} from '../interfaces/product_interface';
import { v4 as uuidv4 } from 'uuid';
import { donation_filters, donation_interface } from "../interfaces/donation_interface";
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

const update_status_donation = async(donation_uuid:string, status: string)=>{
  const session = await mongoose.startSession();
  try{
   
    const donation = await donation_model.findOne({donation_uuid})

    if(!donation){
      throw new Error("donation does not exists");
    }

    const product_uuid = donation.product_uuid;


    const product = await product_model.findOne({product_uuid})

    if(!product){
      throw new Error("The product linked to the donation does not exist");
    }
    session.startTransaction();
    product.product_status = status;
    product.save();

    donation.donation_status = status;
    donation.save();

    await session.commitTransaction();

    return donation
  }catch(error){
      await session.abortTransaction();
      throw(error)
  }finally{
    session.endSession();
  }

}


const read_donation = async(donation_uuid:string)=>{
  try{
    const read_donation = await donation_model.findOne({donation_uuid})
    if(!read_donation){
      throw new Error("donation does not exists");
    }

    return read_donation;
  }catch(error){
    throw(error)
  }
}

const delete_my_donation = async(donation_uuid:string,session_token:string)=>{
  const session = await mongoose.startSession();
  try{
    session.startTransaction();
    const user_session :any = await read_session(session_token)
   
    if(user_session.user.user_detail.user_role!="admin"){
        throw new Error("the user doees not administrator")
    }
   
    const deleted_donation = await donation_model.findOneAndDelete({ donation_uuid });


    if (!deleted_donation) {
       throw new Error('donation does not exist');
     }

    const product_uuid = deleted_donation.product_uuid;
    const deleted_product = await product_model.findOneAndDelete({ product_uuid });
    if (!deleted_product) {
       throw new Error('Product does not exist');
     }
    await session.commitTransaction();
    const old_product_filename : any =deleted_product.product_img_url.split('/').pop();
    delete_file(`${__dirname}/../storage`,old_product_filename);

    return deleted_donation;
  }catch(error){
    await session.abortTransaction();
    throw(error)
  }finally{
    session.endSession();
  }
}


const update_donation = async(donation_uuid:string,filename:string)=>{
  const session = await mongoose.startSession();
  try{
    const read_donation : any = await donation_model.findOne({donation_uuid})
    
    if(!read_donation){
      throw new Error("donation does not exists");
    }
    const product_uuid = read_donation.product_uuid;

    const read_product = await product_model.findOne({product_uuid});
    if(!read_product){
      throw new Error("The product linked to the donation does not exist");
    }
    session.startTransaction();

    const old_product_filename :any = read_product.product_img_url.split('/').pop();
  

    read_product.product_img_url = `${SERVER}:${PORT}/${filename}`,
    read_product.save();

    read_donation.donation_detail.donation_img_url = `${SERVER}:${PORT}/${filename}`,
    read_donation.save();

   
    await session.commitTransaction();
    delete_file(`${__dirname}/../storage`,old_product_filename);


    return read_donation;
  }catch(error){
    await session.abortTransaction();
    throw(error)
  }finally{
    session.endSession();
  }
}


export {create_donation, list_donations,update_status_donation,read_donation,update_donation,delete_my_donation}