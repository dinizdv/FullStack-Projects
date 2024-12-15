import Sidebar from "../../Components/Sidebar"
import { CgOptions } from "react-icons/cg";
import { FaPlus } from "react-icons/fa";

const Categories = () => {
    return(
        <>
        <Sidebar />
        <div className="container-budgets">
            <div className="container-title">
                <h1><CgOptions className='icon-title' />categories</h1>
            </div>

            <div className="container-style-budgets">
                <div className="budget">
                <h2>incomes categories</h2>
                <p>There is not a categorie created.</p>
                <button>Create a new categorie<FaPlus className='icon-budget' /></button>
                </div>

                <div className="budget">
                <h2>expensives categories</h2>
                <p>There is not a categorie created.</p>
                <button>Create a new categorie<FaPlus className='icon-budget' /></button>
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

export default Categories