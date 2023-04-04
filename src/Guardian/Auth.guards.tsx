import { AppStore  } from "../redux/store";
import {useSelector} from "react-redux";
import {Navigate, Outlet} from "react-router-dom";
import {PublicRoutes} from "../routes/routes";
export default function Authguards() {
    const userState = useSelector ((store:AppStore)=> store.user)

    return userState.name ? <Outlet/>:<Navigate replace to={PublicRoutes.LOGIN}/>
}