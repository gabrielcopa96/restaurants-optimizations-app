import { createSlice } from "@reduxjs/toolkit";
import store from "../store";

type user={
    id?: string,
    username?: string,
    phone?: string,
    email?:string,
    password?: string
}
interface UserInfo {
    user:user
    token: string,
}

export const EmptyUserState:UserInfo ={
    user:{},
    token:""

}
export const persistLocalStorageUser= (userInfo:any)=>{
   localStorage.setItem('user',JSON.stringify({...userInfo}));
}

export const clearLocalStorage = ()=>{
    localStorage.removeItem('user');
}

export const userSlice = createSlice({
name:"user",
initialState: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string):EmptyUserState,
reducers:{
    createUser: (state, action)=>{
        persistLocalStorageUser(action.payload);
        const localStorageGet = JSON.parse(localStorage.getItem('user') as string)
        state.token = localStorageGet.token
        state.user = localStorageGet.user
    },
    updateUser: (state, action)=>{
        const result = {...state, ...action.payload}
        persistLocalStorageUser(result);
        return result;
    },
    resetUser: ()=>{
        clearLocalStorage();
        return EmptyUserState;
    }
}   
});

export const {createUser,updateUser,resetUser} = userSlice.actions;

export default userSlice.reducer