import React from 'react'
import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Home from './pages/home/Home';
import Adults from './pages/adults/Adults';
import Kids from './pages/kids/Kids';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />}/>
        </Route>
        <Route path="/adults">
          <Route index element={<Adults />}/>
        </Route>
        <Route path="/kids">
          <Route index element={<Kids />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
