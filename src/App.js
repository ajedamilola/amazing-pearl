import React from 'react'
import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Home from './pages/home/Home';
import Adults from './pages/adults/Adults';
import Kids from './pages/kids/Kids';
import About from './pages/about/About';
import Job from "./pages/job/Job";
import Jobform from "./pages/job/Jobform";
import Regone from "./pages/register/Regone";
import Regthree from "./pages/register/Regthree";
import Regtwof from "./pages/register/Regtwof";
import Regtwos from "./pages/register/Regtwos";
import Sign from "./pages/sign/Sign";
import Contact from "./pages/contact/Contact";
import Findcare from './pages/findcare/Findcare';
import Services from './pages/services/Services';
import Articles from './pages/articles/Articles';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />}/>
          <Route path="adults" element={<Adults />} />
          <Route path="kids" element={<Kids />} />
        </Route>
        <Route path="/about">
          <Route index element={<About />}/>
        </Route>
        <Route path="/join">
            <Route index element={<Sign />}/>
        </Route>
        <Route path="/register">
          <Route path="stepone" element={<Regone />} />
          <Route path="steptwofirst" element={<Regtwof />} />
          <Route path="steptwosecond" element={<Regtwos />} />
          <Route path="stepthree" element={<Regthree />} />
        </Route>
        <Route path="/job">
          <Route index element={<Job />} />
          <Route path="apply" element={<Jobform />} />
        </Route>
        <Route path="/contact">
          <Route index element={<Contact />} />
        </Route>
        <Route path="/care">
          <Route index element={<Findcare />} />
        </Route>
        <Route path="/services">
          <Route index element={<Services />} />
        </Route>
        <Route path="/articles">
          <Route index element={<Articles />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
