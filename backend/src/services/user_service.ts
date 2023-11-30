import {user_filters, user_interface, user_update_data, user_create_data} from "../interfaces/user_interface";
import user_model from "../models/user_model";
import password_model from "../models/password_model";
import { v4 as uuidv4 } from 'uuid';
import { encrypt, verify } from "../utils/bcrypt_handle";

const create_user = async(user_data:user_create_data) =>{
    try {
      const {user_email,user_detail,password} = user_data
      const user_uuid = uuidv4();

      const find_user = await user_model.findOne({user_email})

      if(find_user){
        throw new Error("User does exist")
      }

      const user_password = await password_model.create({
        user_uuid:user_uuid,
        password_key: await encrypt(password)
     })

     if(user_password){
      const response = await user_model.create({
        user_uuid : user_uuid,
        user_email: user_email,
        user_detail: user_detail 
      });
      return response;
     }else{
      throw new Error("Error creating password user")
     }

   
    } catch (error) {
      throw error;
  }
}


const list_users = async({search_field,search_text,datetime_start,datetime_end,}: user_filters) => {
    try {
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
        filter.user_datetime = {
          $gte: datetime_start,
          $lte: `${datetime_end}T23:59:59.999Z`,
        };
      }
      const users = await user_model.find(filter);
  
      return users;
    } catch (error) {
      throw error;
    }
  }


  const  update_user = async(user_uuid: string, update_data: user_update_data) => {
    try {
      const user = await user_model.findOne({ user_uuid });
  
      if (!user) {
        throw new Error('User does not exist');
      }

      if (update_data.user_status !== undefined) {
        user.user_status = update_data.user_status;
      }
  
      // Actualizar user_detail si se proporciona
      if (update_data.user_detail !== undefined) {
        user.user_detail = {
          ...user.user_detail,
          ...update_data.user_detail,
        };
      }
  
      await user.save();
  
      return user;
    } catch (error) {
      throw error;
    }
  }


  const  read_user = async(user_uuid: string) => {
    try {
      const user = await user_model.findOne({ user_uuid });
  
      if (!user) {
        throw new Error('User does not exist');
      }
  
      return user;
    } catch (error) {
      throw error;
    }
  }

const delete_users = async (user_uuid: string): Promise<any> => {
    try {

    const deleted_user = await user_model.findOneAndDelete({ user_uuid });
     if (!deleted_user) {
        throw new Error('User does not exist');
      }
   
      return deleted_user;
    } catch (error) {
      throw error;
    }
  };

  const update_user_paswword = async (user_email: string,old_password:string,new_password:string): Promise<any> => {
    try {

    const find_user = await user_model.findOne({ user_email });
     if (!find_user) {
        throw new Error('User does not exist');
      }

      const {user_uuid} = find_user
      const obj_password = await  password_model.findOne({user_uuid});

      if(!obj_password){
        throw new Error("An error occurred while reading the password")
      }
      const {password_key} = obj_password 
      const is_correct = await verify(old_password,password_key);

      if(!is_correct){
        throw new Error("the password is invalid")
      }

      obj_password.password_key = await encrypt(new_password);

      await obj_password.save()

      return find_user;
   
    } catch (error) {
      throw error;
    }
  };


export {create_user,list_users,update_user,read_user,delete_users,update_user_paswword};