import multer from "multer"
import { Request } from "express"
const storage = multer.diskStorage({
    destination:function(req:Request,file,cb){
        const path_storage = `${__dirname}/../storage`
        cb(null,path_storage)
    },
    filename:function(req:Request,file,cb){
      
        const ext = file.originalname.split(".").pop();
        var filename = file.originalname;
        if(!file.originalname.includes("file")){
           filename = `file-${Date.now()}.${ext}`
        }

        cb(null,filename)
       
    }
})


const upload_middleware = multer({storage})

export {upload_middleware};