import React from "react";
import Header from "../NavBar Header/Header";

const Activities = (props) => {
    return (
        <div>
            <Header windowSize={props.windowSize}/>
            <h3>Actividades</h3>
        </div>
    );
}

export default Activities;