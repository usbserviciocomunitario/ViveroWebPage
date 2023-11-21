import { Document } from 'mongoose';

interface purchase_interface extends Document {
  purchase_uuid: string;
  user_uuid: string;
  plant_uuid: string;
  purchase_detail: {
    purchase_price: number;
    purchase_description: string;
  };
  purchase_datetime: Date;
  purchase_status: string;
}

export default purchase_interface;
