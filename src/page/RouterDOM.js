import { Link, Navigate, Route, Routes } from "react-router-dom";
import Params from "./RouterDOM/Params";
import Redirection from "./RouterDOM/Redirection";

export default function RouterDOM() {

  return (
    <>
      <h2>React Router DOM</h2>

      <Link to="">Welcome</Link> -&nbsp;
      <Link to="react">React 18</Link> -&nbsp;
      <Link to="old-react">React 15</Link> -&nbsp;
      <Link to="redirect">Redirection</Link> -&nbsp;
      <Link to="john">John</Link> -&nbsp;
      <Link to="jane">Jane</Link> -&nbsp;

      <Routes>
        <Route index element={ <h3>Bienvenue sur notre sous navigation</h3> } />
        <Route path='react' element={ <h3>Formation React + Redux</h3> } />
        <Route path='old-react' element={ <Navigate to="/router/react" /> } />
        <Route path='redirect' element={ <Redirection /> } />
        <Route path=':name' element={ <Params />} />
      </Routes>
    </>
  )
}
