import React from "react";
import Intro from "./Intro";
import Footer from "./Footer";
import Header from "../NavBar Header/Header";

const Home = (props) => {
    return (
        <div>
            <Header windowSize={props.windowSize}/>
            <div className={"homeCont"}>
                <Intro windowSize={props.windowSize}/>
                <div className={"sectionDataCont"}>
                    <div className={"patientDataCont"}>
                        <h3>Blogs y Artículos</h3>
                        <p>Educativos para pacientes, profesionales y
                            público general</p>
                        <img alt={"Section Image"} src={require('../../Assets/educationWeCan.png')}/>
                        <button className={"goButton green"} type={"Button"}>Ir a Educación</button>
                    </div>
                    <div className={"patientDataCont"}>
                        <h3>Actividades recreativas</h3>
                        <p>Pensadas para fortalecer la salud emocional y cómo
                            tratamiento en casos específicos</p>
                        <img alt={"Section Image"} src={require('../../Assets/activitiesWeCan.png')}/>
                        <button className={"goButton red"} type={"Button"}>Ir a Actividades</button>
                    </div>
                </div>
                <div className={"psychDataCont"}>
                    <div className={"psychInfo"}>
                        <h3>Encuentra pacientes más rápido</h3>
                        <p>We Can te conectará con pacientes que padecen problemas
                            que se encuentran en tu rango de atención específica y expertiz.
                        </p>
                        <button className={"goButton blue"} type={"button"}>Comenzar</button>
                    </div>
                    <img alt={"Psychologists"} src={require('../../Assets/psychologists.png')}/>
                </div>
                <Footer windowSize={props.windowSize}/>
            </div>
        </div>
    );
}

export default Home;