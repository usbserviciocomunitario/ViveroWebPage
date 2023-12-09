import { Router, Request, Response } from "express";
import { get_products, post_product, put_product } from "../controllers/product._controller";
import { upload_middleware } from "../middlewares/upload";
import { check_session_jwt } from "../middlewares/session";
export const router = Router();



router.post("/",upload_middleware.single("product_img"),post_product)
router.get("/",get_products);
router.put("/:product_uuid",upload_middleware.single("product_img"),put_product)