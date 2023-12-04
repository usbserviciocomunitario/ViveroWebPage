import product_model from '../models/product_model';
import product_interface from '../interfaces/product_interface';
import { v4 as uuidv4 } from 'uuid';


const create_product = async (product_detail : product_interface, product_img_url:string)=>{
    try{
        console.log(product_img_url)
        /*const product_create = await product_model.create({
            product_uuid: uuidv4(),
            product_detail,
            product_img_url
        })*/
        return product_img_url;
    }catch(error){
        throw(error)
    }
   
}

export {create_product}