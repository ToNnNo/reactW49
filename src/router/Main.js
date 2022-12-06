import { Routes, Route } from "react-router-dom";
import Home from '../page/Home';
import Introduction from '../page/Introduction';
import Fragment from '../page/Fragment';
import Asset from "../page/Asset";

export default function Main() {
  return (
    <Routes>
      <Route index element={ <Home /> } />
      <Route path="introduction" element={ <Introduction /> } />
      <Route path="fragment" element={ <Fragment /> } />
      <Route path="assets" element={ <Asset /> } />
    </Routes>
  );
}
