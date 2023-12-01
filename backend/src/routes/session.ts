import { Router } from "express";
import {post_session,get_session, delete_session} from "../controllers/session_controller";
import { check_session_jwt } from "../middlewares/session";



export const router = Router();

router.post("/login",post_session);

router.get("/:session_token",get_session);

router.delete("/logout", check_session_jwt,delete_session);