import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slice/userSlice";
import { useNavigate } from 'react-router-dom';

export default function UserAuthenticate() {
  const user = useSelector( (state) => state.user.user );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function signOut() {
    dispatch( logout() );
    navigate('/');
  }

  if(!user) {
    return null;
  }

  return (
    <p>
      Bonjour {user.firstName} {user.lastName} &nbsp;
      <button onClick={ signOut }>Déconnexion</button>
    </p>
  );
}