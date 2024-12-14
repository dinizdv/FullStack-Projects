import Sidebar from "../../Components/Sidebar"
import { GoGoal } from "react-icons/go";
import { FaPlus } from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";
import '../../styles/budgets.css'

const Budget = () => {
    return(
        <>
        <Sidebar />
        <div className="container-budgets">
            <div className="container-title">
                <h1><GoGoal className='icon-title' />Budgets</h1>
            </div>

            <div className="container-style-budgets">
                <div className="budget">
                <h2>Incomes</h2>
                <p>There is not a budget created.</p>
                <button>Create a new budget<FaPlus className='icon-budget' /></button>
                </div>

                <div className="budget">
                <h2>Expensives</h2>
                <p>There is not a budget created.</p>
                <button>Create a new budget<FaPlus className='icon-budget' /></button>
                </div>
            </div>

            {/* <div className="create-budget">
                <p>There is not budget created.</p>
                <FiPlusCircle />
            </div> */}

        </div>
        </>
    )
}

export default Budget