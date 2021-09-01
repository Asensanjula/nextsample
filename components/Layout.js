import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import TryMobileBanner from "./TryMobileBanner";
import ScrollToTop from "react-scroll-to-top";

const Layout = ({children}) => {
    return (
        <div className="content">
            <TryMobileBanner/>
            <Navbar/>
            <ScrollToTop smooth />
            {children}
            <Footer/>
        </div>
    );
};

export default Layout;
