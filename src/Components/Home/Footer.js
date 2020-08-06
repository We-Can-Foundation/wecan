import React from "react";
import StoresBtn from "./StoresBtn";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import SocialIcons from "./SocialIcons";
import AdditionalInfo from "./AdditionalInfo";

const Footer = (props) => {

    library.add(fab);

    let date = new Date();
    let year = date.getFullYear();
    let footerClassName = "footerDataCont"
    let unnecessary = (<StoresBtn/>);
    if(props.windowSize.width < 1025){
        unnecessary = ""
    }

    return (
        <footer>
            <div className={footerClassName}>
                {unnecessary}
                <SocialIcons/>
                <AdditionalInfo/>
            </div>
            <h4 className={"copyRight"}>&copy; We Can {year}</h4>
        </footer>
    )
}

export default Footer;