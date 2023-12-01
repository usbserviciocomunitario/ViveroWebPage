import { Router, Request, Response } from "express";
import multer from "multer";
import { upload_middleware } from "../middlewares/upload";
import { check_session_jwt } from "../middlewares/session";
export const router = Router();

router.post("/",upload_middleware.single("product_img"),(req:Request,res:Response)=>{
    res.send({a:1})
})
