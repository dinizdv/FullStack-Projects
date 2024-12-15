import Sidebar from "../../Components/Sidebar";
import { IoSettingsOutline } from "react-icons/io5";
import '../../styles/settings.css'

const Settings = () => {
    return(
        <>
            <Sidebar /> 
            <div className="container-settings">
            <div className="container-title">
                <h1><IoSettingsOutline className='icon-title' />settings</h1>
            </div>

            <div className="container-style-settings">
            <label htmlFor="">email: </label><input type="text" placeholder="youremail@gmail.com" />
            <label htmlFor="">change password: </label><input type="text" placeholder="********" />
            <label htmlFor="">define PIN: </label><input type="text" placeholder="1234" />
            <label htmlFor="">current mode: </label><input type="text" placeholder="Dark mode" />

            </div>
                {/* personal: email, changePassword (show current password), define PIN (or edit PIN: ***), darkMode */}
            </div>
        </>
    )
}

export default Settings