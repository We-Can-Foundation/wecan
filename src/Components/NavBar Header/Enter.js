import React from "react";
import {Link} from 'react-router-dom';

const Enter = (props) => {
    return (
        <div className={"pathContainer"}>
            <Link className={"noDec"} to={"/login"} onClick={() => props.openMenu(false)}>
            	<h4>Iniciar sesión</h4>
            </Link>
            <button type={"button"}>Registrarse</button>
        </div>
    );
}

export default Enter;