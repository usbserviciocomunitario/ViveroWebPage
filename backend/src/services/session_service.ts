import user_model from "../models/user_model";
import session_model from "../models/session_model";
import password_model from "../models/password_model";
import { verify } from "../utils/bcrypt_handle";
import { generate_token } from "../utils/jwt_handle";
import { v4 as uuidv4 } from 'uuid';
import { get_day,get_minutes } from "../utils/utils";

const minutes = process.env.SESSION_LIFE || "10";

const create_session = async(user_email:string, user_password:string) =>{
    try {
      
      const find_user = await user_model.findOne({user_email})

      if(!find_user){
        throw new Error("The data is incorrect")
      }
      const {user_uuid,user_detail} = find_user
      const obj_password = await  password_model.findOne({user_uuid});
      const user = {user_uuid,user_email,user_detail}

      if(!obj_password){
        throw new Error("An error occurred while reading the password")
      }
      const {password_key} = obj_password 
      const is_correct = await verify(user_password,password_key);

      if(!is_correct){
        throw new Error("the password is invalid")
      }

      const old_sessions = await session_model.find({
        'user.user_uuid':user_uuid,
        session_status:'active',
     })

    if(old_sessions.length!==0){

      const session_uuids = old_sessions.map(session => session.session_uuid);

      await session_model.updateMany(
        { session_uuid: { $in: session_uuids } },
        { $set: { session_status: 'inactive' } }
      );
      throw new Error("Error Session duplciate")

    }
    const session_token =await generate_token(user.toString());
    const session_create =await session_model.create({
        session_uuid:uuidv4(),
        session_date_start: get_day(),
        session_date_end : get_minutes(minutes),
        session_token,
        user
    })
        return session_create;
 
    } catch (error) {
      throw error;
  }
}

const read_session = async (session_token:string)=>{
    try{
        const find_session = await session_model.findOne({session_token});
        return find_session;     
    }catch(error){
        throw error;
    }
   
}

const logout_session = async (session_token:string) =>{
  try{
      const find_session = await session_model.findOne({session_token});
      if(!find_session){
        throw new Error("Error reading session")
      }

      find_session.session_status = "inactive";

      await find_session.save();

      return find_session;


  }catch(error){
        throw error;
    }
}

export {create_session,read_session,logout_session}