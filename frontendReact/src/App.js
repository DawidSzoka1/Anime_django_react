import React from "react";
import Home from './pages/home'
import Signup from "./pages/signup";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import NavbarComp from "./components/Navbar";

class App extends React.Component {
    render() {
        return (

            <Router>
                <NavbarComp />
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/sign-up" element={<Signup />}/>
                </Routes>
            </Router>


        )
    }


}

export default App