import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import {PrivateRoutes, PublicRoutes} from './routes/routes'
import SignUp from "./components/autentication/SignUp";
import SignIn from "./components/autentication/SignIn";
import Authguards from './Guardian/Auth.guards';
import ConfirmPassword from './Page/Public/confirmPassword';
import RoutesWithbotFound from './utils/RoutesWithbotFound';
import Private from './Page/Private/Private';
import AlertAuth from './components/alerts/AlertAuth';
import ForgotMyPassword from './Page/Public/forgotMyPassword';
const App = () => {

  return (
    <div>
      <AlertAuth/>
      <HashRouter>
          <RoutesWithbotFound>
            <Route path='/' element={<Navigate to={PrivateRoutes.PRIVATE}/>}/>
            <Route path={PublicRoutes.LOGIN} element={<SignIn/>}/>
            <Route path={PublicRoutes.SIGNUP} element={<SignUp/>}/>
            <Route path={PublicRoutes.FORGOTPASSWORD} element={<ForgotMyPassword/>}/>
            <Route path={PublicRoutes.CONFIRMPASSWORD} element={<ConfirmPassword/>}/>
            <Route element={<Authguards/>}>
              <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private/>}/>
            </Route>
          </RoutesWithbotFound>
      </HashRouter>
    </div>
  )
}

export default App
