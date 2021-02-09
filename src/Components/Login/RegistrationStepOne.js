import React, {useState, useCallback, useContext} from "react";
import {
    Link,
    Prompt,
    useHistory,
    useLocation
} from "react-router-dom";
import './register.css';
import { useForm } from "react-hook-form";

const RegistrationStepOne = (props) => {

    const { values, handleChange, next, setType} = props
    const [writtenName, setNameWritten] = useState(false);
    const [writtenMail, setMailWritten] = useState(false);
    const [writtenSurname, setSurnameWritten] = useState(false);
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
        patientStyle.backgroundColor = "#EE5555";
        patientStyle.color = "#fff";
        proStyle.backgroundColor = "";
        proStyle.color = "#9d9d9d";
    } else if(selection === 1){
        proStyle.backgroundColor = "#6078FE";
        proStyle.color = "#fff";
        patientStyle.backgroundColor = "";
        patientStyle.color = "#9d9d9d";
    }

    let submitclassName = "disabledBtn";
    let isBtnDisabled = true;
    if(values.email && values.name && values.midName){
        submitclassName = "enabledBtn";
        isBtnDisabled = false;
    }

    return (
        <>
            <div className={"userTypeBar"}>
                <div id={"patientSelection"} style={patientStyle} onClick={() => setSelection(0)}>
                    <p>Soy paciente</p>
                </div>
                <div id={"professionalSelection"} style={proStyle} onClick={() => setSelection(1)}>
                    <p>Soy psicóloga(o)</p>
                </div>
            </div>
            <p className={"labelText"}>Nombre:</p>
            <input type="text" name="name" placeholder="Estefanía" className={"regInp"}
                       defaultValue={values.name}
                       onChange={handleChange('name')}/>

            <p className={"labelText"}>Apellidos:</p>
            <input type="text" name="middleName" placeholder="Hernández" className={"regInp"}
                   defaultValue={values.midName}
                   onChange={handleChange('midName')}/>
            <p className={"labelText"}>Correo electrónico:</p>
            <input type="email" name="mail" placeholder="ejemplo@mail.com" className={"regInp"}
                   defaultValue={values.email}
                   onChange={handleChange('email')}/>
            <br/>
            <button className={submitclassName} disabled={isBtnDisabled}
                onClick={() => {
                    next();
                    setType(selection);
                }}>Continuar</button>
                <br/>
            <span>o regístrate con tus cuentas personales</span>
            <div className={"logInIconsCont"}>
                <img alt={"google"} src={require('../../Assets/google_icon.png')}/>
                <img alt={"google"} src={require('../../Assets/facebook_icon.png')}/>
                <img alt={"google"} src={require('../../Assets/apple_icon.png')}/>
            </div>
            <div className={"regMsgCont"}>
                <p>¿Ya tienes cuenta we can?</p>
                <Link className={"noDec"} to={"/login"}>
                    <p id={"logRegChange"}>Inicia Sesión</p>
                </Link>
            </div>
        </>
    )

}

export default RegistrationStepOne;