import React, {useState, useReducer, createContext}from 'react';
import {
    Link,
    useHistory,
    Switch,
    Route,
    useRouteMatch,
    useLocation
} from 'react-router-dom';
import Logo from "../NavBar Header/Logo";
import useWindowSize from "../../useWindowSize";
import './register.css';
import './RegisterPatient';
import RegisterPatient from "./RegisterPatient";
import RegistrationStepOne from "./RegistrationStepOne";

const Register = () => {

    const [newUser, setuserdata] = useState({
        name: undefined,
        surname: undefined,
        email: undefined
    })

    let match = useRouteMatch();
    const [selection, setSelection] = useState(0);
    let destination = "/paciente";
    let location = useLocation();

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
        destination = `${match.url}/paciente`;
    } else if(selection === 1){
        proStyle.backgroundColor = "#6078FE";
        proStyle.color = "#fff";
        patientStyle.backgroundColor = "";
        patientStyle.color = "#9d9d9d";
        destination = `${match.url}/profesionista`;
    }

    let imageBox = (
        <div className={"resImgBox"}>
            <img alt={"LogIn"} src={require('../../Assets/logIn_img.png')}/>
        </div>
    )

    if (useWindowSize().width < 1025){
        imageBox = "";
    }

    const navigate = useHistory();

    const FirstStep = <RegistrationStepOne
        destination={destination}
        patientStyle={patientStyle}
        proStyle={proStyle}
        setSelection={setSelection}
        location={location}
        newUser={newUser}/>;

    return (
        <Switch>
            <div className={"loginCont"}>
                    <div className={"topBar"}>
                        <Logo/>
                        <button className={"resButton"} id="back" onClick={() => navigate.goBack()}>Regresar</button>
                    </div>
                    <div className={"resCont"}>
                        <div className={"regCont"}>
                            <h2>Registrarse</h2>

                                {FirstStep}
                                <Route path={`${match.url}/paciente`}>
                                    <RegisterPatient newUser={newUser}/>
                                </Route>
                                <Route path={`${match.url}/profesionista`}>
                                </Route>
                        </div>
                        {imageBox}
                    </div>
            </div>
        </Switch>

    );
}

export default Register;