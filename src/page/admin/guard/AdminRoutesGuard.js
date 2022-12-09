import { Navigate, Outlet } from "react-router-dom";

export default function AdminRoutesGuard() {
  // locationStorage ou sessionStorage pour persister les données d'authentification (token)
  const isAuthenticate = localStorage.getItem('authentication') !== null;

  return isAuthenticate ? <Outlet /> : <Navigate to="/" />
}