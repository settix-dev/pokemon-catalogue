// import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./routes/Home";
import Berries from "./routes/Berries";
import Berry from "./routes/Berry";
import BerryItems from "./routes/BerryItems";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
      <Header />
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/berries">Berries</Link>
          </li>
          <li>
            <Link to="/berry">Berry</Link>
          </li>
          <li>
            <Link to="/berryItems">BerryItems</Link>
          </li>
        </ul> */}

        <hr />

        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/berries" element={<Berries />}> </Route>
          <Route path="/berry" element={<Berry />}></Route>
          <Route path="/berryItems" element={<BerryItems />}></Route>
            {/* <Route path=":berry" element={<Berry />}>
              <Route path=":berryItems" element={<BerryItems />}></Route>
            </Route> */}
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
