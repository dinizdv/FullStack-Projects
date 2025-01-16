import React, { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type UserContextType = {
  userAuth: () => void;
  userData: { name?: string; email?: string, password?: string } | null;
  isUserLoggedIn: boolean,
  setIsUserLoggedIn: (value: boolean) => void
};

export const UserContext = createContext<UserContextType>({
    userAuth: () => {},
    userData: null,
    isUserLoggedIn: false,
    setIsUserLoggedIn: (value: boolean) => {}
});

interface UserProviderProps {
    children: React.ReactNode;
  }
  
const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(
    JSON.parse(localStorage.getItem('@isUserLoggedIn') || 'false')
  )
  const navigate = useNavigate();
  const location = useLocation()

  const userData = JSON.parse(localStorage.getItem('@userData') || '{}')

  // is user logged
  const userAuth = () => {
        if (!userData){
          localStorage.setItem('@isUserLoggedIn', "false")
          navigate('/', { replace: true }) // replace: for current history browser
          console.log('user not login')
        }
          if (userData && userData.name && location.pathname === '/'){
            localStorage.setItem('@isUserLoggedIn', "true")
            navigate('/summary')
        } 
        
  };

  useEffect(() => {
    localStorage.setItem("@isUserLoggedIn", JSON.stringify(isUserLoggedIn));
  }, [isUserLoggedIn]);

  // balance, incomes, expensives

  return (
    <UserContext.Provider value={{ userAuth, userData, isUserLoggedIn, setIsUserLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;