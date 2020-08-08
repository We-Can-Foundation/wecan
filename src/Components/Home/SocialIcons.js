import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const SocialIcons = () => {
    return (
        <div className={"socialColumn"}>
            <h4>Síguenos en redes sociales:</h4>
            <div className={"socialMediaList"}>
                <a target={"blank"} href={"https://www.instagram.com/wecanfoundationmx/"}>
                    <FontAwesomeIcon className={"icon"} icon={['fab', 'instagram']} color={"#486779"} size={"3x"}/></a>
                <a target={"blank"} href={"https://www.facebook.com/wecanfoundationmx/"}>
                    <FontAwesomeIcon className={"icon"} icon={['fab', 'facebook']} color={"#486779"} size={"3x"}/></a>
                <a target={"blank"} href={"/#"}>
                    <FontAwesomeIcon className={"icon"} icon={['fab', 'linkedin']} color={"#486779"} size={"3x"}/></a>
                <a target={"blank"} href={"/#"}>
                    <FontAwesomeIcon className={"icon"} icon={['fab', 'twitter']} color={"#486779"} size={"3x"}/></a>
            </div>
        </div>
    );
}

export default SocialIcons;