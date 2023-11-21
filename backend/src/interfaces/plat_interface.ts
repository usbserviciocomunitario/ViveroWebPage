import { Document } from 'mongoose';

interface plant_interface extends Document {
  plant_uuid: string;
  plant_detail: {
    plant_name: string;
    plant_species: string;
    soil_type: string;
    plant_role: string;
    plant_price: number;
    plant_img: string;
  };
  plant_status: string;
}

export default plant_interface;