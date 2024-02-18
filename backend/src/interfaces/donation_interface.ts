import { Document } from 'mongoose';

export interface donation_interface extends Document {
  donation_uuid: string;
  user_uuid: string;
  product_uuid: string;
  donation_detail: {
    donation_img: string;
    donation_delivery_date: string;
  };
  donation_datetime: string;
  donation_status: string;
}



export interface donation_filters {
  search_field?: string;
  search_text?: string;
  datetime_start?: string;
  datetime_end?: string;
}


