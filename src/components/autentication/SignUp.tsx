import logo from '../../assets/logo.svg';
import { Link } from "react-router-dom";
import {useRegisterSend} from '../../costoomHooks/useRegisterSend';
import {PublicRoutes} from "../../routes/routes";


export default function SignUp():JSX.Element {
// este hoock te permite registrar los valores de los inputs enviar los datos y detectar errores para esto hay que pasarle un objecto con los campos que deseas guardar sus valores
//inputBlur lo que hace es detectar si perdiste el enfoque del input para usar esto crearemos una propiedad onBlur en input y colocaremos la funcion inputBlur
//touch lo que hace es dectectar si hiciste click en el formulario por ende va a detectar que estas en el input
//error es un objecto que va a contener errores en caso de que alla
//inputChange va a ser un evento que va a capturar los valores que coloquemos o escribamos en el input
//values va a ser el valor que tengamos en el input
//submit es una funcion que se va a ejecutar cuando cumplamos con todos los requisitos sin tener errores en nuestro formulario
const {error,inputBlur,inputChange,touch,values,submit} = useRegisterSend({
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
        <form onSubmit={submit} className="infoUser">    
            <h2>CREAR CUENTA</h2>
            <input onChange={inputChange} type="text" name="username" placeholder=' Escriba un nombre de usuario' value={values.username} onBlur={inputBlur} />
            {touch.username && error.username ? (
                  <p className='error'>{error.username}</p>
            ) : null}
            <input onChange={inputChange} type="tel" name="phone" placeholder=' Coloque su numero de telefono' value={values.phone} onBlur={inputBlur}/>
            {touch.phone && error.phone ? (
                  <p className='error'>{error.phone}</p>
            ) : null}
            <input onChange={inputChange} type="email" name="email" placeholder=' Escriba su email'  value={values.email} onBlur={inputBlur}/>
            {touch.email && error.email ? (
                  <p className='error'>{error.email}</p>
            ) : null}
            <input id="password" onChange={inputChange} type="password" name="password" placeholder=' Escriba una Contraseña'  value={values.password} onBlur={inputBlur}/>
            {touch.password && error.password ? (
                  <p className='error'>{error.password}</p>
            ) : null}
            <input id="password2" onChange={inputChange} type="password" name="password2" placeholder=' Confirmar Contraseña' value={values.password2} onBlur={inputBlur}/>
            {touch.password2 && error.password2 ? (
                  <p className='error'>{error.password2}</p>
            ) : null}
            <input  className='button' type="submit" value="CREAR CUENTA"/>
            <Link to={"/"+PublicRoutes.LOGIN}><a className='link'>Ya tienes una cuenta? Iniciar Sesion</a></Link>
        </form>
    </div>
  )
}
