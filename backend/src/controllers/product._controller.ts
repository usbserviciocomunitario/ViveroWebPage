import { Request, Response } from "express";
import { handle_http } from "../utils/error_handle";
import { create_product, list_products, update_product } from "../services/product_service";


const post_product = async(req:Request,res:Response) =>{
    try{
        const {product_detail} = req.body
        const {file} :any = req
        const filename = file.filename;
        const json_product_detail = JSON.parse(product_detail);
        const response_create_product = await create_product(json_product_detail,filename);
       res.send(response_create_product);
    }catch(e:any){
        handle_http(res,"2001",e.message)
    }
}

const get_products =  async(req:Request,res:Response) =>{
    try{
        const response_products =  await list_products(req.query)
        res.send(response_products)
      
    }catch(e:any){
        handle_http(res,"2002",e.message)
    }
}

const put_product = async(req:Request,res:Response) =>{
    const {product_uuid} = req.params
    var {product_detail, product_status} = req.body

    
    const {file} :any = req
    const filename =file!==undefined ?file.filename : undefined;
    product_detail = product_detail!==undefined? JSON.parse(product_detail): undefined;
    const update_data = {product_detail,product_status,filename}
    const update_product_response = await update_product(product_uuid,update_data)
    res.send(update_product_response)
}
export {post_product,get_products,put_product}