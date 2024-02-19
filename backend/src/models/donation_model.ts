import { Schema, model } from 'mongoose';
import {donation_interface} from "../interfaces/donation_interface";
import { v4 as uuidv4 } from 'uuid';
import { get_day } from '../utils/utils';
const donationSchema = new Schema<donation_interface>(
  {
    donation_uuid: { 
      type: String,
      unique: true,
      required:true
    },

    user_uuid: { 
        type: String,
        required:true
      },
    product_uuid: { 
        type: String,
        required:true
      },

    donation_detail: {
        donation_img_url: String,
        donation_delivery_date: String,
    },
    
    donation_datetime: { 
      type: String,
      default: get_day()
    },
    donation_status: {
      type: String, 
      default: 'pending'
    },
  },
  {
    timestamps:false,
    versionKey: false
  }
);

const donation_model = model('grocery_donation', donationSchema);

export default donation_model;