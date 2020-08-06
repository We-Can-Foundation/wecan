import React from "react";
import StoresBtn from "./StoresBtn";

const Intro = (props) => {
    return (
        <div className={"introCont"}>
            <div className={"dataCont"}>
                <h4>La mejor plataforma para la</h4>
                <h1>Salud Emocional</h1>
                <p>Profesionales de salud mental enfocados a tu problema
                    específico, educación para la salud menta y actividades
                    para mejorar salud emocional.</p>
                <StoresBtn/>
                <button className={"buttonStart"} type={"button"}>Comenzar</button>
            </div>
            <div className={"imgRectangle"}>
                <img alt={"Intro Img"} src={require('../../Assets/weCanIntroImg.png')}/>
            </div>
        </div>
    );
}

export default Intro;