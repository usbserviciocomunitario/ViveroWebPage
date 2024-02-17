import { Router } from "express";
import {post_user, get_user , put_user, delete_user, get_users, put_user_password} from "../controllers/user_controller";
import { check_session_jwt } from "../middlewares/session";


export const router = Router();

router.post("/register",post_user);

router.get("/", check_session_jwt,get_users);

router.get("/:user_uuid", check_session_jwt,get_user);


router.put("/update/:user_uuid", check_session_jwt,put_user);

router.put("/update_password",put_user_password);

router.delete("/:user_uuid", delete_user)

