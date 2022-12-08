import { Routes, Route } from "react-router-dom";
import Home from '../page/Home';
import Introduction from '../page/Introduction';
import Fragment from '../page/Fragment';
import Asset from "../page/Asset";
import State from "../page/State";
import Hook from "../page/Hook";
import RouterDOM from "../page/RouterDOM";
import DetailUser from "../page/DetailUser";
import NotFound from "../page/error/NotFound";
import Formulaire from "../page/Formulaire";
import Redux from "../page/Redux";

export default function Main() {
  return (
    <Routes>
      <Route index element={ <Home /> } />
      <Route path="introduction" element={ <Introduction /> } />
      <Route path="fragment" element={ <Fragment /> } />
      <Route path="assets" element={ <Asset /> } />
      <Route path="state" element={ <State /> } />
      <Route path="hook" element={ <Hook /> } />
      <Route path="user/:id" element={ <DetailUser />} />
      <Route path="router/*" element={ <RouterDOM /> } />
      <Route path="formulaire" element={ <Formulaire /> } />
      <Route path="redux" element={ <Redux /> } />

      <Route path="*" element={ <NotFound /> } />
    </Routes>
  );
}
