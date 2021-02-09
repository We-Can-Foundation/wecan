import React, {useState} from "react";
import './register.css';
import CustomDropdown from "./CustomDropdown";
import EnfoquesClinicos from './EnfoquesClinicos';

const RegisterPro02 = (props) => {
    const { values, handleChange, next, back, setValue } = props;

    const specialties = [
        {
            name: "Psicología Clínica"
        }, {
            name: "Psicología de la salud"
        },{
            name: "Psicología educativa"
        },{
            name: "Neuropsicología"
        },{
            name: "Tanatología"
        },{
            name: "Sexología"
        }
    ]

    const subNeuro = [
        {
            name: "Psicología Clínica"
        }, {
            name: "Psicología de la salud"
        },{
            name: "Psicología educativa"
        }
    ]

    const subEdu = [
        {
            name: "Psicología Clínica"
        }, {
            name: "Psicología de la salud"
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


    let subInput = "";

    let sub = {
        name: "",
        content: ""
    }

    if(values.specialty === specialties[0].name){
        subInput = (
            <>
                <p className={"labelText"}>Subespecialidad:</p>
                <CustomDropdown
                    name={"subspecialty"}
                    placeholder={"Enfoques clínicos"}
                    value={values.subspecialty}
                    list={EnfoquesClinicos}
                    setValue={setValue}/>
            </>
        )
    } else if(values.specialty === specialties[2].name){
        subInput = (
            <>
                <p className={"labelText"}>Subespecialidad:</p>
                <CustomDropdown
                    name={"subspecialty"}
                    placeholder={"Areas de educación"}
                    value={values.subspecialty}
                    list={subEdu}
                    setValue={setValue}/>
            </>
        )
    }

    return(
        <>
            <div className={"progressBar"}>
                <div className={"notCurrentStep"}>
                    <div className={"indexSphere"} id={"notCurrentSphere"}>1</div>
                    <p>Datos Generales</p>
                </div>
                <div className={"currentStep"} >
                    <div className={"indexSphere"} id={"currentSphere"}>2</div>
                    <p>Información profesional</p>
                </div>
            </div>

            <p className={"labelText"}>Dirección de consultorio:</p>
            <input type={"text"} name="address" placeholder="Calle, número y ciudad" className={"regInp"}
                   defaultValue={values.address}
                   onChange={handleChange('address')}/>

            <p className={"labelText"}>Cédula de licenciatura:</p>
            <input type={"text"} name="cedula" placeholder="Sólo cédula de licenciatura en Psicología" className={"regInp"}
                   defaultValue={values.cedula}
                   onChange={handleChange('cedula')}/>

            <p className={"labelText"}>Especialidad:</p>
            <CustomDropdown
                name={"specialty"}
                placeholder={"Especialidad"}
                value={values.specialty}
                list={specialties}
                setValue={setValue}/>

            {subInput}

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

export default RegisterPro02;