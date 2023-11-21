import { Schema, model } from 'mongoose';
import user_interface from "../interfaces/user_interface";
import { v4 as uuidv4 } from 'uuid';
import { get_day } from '../utils/utils';
const userSchema = new Schema<user_interface>(
  {
    user_uuid: { 
      type: String,
      required: true,
      default: uuidv4,
      unique: true
    },
    user_detail: {
      user_name: String,
      user_address: String,
      user_email: String,
      user_role: { 
        type: String, 
        default: 'client',
        enum:['client','admin']

      },
     
    },
    user_datetime: { 
      type: String,
      default: get_day()
    },
    user_status: {
      type: String, 
      default: 'active'
    },
  },
  {
    timestamps:false,
    versionKey: false
  }
);

const user_model = model('user', userSchema);

export default user_model;