import {Navigate} from "react-router-dom";
import React from "react";

const Logout = () => {
    localStorage.clear()
    return <Navigate to="/sign-in"/>
}

export default Logout;