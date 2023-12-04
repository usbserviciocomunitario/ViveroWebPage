import { Request, Response } from "express";
import { handle_http } from "../utils/error_handle";
import { create_product } from "../services/product_service";


const post_product = async(req:Request,res:Response) =>{
    try{
        const {product_detail} = req.body
        const {file} :any = req
       console.log(file.filename,product_detail)
       // const response_create_product = await create_product(product_detail,filename);
       // res.send(file)
    }catch(e:any){
        handle_http(res,"2001",e.message)
    }
}

export {post_product}