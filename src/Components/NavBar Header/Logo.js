import React from "react";

const Logo = () => {
    return(
        <div className={"headerCont Logo"}>
            <img alt={"We Can Logo"} src={require('../../Assets/LogoWeCan.png')}/>
            <h3>WeCan</h3>
        </div>
    );
}

export default Logo;