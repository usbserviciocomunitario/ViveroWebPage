import { Document } from 'mongoose';

interface product_interface extends Document {
  product_uuid: string;
  product_detail: {
    product_name: string;
    product_species: string;
    product_soil_type: string;
    product_role: string;
    product_price: string;
    product_description: string;
  };
  product_img_url: string;
  product_status: string;
  product_datetime: string;
}


interface product_detail {
  product_name: string;
  product_species: string;
  product_soil_type: string;
  product_role: string;
  product_price: string;
  product_description: string;
}

interface product_update_data {
  product_status?: string;
  filename?: string;
  product_detail?:{
    product_name?: string;
    product_species?: string;
    product_soil_type?: string;
    product_role?: string;
    product_price?: string;
    product_description?: string;
  }
}



interface product_filters {
  search_field?: string;
  search_text?: string;
  datetime_start?: string;
  datetime_end?: string;
}

export {product_interface,product_detail,product_filters,product_update_data};