import React,{useEffect} from 'react';
import {useRouter} from "next/router";

const NotFound = () => {

    const router = useRouter();

    useEffect(() => {
        setTimeout(()=> {
            router.push("/");
        },3000);
    }, []);

    return (
        <div className="not-found">
            <h2>Opps Page Not Found</h2>
        </div>
    );
};

export default NotFound;
