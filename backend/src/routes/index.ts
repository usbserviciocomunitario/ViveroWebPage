import { Router } from 'express';
import {readdirSync}  from 'fs';
const PATH_ROUTES = `${__dirname}`;


export const router = Router();

const cleanfileName = (fileName: string ) => {
    const file= fileName.split(".").shift();
    return file;
}

readdirSync(PATH_ROUTES).filter((fileName) =>{
    const file = cleanfileName(fileName);
    if(file !== 'index'){
        import(`./${file}`).then((moduleRouter)=>{
            router.use(`/${file}`, moduleRouter.router);
        })
    }

});