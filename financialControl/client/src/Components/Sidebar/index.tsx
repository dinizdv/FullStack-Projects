import '../../styles/sidebar.css'
import { Link } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { GoGoal } from "react-icons/go";
import { TbReportSearch } from "react-icons/tb";
import { VscGraphLine } from "react-icons/vsc";
import { CgOptions } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { FiSun } from "react-icons/fi";


const Sidebar = () => {
    return(
        <div className='sidebar'>
            
            <div className="logo-sidebar">
                    <label>Financial Control</label>
            </div>
            <nav className='nav-sidebar'>
                <ul className="ul-sidebar">
                    <Link to='/summary'>
                        <li className="li-sidebar"><IoHomeOutline className='icon-sidebar' />summary</li>
                    </Link>
                    <Link to='/budgets'>
                        <li className="li-sidebar"><GoGoal className='icon-sidebar'/>budgets</li>
                    </Link>
                    <Link to='/reports'>
                        <li className="li-sidebar"><TbReportSearch className='icon-sidebar'/>report</li>
                    </Link>
                    <Link to='/graphs'>
                        <li className="li-sidebar"><VscGraphLine className='icon-sidebar'/>graphs</li>
                    </Link>
                    <Link to='/categories'>
                        <li className="li-sidebar"><CgOptions className='icon-sidebar'/>categories</li>
                    </Link>
                    <Link to='/settings'>
                        <li className="li-sidebar"><IoSettingsOutline className='icon-sidebar'/>settings</li>
                    </Link>
                    <li className="li-sidebar"><IoMoonOutline className='icon-sidebar'/>dark mode</li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar