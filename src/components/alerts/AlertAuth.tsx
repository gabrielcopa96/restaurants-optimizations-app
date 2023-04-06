import {useEffect} from 'react'
import logo from '../../assets/logo.svg';
import { BsFillCheckSquareFill } from 'react-icons/bs';
import { MdError } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { AppStore } from '../../redux/store';
import { setearAlertRemover } from '../../redux/states/alertAuth';
export default function AlertAuth() {
    const alertAuth = useSelector((state:AppStore)=>state.alertAuth);
    const dispatch = useDispatch();
    useEffect(()=>{
        if(alertAuth.render){
            setTimeout(()=>{
                dispatch(setearAlertRemover());
            },4000)  
        }
    },[alertAuth.render])
  return  alertAuth.render ? (

    <div className='containerFather'>
        <div className="containerCard">
            <div className='containerLogo'>
                <img src={logo}/>
            </div>
            <div className='containerIcons'>
                {alertAuth.alert[0] !== "error" ? 
                <BsFillCheckSquareFill color='green' size="3.5rem"/> :
                <MdError color='red' size="3.5rem"/> 
            }
            </div>
            <div className='containerDescription'>
                {
                    <p>{alertAuth.alert[1]}</p>
                }
            </div>
        </div>
    </div>
    )
    :
    null
}