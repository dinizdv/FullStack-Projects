// import { useState } from "react";
// import { Navigate } from "react-router-dom";
// import { ReactNode } from "react";

// interface ChildrenProps {
//     children: ReactNode
// }

// const Private: React.FC<ChildrenProps> = ({ children }) => {
//     const [isUser] = useState(localStorage.getItem('@userData'))

//     if (!isUser){
//         return <Navigate to='/' />
//     }

//     return children
// }

// export default Private