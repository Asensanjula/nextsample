import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import TryMobileBanner from "./TryMobileBanner";

const Layout = ({children}) => {
    return (
        <div className="content">
            <TryMobileBanner/>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
};

export default Layout;
