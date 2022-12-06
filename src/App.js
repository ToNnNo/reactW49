import Main from "./router/Main";
import Nav from "./router/Nav";

function App() {
  return (
    <div>
      <header>
        <h1>Formation React</h1>
      </header>
      <Nav />
      <main>
        <Main />
      </main>
      <footer>
        <hr />
        <p>
          <small>
            Formation React - Dawan FOAD - Décembre 2022<br />
            POE Marseille - Nice - Strasbourg - Bordeaux
          </small>
        </p>
      </footer>
    </div>
  );
}

export default App;
