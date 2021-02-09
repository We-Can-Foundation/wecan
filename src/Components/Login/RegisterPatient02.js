import React, {useState} from "react";
import './register.css';
import CustomDropdown from "./CustomDropdown";

const RegisterPatient02 = (props) => {
    const { values, handleChange, next, back, setValue } = props;

    const ocupations = [
        {
            name: "Estudiante"
        }, {
            name: "Empleada(o)"
        }, {
            name: "Desempleada(o)"
        }, {
            name: "Empresario/Emprendedor"
        }
    ]

    const genres = [
        {
            name: "Femenino"
        }, {
            name: "Masculino"
        }, {
            name: "Otro"
        }
    ]

    const religion = [
        {
            name: "Cristianismo"
        }, {
            name: "Islamismo"
        }, {
            name: "Ateismo"
        }, {
            name: "Budismo"
        }, {
            name: "Induísmo"
        }
    ]

    const estadoCivil = [
        {
            name: "Soltera(o)"
        }, {
            name: "Casada(o)"
        }, {
            name: "Divorviada(o)"
        }, {
            name: "Unión libre"
        }, {
            name: "Viuda(o)"
        }
    ]

    return(
        <>
            <div className={"progressBar"}>
                <div className={"notCurrentStep"}>
                    <div className={"indexSphere"} id={"notCurrentSphere"}>1</div>
                    <p>Datos Generales</p>
                </div>
                <div className={"currentStep"} >
                    <div className={"indexSphere"} id={"currentSphere"}>2</div>
                    <p>Información personal</p>
                </div>
            </div>

            <p className={"labelText"}>Dirección:</p>
            <input type={"text"} name="address" placeholder="Calle, número y ciudad" className={"regInp"}
                   defaultValue={values.address}
                   onChange={handleChange('address')}/>

            <p className={"labelText"}>Ocupación:</p>
            <CustomDropdown
                name={"ocupation"}
                placeholder={"Ocupación"}
                value={values.ocupation}
                list={ocupations}
                setValue={setValue}/>

            <p className={"labelText"}>Género:</p>
            <CustomDropdown
                name={"genre"}
                placeholder={"Selecciona tu genero"}
                value={values.genre}
                list={genres}
                setValue={setValue}/>

            <p className={"labelText"}>Religión:</p>
            <CustomDropdown
                name={"religion"}
                placeholder={"Selecciona la religión que profesas"}
                value={values.religion}
                list={religion}
                setValue={setValue}/>

            <p className={"labelText"}>Estado civil:</p>
            <CustomDropdown
                name={"civicStatus"}
                placeholder={"Estado civil"}
                value={values.civicStatus}
                list={estadoCivil}
                setValue={setValue}/>

            <br/>
            <div style={{display:"flex", flexDirection: "row"}}>
                <button type="submit" className={"backBtn"} onClick={back}>Anterior</button>
                <button type="submit" className={"enabledBtn"} onClick={next}>Registrarse</button>
            </div>
        </>
    );
}

export default RegisterPatient02;