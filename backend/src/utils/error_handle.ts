import {Response } from "express";

const handle_http =(res:Response,error: string)=>{
    res.status(500);
    res.send({error});
}


export {handle_http}