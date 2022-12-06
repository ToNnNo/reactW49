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
      </ul>
    </nav>
  );
}