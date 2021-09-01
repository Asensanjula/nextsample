import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import TryMobileBanner from "./TryMobileBanner";
import ScrollToTop from "react-scroll-to-top";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Layout = ({children}) => {
    return (
        <div className="content">
            <TryMobileBanner/>
            <Navbar/>
            <ScrollToTop smooth component={<FontAwesomeIcon size="1x" color="#fff" icon="chevron-up" />}/>
            {children}
            <Footer/>
        </div>
    );
};

export default Layout;
