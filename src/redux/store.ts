import { configureStore } from '@reduxjs/toolkit';
import userSlice from './states/user';
interface UserInfo {
    id: number,
    name: string,
    email:string
}
export interface AppStore{
    user: UserInfo

}

export default configureStore<AppStore>({
    reducer:{
        user:userSlice
    }
})