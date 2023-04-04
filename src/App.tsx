import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import {PrivateRoutes, PublicRoutes} from './routes/routes'
import SignUp from "./components/autentication/SignUp";
import SignIn from "./components/autentication/SignIn";
import Authguards from './Guardian/Auth.guards';
import RoutesWithbotFound from './utils/RoutesWithbotFound';
import Private from './Page/Private/Private';

const App = () => {

  return (
    <div >
      <HashRouter>
          <RoutesWithbotFound>
            <Route path='/' element={<Navigate to={PrivateRoutes.PRIVATE}/>}/>
            <Route path={PublicRoutes.LOGIN} element={<SignIn/>}/>
            <Route path={PublicRoutes.SIGNUP} element={<SignUp/>}/>
            <Route element={<Authguards/>}>
              <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private/>}/>
            </Route>
          </RoutesWithbotFound>
      </HashRouter>
    </div>
  )
}

export default App
