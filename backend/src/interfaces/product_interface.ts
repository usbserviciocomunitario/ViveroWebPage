import { Document } from 'mongoose';

interface product_interface extends Document {
  product_uuid: string;
  product_detail: {
    product_name: string;
    product_species: string;
    product_soil_type: string;
    product_role: string;
    product_price: string;
  };
  product_img_url: string;
  product_status: string;
  product_datetime: string;
}

export default product_interface;