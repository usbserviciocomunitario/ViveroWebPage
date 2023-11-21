import { Document } from 'mongoose';

interface user_interface extends Document {
  user_uuid: string;
  user_detail: {
    user_name: string;
    user_address: string;
    user_email: string;
    user_role: "client" | "admin";
  };
  user_datetime: string;
  user_status: string;
}

export default user_interface;