import React from "react";
import './index.css'

import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App () {
    return (
        <div className="hero">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default App