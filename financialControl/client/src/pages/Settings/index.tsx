import Sidebar from "../../Components/Sidebar";
import { IoSettingsOutline } from "react-icons/io5";
import '../../styles/settings.css'
import { UserContext } from "../../contexts/userActivity";
import { useContext, useEffect, useState } from "react";

const Settings = () => {
    const { userData } = useContext(UserContext)
    const [theme, setTheme] = useState(localStorage.getItem('@theme') || '')

    useEffect(() => {
        const interval = setInterval(() => {
            const currentTheme = localStorage.getItem('@theme') || ''
            if (theme !== currentTheme){
                setTheme(currentTheme)
            }
        })
        return () => clearInterval(interval)
    }, [theme])

    return(
        <>
            <Sidebar /> 
            <div className="container-settings">
            <div className="container-title">
                <h1><IoSettingsOutline className='icon-title' />settings</h1>
            </div>

            {/* <label htmlFor="">define PIN: </label><input type="text" placeholder="1234" /> */}

            <div className="container-style-settings">
            <label htmlFor="">name: </label><input type="text" placeholder={userData?.name} />
            <label htmlFor="">email: </label><input type="text" placeholder={userData?.email} />
            <label htmlFor="">change password: </label><input type="text" placeholder={userData?.password} />
            <label htmlFor="">current mode: </label><input type="text" placeholder={theme} readOnly />

            </div>
                {/* personal: email, changePassword (show current password), define PIN (or edit PIN: ***), darkMode */}
            </div>
        </>
    )
}

export default Settings