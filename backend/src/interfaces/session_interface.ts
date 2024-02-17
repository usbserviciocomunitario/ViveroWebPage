import { Document } from 'mongoose';

interface session_interface extends Document {
  session_uuid: string;
  session_token: string;
  session_date_start: string;
  session_date_end: string;
  user: {
    user_uuid: string;
    user_email: string;
    user_detail: {
      user_name: string;
      user_address: string;
      user_docid: string;
      user_birthdate: string;
      user_role: string;
    };
  };
  session_detail: {};
  session_status: string;
}

export default session_interface;