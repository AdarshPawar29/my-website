import {
  BrowserRouter,
  Route,
  Routes, //switch
} from "react-router-dom";

import SideNav from "./components/SideNav";
import About from "./components/About";
import Contact from "./components/Contact";
import MySkills from "./components/MySkills";
import Home from "./components/Home";
import Work from "./components/Work";

import "./App.scss";

const ROUTES = [
  {
    path: "/about",
    component: About,
  },
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/skill",
    component: MySkills,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/",
    component: Home,
  },
  {
    path: "/work",
    component: Work,
  },
];

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <SideNav />
        <Routes>
          {ROUTES.map((route, i) => (
            <Route path={route.path} element={<route.component />} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
