import logo from '../../assets/logo.svg';
import { Link } from "react-router-dom";
import { PublicRoutes } from "../../routes/routes";
export default function SignIn() {
  return (
    <div className="containerAccount">
        <div className="logo">
            <img src={logo}/>
        </div>
        <div className="infoUser">
            <h2>INICIO DE SESION</h2>
            <input type="text" placeholder=' Escriba un nombre de usuario' />
            <input type="password" placeholder=' Escriba una Contraseña' /> 
            <input className='button' type="submit" value="CREAR CUENTA" />
            <a className='link password'>Olvide mi contraseña</a>
            <p className='informaty'>Aun no tienes una cuenta? <Link to={"/"+PublicRoutes.SIGNUP}><span className='resalt'>Crear Cuenta</span></Link></p>
        </div>
    </div>
  )
}
/* LogoSample_ByTailorBrands 1 */