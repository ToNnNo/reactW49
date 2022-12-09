import Main from "./router/Main";
import Nav from "./router/Nav";
import { useDispatch, useSelector } from 'react-redux';
import { reload } from "./slice/userSlice";
import UserAuthenticate from "./component/UserAuthenticate";
import axios from "axios";
import { useEffect } from 'react';


function App() {
  const dispatch = useDispatch();
  dispatch( reload() );
  const token = useSelector( (state) => state.user.token );
  
  useEffect(() => {
    // ajoute automatiquement le token dans toutes les requêtes HTTP faite avec axios
    axios.interceptors.request.use((request) => {
      request.headers.authorization = `Bearer ${token}`;

      return request;
    })
  }, [token]);
    

  return (
    <>
      <header>
        <h1>Formation React</h1>
      </header>
      <UserAuthenticate />
      <Nav />
      <main>
        <Main />
      </main>
      <footer>
        <hr />
        <p className="text-center">
          <small>
            Formation React - Dawan FOAD - Décembre 2022<br />
            POE Marseille - Nice - Strasbourg - Bordeaux
          </small>
        </p>
      </footer>
    </>
  );
}

export default App;
