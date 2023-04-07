import { Route, Routes} from 'react-router-dom';
import NotFound from '../Page/NotFouund/NotFound';
interface Props{
    children: JSX.Element[] | JSX.Element;
}

export default function RoutesWithbotFound({children}:Props) {
  return (
    <Routes>
        {children}
        <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
}