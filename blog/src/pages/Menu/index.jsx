import Sidebar from "../../components/Sidebar"
import Header from '../../components/Header'
import MainContent from "../../components/MainContent"
import SideContent from "../../components/SideContent"

const Menu = () => {
    return(
        <>
            <Sidebar />
            <Header />
            <div className="border-blue-900 gap-6 border-4 ml-24 p-6 flex justify-between">
                <MainContent />
                <SideContent />
            </div>
        </>
    )
}

export default Menu