import React from 'react';
import {isMobile,isAndroid,isIOS} from 'react-device-detect';

function TryMobileBanner(props) {

    let mobilePath="";
    if (isMobile){
        if (isAndroid){
            mobilePath="https://play.google.com/store/apps/details?id=com.echannelling.mobilechannelling&hl=en&gl=US"
        }
        else if (isIOS){
            mobilePath="https://apps.apple.com/lk/app/echannelling/id1087304077";
        }
    }
    return (
        isMobile && (isAndroid || isIOS) &&
        <div>
            <p>Click here for better  experience <a href={mobilePath}>Install</a></p>
        </div>
    );
}

export default TryMobileBanner;