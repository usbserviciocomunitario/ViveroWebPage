import { Router, Request, Response } from "express";
import {post_donation, get_donations } from "../controllers/donation_controller";
import { upload_middleware } from "../middlewares/upload";
import { check_session_jwt } from "../middlewares/session";
export const router = Router();


//TODO: 
router.post("/",check_session_jwt,upload_middleware.single("product_img"),post_donation);


router.get("/",check_session_jwt,get_donations)


router.put("/status/",check_session_jwt,)