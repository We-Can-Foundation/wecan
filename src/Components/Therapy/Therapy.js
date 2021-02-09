import React, {useEffect} from "react";
import useWindowSize from "../../useWindowSize";
import './therapy.css'

export default class Therapy extends React.Component {

    componentDidMount() {
        this.props.setIndex(3);
    }

    render (){
        return (
            <div className={"therapy"}>
                <div className={"noTherapyCont"}>
                    <h2>Terapias con profesionales enfocadas a tu situación específica</h2>
                    <img alt={"LogIn"} src={require('../../Assets/therapy_img.png')}/>
                    {/*<p>Da click en comenzar para iniciar tu proceso de prediagnóstico.</p>
                        <button className={"startTherapyBtn"}>Comenzar</button>*/}
                    <h2>¡Muy pronto!</h2>
                </div>
            </div>
        );
    }
}
