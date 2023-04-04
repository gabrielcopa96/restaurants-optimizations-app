import { Route, Routes} from 'react-router-dom';

interface Props{
    children: JSX.Element[] | JSX.Element;
}

export default function RoutesWithbotFound({children}:Props) {
  return (
    <Routes>
        {children}
        <Route path="*" element={<div><h1>Not Found</h1></div>}/>
    </Routes>
  )
}