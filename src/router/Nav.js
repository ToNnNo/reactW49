import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul className="nav">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/introduction">Introduction</Link>
        </li>
        <li>
          <Link to="/fragment">Fragment</Link>
        </li>
        <li>
          <Link to="/assets">Les Assets</Link>
        </li>
        <li>
          <Link to="/state">Etat Local</Link>
        </li>
        <li>
          <Link to="/hook">Les Hooks</Link>
        </li>
        <li>
          <Link to="/router">React Router DOM</Link>
        </li>
        <li>
          <Link to="/formulaire">Formulaire</Link>
        </li>
        <li>
          <Link to="/redux">Redux</Link>
        </li>
      </ul>
    </nav>
  );
}
