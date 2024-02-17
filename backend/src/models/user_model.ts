import { Schema, model } from 'mongoose';
import {user_interface} from "../interfaces/user_interface";
import { v4 as uuidv4 } from 'uuid';
import { get_day } from '../utils/utils';
const userSchema = new Schema<user_interface>(
  {
    user_uuid: { 
      type: String,
      unique: true,
      required:true
    },
    user_email:  { 
      type: String,
      unique: true,
      required :true
    },
    user_detail: {
      user_name: String,
      user_address: String,
      user_docid: String,
      user_birthdate: String,
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

const user_model = model('security_users', userSchema);

export default user_model;