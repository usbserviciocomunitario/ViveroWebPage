import { Request } from "express";
interface custom_request extends Request {
    session_token?: string;
  }

export default custom_request