import logo from '../../assets/logo.svg';
import { Link } from "react-router-dom";
import {useRegisterSend} from '../../costoomHooks/useRegisterSend';
import {comparatePaassword} from '../../utils/comparatePassword';
import {PublicRoutes} from "../../routes/routes";
export default function SignUp() {
const {handleInputRegister,sendInfoState} = useRegisterSend(
  {
  username:'',
  phone:'',
  email:'',
  password:'',
  password2:''
});


  return (
    <div className="containerAccount">
        <div className="logo">
            <img src={logo}/>
        </div>
        <form onSubmit={(e)=>sendInfoState(e,comparatePaassword(),["error",["la contraseña no coinciden"]])} className="infoUser">
            <h2>CREAR CUENTA</h2>
            <input onChange={handleInputRegister} type="text" name="username" placeholder=' Escriba un nombre de usuario' />
            <input onChange={handleInputRegister} type="tel" name="phone" placeholder=' Coloque su numero de telefono' />
            <input onChange={handleInputRegister} type="email" name="email" placeholder=' Escriba su email' />
            <input id="password" onChange={handleInputRegister} type="password" name="password" placeholder=' Escriba una Contraseña' />
            <input id="password2" onChange={handleInputRegister} type="password" name="password2" placeholder=' Confirmar Contraseña' />
            <input  className='button' type="submit" value="CREAR CUENTA"/>
            <Link to={"/"+PublicRoutes.LOGIN}><a className='link'>Ya tienes una cuenta? Iniciar Sesion</a></Link>
        </form>
    </div>
  )
}
/* LogoSample_ByTailorBrands 1 */
