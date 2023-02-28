//
//
// import {useLocation, Navigate} from 'react-router-dom'
//
// const RequireAuth = ({children}) => {
//     const location = useLocation();
//
//     const user  = localStorage.getItem('user');
//     if (!user) {
//         return <Navigate to='/login' state={{from: location}}/>
//     }
//
//     return children;
// }
//
// export {RequireAuth}
//








// import React from "react";
// import { useAuth } from "./useAuth";
// import { Navigate } from "react-router-dom";
//
// export const RequireAuth = ({ children }) => {
//   const auth = useAuth();
//
//   return auth.username ? (
//     children
//   ) : (
//     <Navigate to="/"/>
//   );
// };
//
// export default RequireAuth;