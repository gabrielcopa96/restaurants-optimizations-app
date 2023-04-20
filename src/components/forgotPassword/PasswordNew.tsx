import logo from '../../assets/logo.svg';
import { Link } from "react-router-dom";
import {PublicRoutes} from "../../routes/routes";
export default function PasswordNew() {
  return (
    <div className="containerAccount">
    <div className="logo">
        <img src={logo}/>
    </div>
    <form  className="infoUser">    
        <h2>OLVIDO SU CONTRASEÑA ?</h2>
        <input id="password2"  type="password" name="password" placeholder=' Escribir la nueva contraseña'/>
        <input id="password2"  type="password" name="password2" placeholder=' Confirmar nueva contraseña'/>
        <div className='container_send'>
            <input  className='button' type="submit" value="EVIAR"/>
            <Link to={"/"+PublicRoutes.LOGIN}><a className='link'>Ya tienes una cuenta? <span> Iniciar Sesion</span></a></Link>
        </div>
    </form>
</div>
  )
}
