import { Router } from "express";
import {post_session,get_session} from "../controllers/session_controller";



export const router = Router();

router.post("/login",post_session);

router.get("/:session_token",get_session)