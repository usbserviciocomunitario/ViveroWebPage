import { Document } from 'mongoose';

interface session_interface extends Document {
  session_uuid: string;
  user: {
    user_uuid: string;
    user_detail: {
      user_name: string;
      user_address: string;
      user_email: string;
      user_role: string;
    };
  };
  session_detail: {
    session_token: string;
    session_date_start: Date;
    session_date_end: Date;
  };
}

export default session_interface;