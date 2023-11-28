import { hash, compare } from "bcryptjs"

const encrypt = async (password_plain_text:string)=>{
    const password_hash = await hash(password_plain_text,8);
    return password_hash;

}

const verify = async (password_plain_text:string,passwprd_hashed : string) =>{
    const is_correct = await compare(password_plain_text,passwprd_hashed);
    return is_correct;
}

export {encrypt,verify}