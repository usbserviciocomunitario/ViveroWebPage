import { Router, Request, Response } from "express";
import { check_session_jwt } from "../middlewares/session";
import { post_order } from "../controllers/order_controller";
export const router = Router();


//TODO: 
router.post("/",check_session_jwt,post_order);

router.get("/",);

router.put("/:product_uuid",);

router.get("/:product_uuid",);

router.delete("/:product_uuid",);