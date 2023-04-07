import axios from 'axios';
import { body } from '../types/type'

interface BodyApi{
    alert:[string, string[]],
    user?:any,
    token:string
}
export const Post = async(body:body, https:string):Promise< [string, string[]] | undefined | BodyApi>=>{
    try {
        const response = await axios.post(https,body);
        console.log(response);
        return response.data;
    } catch (error:any) {
        return error.response.data;
    }
}