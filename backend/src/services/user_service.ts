import user_interface from "../interfaces/user_interface";
import user_model from "../models/user_model";

const create_user = async(user_detail:user_interface) =>{
    const response = await user_model.create(user_detail);
    return response;
}

export {create_user};