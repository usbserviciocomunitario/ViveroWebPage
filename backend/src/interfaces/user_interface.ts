import { Document } from 'mongoose';

interface user_interface extends Document {
  user_uuid: string;
  user_email: string;
  user_detail: {
    user_name: string;
    user_address: string;
    user_docid : string;
    user_role: "client" | "admin";
  };
  user_datetime: string;
  user_status: string;
}

interface user_create_data extends user_interface {
  password : string;
 
}


interface user_filters {
  search_field?: string;
  search_text?: string;
  datetime_start?: string;
  datetime_end?: string;
}


interface user_update_data {
  user_status?: string;
  user_detail?: {
    user_name?: string;
    user_address?: string;
    user_email?: string;
    user_role?: "client" | "admin";
  };
}
export {user_interface,user_filters,user_update_data,user_create_data};