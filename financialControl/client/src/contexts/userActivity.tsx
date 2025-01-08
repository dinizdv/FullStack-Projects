import React, { createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

type UserContextType = {
  userAuth: () => void;
  userData: { name?: string; [key: string]: any } | null;
};

export const UserContext = createContext<UserContextType>({
    userAuth: () => {},
    userData: null
});

interface UserProviderProps {
    children: React.ReactNode;
  }
  
const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const navigate = useNavigate();

  const userData = JSON.parse(localStorage.getItem('@userData') || '{}')

  // is user logged
  const userAuth = () => {
        if (userData && userData.name){
            navigate('/summary')
            toast.info(`Welcome back, ${userData.name}`)
        }
  };

  useEffect(() => {
    userAuth();
  }, [navigate]);

  return (
    <UserContext.Provider value={{ userAuth, userData }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;