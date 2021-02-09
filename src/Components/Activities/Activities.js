import React, {useEffect} from "react";
import '../../App.css';
import useWindowSize from "../../useWindowSize";

const Activities = (props) => {

    useEffect(() => {
        props.setIndex(2);
    });

    let pStyle = {
        color: "#3F7387",
        fontSize: "25px"
    }

    return (
        <div className={"activities"}>
            <div className={"therapy"}>
                <div className={"noTherapyCont"}>
                    <h2>Actividades enfocadas para la salud emocional y mental</h2>
                    <img alt={"LogIn"} src={require('../../Assets/activities.png')}/>
                    {/*<p>Da click en comenzar para iniciar tu proceso de prediagnóstico.</p>
                        <button className={"startTherapyBtn"}>Comenzar</button>*/}
                    <h2>¡Muy pronto!</h2>
                </div>
            </div>
        </div>
    );
}

export default Activities;