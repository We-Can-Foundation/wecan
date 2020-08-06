import React from "react";
import {Link} from "react-router-dom";

const MenuList = (props) => {
    return (
        <div className={"pathContainer"}>
            <Link className={"noDec"} to={"/"} onClick={() => props.openMenu(false)}>
                <div className={"headerCont"}>
                    <img alt={""} src={require('../../Assets/homeIcon.png')}/>
                    <p>Inicio</p>
                </div>
            </Link>
            <Link className={"noDec"} to={"/education"} onClick={() => props.openMenu(false)}>
                <div className={"headerCont"}>
                    <img alt={""} src={require('../../Assets/eduIcon.png')}/>
                    <p>Educación</p>
                </div>
            </Link>
            <Link className={"noDec"} to={"activities"} onClick={() => props.openMenu(false)}>
                <div className={"headerCont"}>
                    <img alt={""} src={require('../../Assets/actIcon.png')}/>
                    <p>Actividades</p>
                </div>
            </Link>
            <Link className={"noDec"} to={"therapy"} onClick={() => props.openMenu(false)}>
                <div className={"headerCont"}>
                    <img alt={""} src={require('../../Assets/therapyIcon.png')}/>
                    <p>Terapia</p>
                </div>
            </Link>
        </div>
    );
}

export default MenuList;