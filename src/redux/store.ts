import { configureStore } from '@reduxjs/toolkit';
import userSlice from './states/user';
import alertAuthSlice from './states/alertAuth';
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
interface AlertAuth {
    render: boolean,
    alert :[string,[string]]  
}
export interface AppStore{
    user: UserInfo;
    alertAuth: AlertAuth
}

export default configureStore<AppStore>({
    reducer:{
        user:userSlice,
        alertAuth:alertAuthSlice
    }
})