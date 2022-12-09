import Main from "./router/Main";
import Nav from "./router/Nav";
import { useDispatch } from 'react-redux';
import { reload } from "./slice/userSlice";
import UserAuthenticate from "./component/UserAuthenticate";

function App() {
  const dispatch = useDispatch();
  dispatch( reload() );

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
