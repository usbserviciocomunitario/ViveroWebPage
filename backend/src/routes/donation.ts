import { Router, Request, Response } from "express";
import {post_donation, get_donations, put_status_donation,get_donation,put_donation, delete_donation } from "../controllers/donation_controller";
import { upload_middleware } from "../middlewares/upload";
import { check_session_jwt } from "../middlewares/session";
export const router = Router();


//TODO: 
router.post("/",check_session_jwt,upload_middleware.single("product_img"),post_donation);


router.get("/",check_session_jwt,get_donations)

router.put("/update/img/:donation_uuid",check_session_jwt,upload_middleware.single("product_img"),put_donation);

router.delete("/:donation_uuid",check_session_jwt,delete_donation)


router.put("/update/status/:donation_uuid",check_session_jwt,put_status_donation);

router.get("/:donation_uuid",check_session_jwt,get_donation);