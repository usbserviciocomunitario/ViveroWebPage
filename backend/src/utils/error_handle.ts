import {Response } from "express";
import { error_codes, get_msg } from "./utils";

const handle_http = (res: Response, error_code: string, error_message: string): void =>{
    const error_code_message = error_codes[error_code] || 'Unknown error';
    
    res.status(500).send(get_msg(error_message,error_code_message,error_code));
  
}

export {handle_http}