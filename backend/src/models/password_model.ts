import "dotenv/config"
import { Schema, model } from 'mongoose';
import {password_interface} from "../interfaces/password_interface";
import { v4 as uuidv4 } from 'uuid';
import { get_day, get_months } from '../utils/utils';

const months = process.env.EXPIRATION_RATE || "1";

const passwordSchema = new Schema<password_interface>(
    {
        user_uuid:{
            type: String,
            required: true,
        },
        password_uuid: {
            type: String,
            default: uuidv4,
            unique: true
          },
          password_datetime: {
            type: String,
            default: get_day()
          },
          password_expiration_date: {
            type: String,
            default: get_months(months)
          },
          password_status: {
            type: String, 
            default: 'active'
          },
          password_key: {
            type: String,
            required: true,
          },
          password_detail: {
          },
          password_count: {
            type: Number,
            default: 0
          },
        },
        {
          timestamps: false,
          versionKey: false,
        }
  );
  
  const password_model = model('security_password', passwordSchema);
  
  export default password_model;