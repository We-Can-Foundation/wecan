import React, {Fragment} from "react";

const HamburgerIcon = (props) => {
    let className = "wrapper-menu"
    if(props.isOpen){
        className = "wrapper-menu open"
    }

    return(
        <Fragment>
            <div className={className} onClick={() => props.openMenu(!props.isOpen)}>
                <div className="line-menu half start"></div>
                <div className="line-menu"></div>
                <div className="line-menu half end"></div>
            </div>
        </Fragment>

    );
}


export default HamburgerIcon;