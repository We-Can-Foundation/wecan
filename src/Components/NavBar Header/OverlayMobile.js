import React from "react";
import MenuList from "./MenuList";
import Enter from "./Enter";
import SocialIcons from "../Home/SocialIcons";
import AdditionalInfo from "../Home/AdditionalInfo";

const OverlayMobile = (props) => {
    let divStyle = {
        transform: 'translateX(-100%)'
    };
    if(props.isOpen){
        divStyle.transform = 'translateX(0)'
    }

    return (
        <div id="myNav" className="overlay" style={divStyle}>
            <div className="overlay-content1 ">
                <Enter openMenu={props.openMenu}/>
                <MenuList openMenu={props.openMenu}/>
                <div>
                    <SocialIcons/>
                    <AdditionalInfo/>
                </div>
            </div>
            <div className="overlay-content2">{""}</div>
        </div>
    );
}

export default OverlayMobile;