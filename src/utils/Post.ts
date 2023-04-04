import axios from 'axios';
import { body } from '../types/type'
export const Post = async(body:body, https:string):Promise< [string, string[]] | undefined>=>{
    try {
        const response = await axios.post(https,body);
        console.log(response);
        return response.data;
    } catch (error:any) {
        return error.message;
    }
}