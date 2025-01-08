import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Summary from "../pages/Summary";
import Budgets from "../pages/Budgets"
import Categories from "../pages/Categories";
import Settings from "../pages/Settings";
// import Private from "./Private";

const RoutesApp = () => {
    return(
        <Routes>
            <Route path='/' element={ <Login /> } />
            {/* <Route path='/summary' element={ <Private><Summary /></Private> } /> */}
            <Route path='/summary' element={ <Summary /> } />
            {/* <Route path='/budgets' element={ <Private><Budgets /></Private> } /> */}
            <Route path='/budgets' element={ <Budgets /> } />
            {/* <Route path='/categories' element={ <Private><Categories /></Private> } /> */}
            <Route path='/categories' element={ <Categories /> } />
            {/* <Route path='/settings' element={ <Private><Settings /></Private> } /> */}
            <Route path='/settings' element={ <Settings /> } />
        </Routes>
    )
}

export default RoutesApp