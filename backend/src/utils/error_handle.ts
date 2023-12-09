import {Response } from "express";
import { get_msg } from "./utils";

const handle_http = (res: Response, error_code: string, error_message: string): void =>{
    const error_code_message = error_codes[error_code] || 'Unknown error';
    
    res.status(500).send(get_msg(error_message,error_code_message,error_code));
  
}

const error_codes: Record<string, string> = {
    "0001": "Error creating user",
    "0002": "Error reading user",
    "0003": "Error updating user",
    "0004": "Error deleteting user",
    "0005": "Error listing user",
    "0006": "Error updating password user",
    "1001": "Error creating session",
    "1002": "Error reading session",
    "1003": "Error in logout",
    "1004": "Error validating session",
    "2001": "Error creating product",
    "2002": "Error listing products"
    // Agrega más códigos y mensajes según sea necesario
  };
export {handle_http}