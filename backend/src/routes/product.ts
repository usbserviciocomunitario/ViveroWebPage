import { Router, Request, Response } from "express";
import { post_product } from "../controllers/product._controller";
import { upload_middleware } from "../middlewares/upload";
import { check_session_jwt } from "../middlewares/session";
export const router = Router();

router.post("/",check_session_jwt,upload_middleware.single("product_img"),post_product)
