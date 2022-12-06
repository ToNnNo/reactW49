import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/introduction">Introduction</Link>
                </li>
            </ul>
        </nav>
    );
}
