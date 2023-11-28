import { Document } from 'mongoose';
interface password_interface extends Document {
    user_uuid : string
    password_uuid: string;
    password_datetime: string;
    password_expiration_date: string;
    password_status: string;
    password_key: string;
    password_detail: {};
    password_count: number;
  }

  export {password_interface}