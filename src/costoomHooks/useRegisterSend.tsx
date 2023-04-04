import {useFormik,FormikProps} from 'formik'

const validate = (values:any)=>{
    const errors:any = {};
    if (!values.username && 'username' in values ) {
        errors.username = 'El nombre de usuario es requerido';
    } else if (values.username?.length < 8   && 'username' in values  ) {
      errors.username = 'El nombre de usuario debe contener al menos 8 caracteres';
    }
    if (!values.phone  && 'phone' in values ) {
      errors.phone= 'El número de telefono es requerido';
    } else if (values.phone?.length < 10 || values.phone?.length > 10  && 'phone' in values ) {
      errors.phone = 'EL número de telefono debe contener 10 caracteres';
    }
    if (!values.email  && 'email' in values ) {
      errors.email = 'El email es requerido';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email) &&  'email' in values ) {
      errors.email = 'El email ingresado no es valido';
    }
    if(!values.password  && 'password' in values ){
      errors.password = 'La contraseña es requerida'
    }else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])(?=.*[a-zA-Z]).{8,}$/.test(values.password)  && 'password' in values ){   
      errors.password = 'La contraseña tiene que tener al menos 8 caracteres, un caracter especial(!@#$%^&*()_+), un número y una letra mayuscula'
    }
    if(!values.password2  && 'password2' in values ){
      errors.password2 = 'La confirmacion de la contraseña es requerida'
    }else if(values.password !== values.password2  && 'password2' in values ){
      errors.password2 = 'La contraseña no coinciden'
    }
    return errors;
  }

  interface UseRegisterSend {
    submit: any;
    inputChange: any;
    touch: any;
    error: any;
    inputBlur:any;
    values: any;
  }
  interface BodyInitialValues {
    username?:string,
    phone?:string,
    email:string,
    password:string,
    password2?:string
  }

  export  function useRegisterSend(body:BodyInitialValues):UseRegisterSend {
    const formik = useFormik({
      initialValues: body,
      validate,
      onSubmit: (values:BodyInitialValues):void => {
        alert(JSON.stringify(values, null, 2));
      },
    });
    return {
        submit:formik.handleSubmit,
        inputChange:formik.handleChange,
        touch:formik.touched,
        error:formik.errors,
        inputBlur:formik.handleBlur,
        values:formik.values
    }
}