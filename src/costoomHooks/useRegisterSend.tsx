import {useState} from 'react';
import {Post} from '../utils/Post';
import {USER_SIGNUP} from '../HTTPS/HTTPS';

interface UserRegisteSend{
    handleInputRegister(e:React.ChangeEvent<HTMLInputElement>):void,
    sendInfoState(e:React.FormEvent<HTMLFormElement>,verify:boolean,msg:[string, string[]]|undefined):Promise<void>,
    
}

export const useRegisterSend=(body:any):UserRegisteSend=>{
    const [bodyStructure, setBodyStructure] = useState(body);
    const [msgResponse, setMsgResposne] = useState< [string, string[]] >();
    const handleInputRegister = (eventChange:React.ChangeEvent<HTMLInputElement>):void=>{
        setBodyStructure({
            ...bodyStructure,
            [eventChange.target.name] : eventChange.target.value
        });
    }
    const sendInfoState = async(eventOnsubmit:React.FormEvent<HTMLFormElement>,verify:boolean,msg: [string, string[]] | undefined):Promise<void>=>{
        eventOnsubmit.preventDefault();
        try {
            if(verify){
                const response = await Post(bodyStructure,USER_SIGNUP);
                setMsgResposne(response);
            }else{
                alert(msg !== undefined && msg[1]);
            }
        } catch (error:any) {
            console.log("error",error.message)            
        }
    }
    return {
        handleInputRegister,
        sendInfoState,
    }
}