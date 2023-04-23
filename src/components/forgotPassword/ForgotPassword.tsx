import { useState } from 'react'
import logo from '../../assets/logo.svg';
import { Link } from "react-router-dom";
import { PublicRoutes } from "../../routes/routes";
import { useFormik } from "formik";
import { Post } from "../../utils/Post"
import { RESET_PASSWORD } from "../../HTTPS/HTTPS"
import { useDispatch } from "react-redux"
import { setearAlertRender} from "../../redux/states/alertAuth";
import Loading from '../Loading/Loading';

const validate = (values:{email:string}) => {
  const errors:{email?:string}= {};
  if (!values.email) {
    errors.email = 'El email es requerido';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'El email ingresado no es valido';
  }
  return errors;
};

export default function ForgotPassword() {
  const dispatch = useDispatch()
  const [renderLoading,setRenderLoading] = useState(false)
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validate,
    onSubmit: async( values) => {
      setRenderLoading(true)
      const response = await Post(values, RESET_PASSWORD);
      setRenderLoading(false)
      dispatch(setearAlertRender(response))
      formik.values.email = ""
    },
  });
  return (
    <div className="containerAccount">
    <div className="logo">
        <img src={logo}/>
    </div>
    <form className="infoUser" onSubmit={formik.handleSubmit}>    
        <h2>OLVIDO SU CONTRASEÑA ?</h2>
        <input id="email"  type="email" name="email" onChange={formik.handleChange} value={formik.values.email} placeholder=' Escriba su email'/>
        {formik.errors.email ? <p className='error'>{formik.errors.email}</p> : null}
        <div className='container_send'>
            <button  className='button' type="submit">{!renderLoading?<span style={{color:"white", padding:"1rem"}}>Enviar</span>:<Loading/>}</button>
            <Link to={"/"+PublicRoutes.LOGIN}><a className='link'>Ya tienes una cuenta? <span> Iniciar Sesion </span></a></Link>
        </div>
    </form>
</div>
  )
}