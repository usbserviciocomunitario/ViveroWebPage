

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



  const error_codes: Record<string, string> = {
    "0001": "Error creating user",
    "0002": "Error reading user",
    "0003": "Error updating user",
    "0004": "Error deleteting user",
    "0005": "Error listing user",
    "1001": "Error creating session",
    // Agrega más códigos y mensajes según sea necesario
  };
  

const get_msg = (error_detail: string, error_message: string, error_code: string): Record<string, string> => {
    return {
      error: error_message,
      error_detail: error_detail,
      error_code: error_code,
    };
  }



  export {get_day,get_months, error_codes,get_msg}