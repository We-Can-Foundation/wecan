import React, {useState} from "react";
import Logo from "./Logo";
import MenuList from "./MenuList";
import Enter from "./Enter";
import HamburgerIcon from "./HamburgerIcon";
import OverlayMobile from "./OverlayMobile";

const Header = (props) => {
    const [isOpen, openMenu] = useState(false);
    let content =(
        <>
            <Logo/>
            <MenuList openMenu={openMenu}/>
            <Enter/>
        </>
    );

    if (props.windowSize.width < 1025){
        content = (
            <>
                <Logo/>
                <HamburgerIcon isOpen={isOpen} openMenu={openMenu}/>
            </>
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