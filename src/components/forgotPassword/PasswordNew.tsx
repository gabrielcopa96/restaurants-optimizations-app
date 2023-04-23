import logo from '../../assets/logo.svg';
import { Link } from "react-router-dom";
import { PublicRoutes } from "../../routes/routes";
import { useParams, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { setearAlertRender} from "../../redux/states/alertAuth";;
import { useDispatch } from "react-redux";
import { Post } from "../../utils/Post";
import { RESET_PASSWORD } from "../../HTTPS/HTTPS";


const validate = (values:{password:string,password2:string}) => {
  const errors:{password?:string,password2?:string}= {};
  if(!values.password){
    errors.password = 'La contraseña es requerida'
  }else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])(?=.*[a-zA-Z]).{8,}$/.test(values.password)){   
    errors.password = 'La contraseña tiene que tener al menos 8 caracteres, un caracter especial(!@#$%^&*()_+), un número y una letra mayuscula'
  }
  if(!values.password2){
    errors.password2 = 'La confirmacion de la contraseña es requerida'
  }else if(values.password !== values.password2 ){
    errors.password2 = 'La contraseña no coinciden'
  }
  return errors;
};

export default function PasswordNew() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { token } = useParams();
  const TokenSeparate =  token?.split("=")[1]
  const formik = useFormik({
    initialValues: {
      password: '',
      password2: ''
    },
    validate,
    onSubmit: async( values ) => {
      console.log("este es el tokean", TokenSeparate)
      const response = await Post({newPassword:values.password},`${RESET_PASSWORD}/${TokenSeparate}`);

      dispatch(setearAlertRender(response))
      if(Array.isArray(response) && response[0] !== "error"){
        navigate("/"+PublicRoutes.LOGIN)
      }
      formik.values.password = ""
      formik.values.password2 = ""
    },
  });
  return (
    <div className="containerAccount">
    <div className="logo">
        <img src={logo}/>
    </div>
    <form  className="infoUser" onSubmit={formik.handleSubmit}>    
        <h2>OLVIDO SU CONTRASEÑA ?</h2>
        <input id="password1"  type="password" name="password" onChange={formik.handleChange} value={formik.values.password}  placeholder=' Escribir la nueva contraseña'/>
        {formik.errors.password ? <p className='error'>{formik.errors.password}</p> : null}
        <input id="password2"  type="password" name="password2" onChange={formik.handleChange} value={formik.values.password2}  placeholder=' Confirmar nueva contraseña'/>
        {formik.errors.password2 ? <p className='error'>{formik.errors.password2}</p> : null}
        <div className='container_send'>
            <input  className='button' type="submit" value="EVIAR"/>
            <Link to={"/"+PublicRoutes.LOGIN}><a className='link'>Ya tienes una cuenta? <span> Iniciar Sesion</span></a></Link>
        </div>
    </form>
</div>
  )
}
