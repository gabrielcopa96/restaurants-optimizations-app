import {Navigate, Route} from "react-router-dom";
import {PrivateRoutes} from "../../routes/routes"
import RoutesWithbotFound from "../../utils/RoutesWithbotFound";
import Home from "../../components/Home";
import Admin from "../../components/Admin";
export default function Private() {
  return (
    <RoutesWithbotFound>
        <Route path="/" element={<Navigate to={PrivateRoutes.HOME}/>}/>
        <Route path={PrivateRoutes.HOME} element={<Home/>}/>
        <Route path={PrivateRoutes.ADMIN} element={<Admin/>}/>
    </RoutesWithbotFound>
  )
}