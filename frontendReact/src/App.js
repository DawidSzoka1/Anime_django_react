import axios from "axios";
import React from "react";
import Home from './pages/home'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";

class App extends React.Component {
    render() {
        return (

            <Router>
                <Navbar/>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                </Routes>
            </Router>


        )
    }


}

export default App