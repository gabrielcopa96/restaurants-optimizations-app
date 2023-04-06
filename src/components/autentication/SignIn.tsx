import logo from '../../assets/logo.svg';
import { Link } from "react-router-dom";
import { PublicRoutes } from "../../routes/routes";
import { useRegisterSend } from "../../costoomHooks/useRegisterSend";
import { USER_SIGNIN } from "../../HTTPS/HTTPS";

export default function SignIn() {
  const {values,submit,inputBlur,inputChange,error,touch} = useRegisterSend({
    email:'',
    password:''
  },
  USER_SIGNIN
  ) 
  return (
    <form onSubmit={submit} className="containerAccount">
        <div className="logo">
            <img src={logo}/>
        </div>
        <div className="infoUser">
            <h2>INICIO DE SESION</h2>
            <input name='email' type="email" placeholder=' Escriba su Email' value={values.email} onChange={inputChange} onBlur={inputBlur} />
            {touch.email && error.email ? <p className='error'>{error.email}</p>:null}
            <input name='password' type="password" placeholder=' Escriba una Contraseña' value={values.password} onChange={inputChange} onBlur={inputBlur} /> 
            {touch.password && error.password ? <p className='error'>{error.password}</p>:null}
            <input className='button' type="submit" value="CREAR CUENTA"/>
            <a className='link password'>Olvide mi contraseña</a>
            <p className='informaty'>Aun no tienes una cuenta? <Link to={"/"+PublicRoutes.SIGNUP}><span className='resalt'>Crear Cuenta</span></Link></p>
        </div>
    </form>
  )
}
/* LogoSample_ByTailorBrands 1 */
