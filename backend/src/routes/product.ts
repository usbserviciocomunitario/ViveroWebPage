import { Router, Request, Response } from "express";
import { get_products, post_product, put_product, get_product,delete_product} from "../controllers/product._controller";
import { upload_middleware } from "../middlewares/upload";
import { check_session_jwt } from "../middlewares/session";
export const router = Router();


//TODO: 
router.post("/",upload_middleware.single("product_img"),post_product);

router.get("/",get_products);

router.put("/:product_uuid",upload_middleware.single("product_img"),put_product);

router.get("/:product_uuid",get_product);

router.delete("/:product_uuid",delete_product);