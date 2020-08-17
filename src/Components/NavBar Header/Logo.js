import React from "react";
import {Link} from "react-router-dom";

const Logo = () => {
    return(
        <Link className={"noDec"} to={"/"}>
            <div className={"headerCont Logo"}>
                <img className={"LogoImg"} alt={"We Can Logo"} src={require('../../Assets/LogoWeCan.png')}/>
                <h3 className={"noDec"}>WeCan</h3>
            </div>
        </Link>
    );
}

export default Logo;