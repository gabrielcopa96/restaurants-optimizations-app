import logo from '../../assets/logo.svg';
export default function SignUp() {
  return (
    <div className="containerAccount">
        <div className="logo">
            <img src={logo}/>
        </div>
        <div className="infoUser">
            <h2>CREAR CUENTA</h2>
            <input type="text" placeholder=' Escriba un nombre de usuario' />
            <input type="tel" placeholder=' Coloque su numero de telefono' />
            <input type="email" placeholder=' Escriba su email' />
            <input type="password" placeholder=' Escriba una Contraseña' />
            <input type="password" placeholder=' Confirmar Contraseña' />
            <input className='button' type="submit" value="CREAR CUENTA"/>
            <a className='link'>Ya tienes una cuenta? Iniciar Sesion</a>
        </div>
    </div>
  )
}
/* LogoSample_ByTailorBrands 1 */
