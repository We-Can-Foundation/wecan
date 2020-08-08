import React, {useState, Fragment} from "react";
import Logo from "./Logo";
import MenuList from "./MenuList";
import Enter from "./Enter";
import HamburgerIcon from "./HamburgerIcon";
import OverlayMobile from "./OverlayMobile";

const Header = (props) => {
    const [isOpen, openMenu] = useState(false);
    let content =(
        <Fragment>
            <Logo/>
            <MenuList openMenu={openMenu}/>
            <Enter openMenu={openMenu}/>
        </Fragment>
    );

    if (props.windowSize.width < 1025){
        content = (
            <Fragment>
                <Logo/>
                <HamburgerIcon isOpen={isOpen} openMenu={openMenu}/>
            </Fragment>
        );
    }

    return(
        <header>
            <OverlayMobile isOpen={isOpen} openMenu={openMenu}/>
            {content}
        </header>
    );
}

export default Header;