import { Routes, Route } from "react-router-dom";
import Home from '../page/Home';
import Introduction from '../page/Introduction';

export default function Main() {
  return (
    <Routes>
      <Route index element={ <Home /> } />
      <Route path="introduction" element={ <Introduction />} />
    </Routes>
  );
}
