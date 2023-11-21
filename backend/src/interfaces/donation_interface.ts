import { Document } from 'mongoose';

interface donation_interface extends Document {
  donation_uuid: string;
  donor_uuid: string;
  plant_uuid: string;
  donation_detail: {
    plant_status_in_nursery: string;
    plant_img: string;
  };
  donation_datetime: Date;
  donation_status: string;
}

export default donation_interface;