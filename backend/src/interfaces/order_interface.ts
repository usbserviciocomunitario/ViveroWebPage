import { Document } from 'mongoose';

interface order_interface extends Document {
  order_uuid: string;
  user_uuid: string;
  product_uuid: string;
  order_detail: {
    order_price: number;
    order_description: string;
    order_receipt: string;
  };
  order_datetime: string;
  order_status: string;
}

interface order_data {
  product_uuid : string;
  session_token: string;
  order_detail: {
    order_price?: string;
    order_description: string;
    order_receipt?: string
  };
}

export  {order_interface,order_data};
