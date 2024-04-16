import React from "react";
import Home from './pages/home'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from "./pages/signup";
import SignIn from "./pages/signin";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import NavbarComp from "./components/Navbar";

const App = () => {

    return (
        <Router>
            <NavbarComp/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/sign-up" element={<Signup/>}/>
                <Route path="/sign-in" element={<SignIn/>}/>
            </Routes>
        </Router>
    )

}

export default App