import { Schema, model } from 'mongoose';
import session_interface from "../interfaces/session_interface";
import { v4 as uuidv4 } from 'uuid';
import { get_day,get_minutes } from '../utils/utils';

const minutes = process.env.SESSION_LIFE || "10";

const sessionSchema = new Schema<session_interface>(
    {
     session_uuid:{
        type:String,
        unique:true,
        required:true
     },
     session_token:{
        type:String
    },
    session_date_start:{
        type:String,
        required:true
    },
    session_date_end:{
        type:String,
        required:true
    },
    user:{
        user_uuid: String,
        user_email:String,
        user_detail:{
            user_address:String,
            user_email: String,
            user_name: String,
            user_docid: String,
            user_role:String
        }
     },
     session_detail:{},
     session_status:{
        type:String,
        default: "active"
     }
    },
    {
      timestamps:false,
      versionKey: false
    }
  );
  
  const session_model = model('security_session', sessionSchema);
  
  export default session_model;