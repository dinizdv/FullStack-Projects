import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Private from "./Private";
import Summary from "../pages/Summary";
import Budgets from "../pages/Budgets"
import Categories from "../pages/Categories";
import Settings from "../pages/Settings";
import Error from "../pages/Error";

const RoutesApp = () => {
    return(
        <Routes>
            <Route path='/' element={ <Login /> } />
            <Route path='/summary' element={ <Private><Summary /></Private> } />
            <Route path='/budgets' element={ <Private><Budgets /></Private> } />
            <Route path='/categories' element={ <Private><Categories /></Private> } />
            <Route path='/settings' element={ <Private><Settings /></Private> } />
            <Route path='*' element={ <Error /> } />
        </Routes>
    )
}

export default RoutesApp