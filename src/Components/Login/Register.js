import React, {useState}from 'react';
import { useHistory } from 'react-router-dom';
import Logo from "../NavBar Header/Logo";
import useWindowSize from "../../useWindowSize";
import './register.css';

const Register = () => {

    const [selection, setSelection] = useState(0);

    const patientStyle = {
        backgroundColor: "#EE5555",
        color: "#fff"
    }

    const proStyle = {
        backgroundColor: "#6078FE",
        color: "#fff"
    }

    if(selection === 0){
        patientStyle.backgroundColor = "#EE5555"
        patientStyle.color = "#fff"
        proStyle.backgroundColor = ""
        proStyle.color = "#9d9d9d"
    } else if(selection === 1){
        proStyle.backgroundColor = "#6078FE"
        proStyle.color = "#fff"
        patientStyle.backgroundColor = ""
        patientStyle.color = "#9d9d9d"
    }

    let imageBox = (
        <div className={"resImgBox"}>
            <img alt={"Registro"} />
        </div>
    )

    if (useWindowSize().width < 1025){
        imageBox = "";
    }

    const navigate = useHistory();
    return (

        <div className={"loginCont"}>
            <div className={"topBar"}>
                <Logo/>
                <button className={"resButton"} id="back" onClick={() => navigate.goBack()}>Regresar</button>
            </div>
            <div className={"resCont"}>
                <div className={"regCont"}>
                    <h2>Registrarse</h2>
                    <div className={"regCard"}>
                        <div className={"userTypeBar"}>
                            <div id={"patientSelection"} style={patientStyle} onClick={() => setSelection(0)}>
                                <p>Soy Paciente</p>
                            </div>
                            <div id={"professionalSelection"} style={proStyle} onClick={() => setSelection(1)}>
                                <p>Soy profesionista</p>
                            </div>
                        </div>
                        <input type="text" name="name" placeholder="Nombre" className={"regInp"}/>
                        <input type="text" name="middleName" placeholder="Apellidos" className={"regInp"}/>
                        <input type="email" name="mail" placeholder="Correo electrónico" className={"regInp"}/>
                    </div>
                </div>
                {imageBox}
            </div>
        </div>

    );
}

export default Register;