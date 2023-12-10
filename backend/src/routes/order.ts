import { Router, Request, Response } from "express";
import { check_session_jwt } from "../middlewares/session";
import { get_orders, post_order,get_order, delete_order} from "../controllers/order_controller";
export const router = Router();


//TODO: 
router.post("/",check_session_jwt,post_order);

router.get("/",check_session_jwt,get_orders);

router.get("/:order_uuid",check_session_jwt,get_order);

router.delete("/:order_uuid",check_session_jwt,delete_order);