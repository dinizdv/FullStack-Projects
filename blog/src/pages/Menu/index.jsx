import Sidebar from "../../components/Sidebar"
import Header from '../../components/Header'
import MainContent from "../../components/MainContent"
import SideContent from "../../components/SideContent"

const Menu = () => {
    return(
        <>
            <Sidebar />
            <Header />
            <div className="gap-6 ml-24 p-6 flex justify-between relative">
                <MainContent />
                <SideContent />
            </div>
        </>
    )
}

export default Menu