

function get_day(): string {
    const now = new Date();
  
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
  
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
  
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  const get_months = (monthOffsetStr: string): string => {
    const monthOffset = parseInt(monthOffsetStr, 10) || 0; 

    const now = new Date();
    now.setMonth(now.getMonth() + monthOffset);

    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');

    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

const get_minutes = (minutesStr: string): string => {
  const minutes = parseInt(minutesStr, 10) || 0;

  const now = new Date();
  now.setMinutes(now.getMinutes() + minutes);

  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');

  const hours = now.getHours().toString().padStart(2, '0');
  const minutesResult = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutesResult}:${seconds}`;
}




  

const get_msg = (error_detail: string, error_message: string, error_code: string): Record<string, string> => {
    return {
      error: error_message,
      error_detail: error_detail,
      error_code: error_code,
    };
  }



  import * as fs from 'fs';
import * as path from 'path';

function delete_file(file_path: string, file_name: string): void {
  try{
    const rutaCompleta = path.join(file_path, file_name);

    // Utiliza fs.unlink para borrar el archivo
    fs.unlink(rutaCompleta, (error: NodeJS.ErrnoException | null) => {
      if (error) {
        throw new Error(`Error deleting the file: ${file_path}: ${error.message}`);
      }
    });

  }catch(error : any){
    throw error
  }
 
}

  export {get_day,get_months,get_msg,get_minutes,delete_file}