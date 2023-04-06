import { configureStore } from '@reduxjs/toolkit';
import userSlice from './states/user';
import alertAuthSlice from './states/alertAuth';
interface UserInfo {
    id: number,
    name: string,
    email:string
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