import { Document } from 'mongoose';

interface donation_interface extends Document {
  donation_uuid: string;
  donor_uuid: string;
  product_uuid: string;
  donation_detail: {
    product_status_in_nursery: string;
    product_img: string;
  };
  donation_datetime: string;
  donation_status: string;
}

export default donation_interface;