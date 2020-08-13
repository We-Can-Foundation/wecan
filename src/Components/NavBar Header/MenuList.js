import React from "react";
import {Link} from "react-router-dom";

const MenuList = (props) => {
    let indexStyle = {fontWeight: "bold"}
    let styleList = [{},{},{},{}]
    switch (props.index) {
        case 0:
            styleList[0] = indexStyle;
            break;
        case 1:
            styleList[1] = indexStyle;
            break;
        case 2:
            styleList[2] = indexStyle;
            break;
        case 3:
            styleList[3] = indexStyle;
            break;
        default:
            styleList[0] = indexStyle;
            break;
    }

    return (
        <div className={"pathContainer"}>
            <Link className={"noDec"} to={"/"} onClick={() => {
                props.openMenu(false);
                props.setIndex(0);
            }}>
                <div className={"headerCont"}>
                    <img alt={""} src={require('../../Assets/homeIcon.png')}/>
                    <p style={styleList[0]}>Inicio</p>
                </div>
            </Link>
            <Link className={"noDec"} to={"/education"} onClick={() => {
                props.openMenu(false);
                props.setIndex(1);
            }}>
                <div className={"headerCont"}>
                    <img alt={""} src={require('../../Assets/eduIcon.png')}/>
                    <p style={styleList[1]}>Educación</p>
                </div>
            </Link>
            <Link className={"noDec"} to={"activities"} onClick={() => {
                props.openMenu(false);
                props.setIndex(2);
            }}>
                <div className={"headerCont"}>
                    <img alt={""} src={require('../../Assets/actIcon.png')}/>
                    <p style={styleList[2]}>Actividades</p>
                </div>
            </Link>
            <Link className={"noDec"} to={"therapy"} onClick={() => {
                props.openMenu(false);
                props.setIndex(3);
            }}>
                <div className={"headerCont"}>
                    <img alt={""} src={require('../../Assets/therapyIcon.png')}/>
                    <p style={styleList[3]}>Terapia</p>
                </div>
            </Link>
        </div>
    );
}

export default MenuList;