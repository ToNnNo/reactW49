import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function AdminRoutesGuard() {
  // locationStorage ou sessionStorage pour persister les données d'authentification (token)
  // const isAuthenticate = localStorage.getItem('authentication') !== null;
  const token = useSelector( (state) => state.user.token );

  return (token !== null) ? <Outlet /> : <Navigate to="/signin" />
}