import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

interface ChildrenProps {
    children: ReactNode
}

const Private: React.FC<ChildrenProps> = ({ children }) => {
    const isUserLoggedIn = localStorage.getItem('@isUserLoggedIn')

    if (isUserLoggedIn === 'false'){
        return <Navigate to='/' />
    }

    return children
}

export default Private