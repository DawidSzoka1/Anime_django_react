import React from "react";
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import Register from "./pages/Register";
import Login from "./pages/Login";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import NavbarComp from "./components/Navbar";
import Logout from "./pages/Logout";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {

    return (
        <Router>
            <NavbarComp/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/logout" element={
                    <ProtectedRoute>
                        <Logout/>
                    </ProtectedRoute>
                }/>

                <Route path="/login" element={<Login/>}/>
            </Routes>
        </Router>
    )

}

export default App