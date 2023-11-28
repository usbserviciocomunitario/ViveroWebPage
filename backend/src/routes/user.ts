import { Router } from "express";
import {post_user, get_user , put_user, delete_user, get_users} from "../controllers/user_controller";



export const router = Router();

router.post("/register",post_user);

router.get("/", get_users);

router.get("/:user_uuid", get_user);


router.put("/:user_uuid", put_user);


router.delete("/:user_uuid", delete_user)

