import { Routes, Route } from "react-router-dom";
import Summary from "../pages/Summary";
import Login from "../pages/Login";


const RoutesApp = () => {
    return(
        <Routes>
            <Route path='/' element={ <Login /> } />
            <Route path='/summary' element={ <Summary /> } />
        </Routes>
    )
}

export default RoutesApp