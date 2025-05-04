import { Routes, Route } from "react-router-dom";
import Menu from '../pages/Menu'

const RoutesApp = () => {
    return(
        <Routes>
            <Route path='/' element={ <Menu/> } />
        </Routes>
    )
}

export default RoutesApp