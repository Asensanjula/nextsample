import React from 'react';
import Link from "next/link";

function Navbar(props) {
    return (
        <nav>
            <div className="logo">
                <h1>Ninja List</h1>
            </div>
            <div className="navLinks">
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/ninjas"><a>Ninja Listing</a></Link>
            </div>
        </nav>
    );
}

export default Navbar;