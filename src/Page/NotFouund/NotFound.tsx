import logo from '../../assets/logo.svg';
import luna from '../../assets/luna.png';
export default function NotFound() {
  return (
    <div className="ContainerPage">
        <div className="ContainerLogo">
            <img src={logo} loading='lazy' />
        </div>
        <div className="ContainerImg">
            <h3>404 <span>PAGINA NO ENCONTRADA</span></h3> 
            <div className="luna"></div>
        </div>
    </div>
  )
}