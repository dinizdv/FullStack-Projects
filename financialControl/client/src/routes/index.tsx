import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Summary from "../pages/Summary";
import Budgets from "../pages/Budgets"


const RoutesApp = () => {
    return(
        <Routes>
            <Route path='/' element={ <Login /> } />
            <Route path='/summary' element={ <Summary /> } />
            <Route path='/budgets' element={ <Budgets /> } />
        </Routes>
    )
}

export default RoutesApp