import React from "react";
import {Link} from 'react-router-dom';

const Enter = (props) => {
    return (
        <div className={"pathContainer"}>
            <Link className={"noDec"} to={"/login"} onClick={() => props.openMenu(false)}>
            	<h4>Iniciar sesión</h4>
            </Link>
            <Link className={"noDec"} to={"/register"} onClick={() => props.openMenu(false)}>
                <button type={"button"}>Registrarse</button>
            </Link>

        </div>
    );
}

export default Enter;