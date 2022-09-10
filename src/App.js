import Topbar from "./components/topbar/TopBar";

import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useContext } from "react"
import Home from "./pages/home/Home";
import { Context } from "./context/Context";

function App() {
  const {user} = useContext(Context)
  return (
      <Router>
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/posts" element={<Home />} />
          
        <Route path="/register" element={user ? <Home /> : <Register />}/>
          
        
        <Route path="/login" element={user ? <Home /> : <Login />}/>
        <Route path="/post/:id" element={<Single />}/>
          
        
        <Route path="/write" element={user ? <Write /> : <Login />}/>
        <Route path="/settings"element={user ? <Settings /> : <Login />}/>
          
        
      </Routes>
    </Router>
    );
}

export default App;