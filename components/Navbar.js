import React from 'react';
import Link from "next/link";
import Image from "next/image";

function Navbar(props) {
    return (
        <nav>
            <div className="logo">
                <Image src="/ninja.svg" width={100} height={77}/>
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