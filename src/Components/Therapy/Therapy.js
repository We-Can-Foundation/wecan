import React, {useEffect} from "react";
import useWindowSize from "../../useWindowSize";

const Therapy = (props) => {

    useEffect(() => {
        props.setIndex(2);
    });

    return (
        <div className={"activities"}>
            <h2>Aún no tienes sesiones de terapia agendadas</h2>
        </div>
    );
}

export default Therapy;