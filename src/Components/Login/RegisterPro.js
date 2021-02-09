import React, {useState} from "react";
import './register.css';
import CustomDropdown from "./CustomDropdown";

const RegisterPro = (props) => {
    const { values, handleChange, next, back, setValue } = props
    let completeName = values.name + ' ' + values.midName;

    const countries = [
        {
            id: 1,
            name: "México"
        }, {
            id: 2,
            name: "Argentina"
        }, {
            id: 3,
            name: "Uruguay"
        }, {
            id: 4,
            name: "Colombia"
        }
    ]

    return(
        <>
            <div className={"progressBar"}>
                <div className={"currentStep"}>
                    <div className={"indexSphere"} id={"currentSphere"}>1</div>
                    <p>Datos Generales</p>
                </div>
                <div className={"notCurrentStep"} >
                    <div className={"indexSphere"} id={"notCurrentSphere"}>2</div>
                    <p>Información profesional</p>
                </div>
            </div>
            <div style={{alignSelf: "start"}}>
                <p className={"labelText"}>Nombre completo: </p>
                <p className={"valueText"}>{completeName}
                </p></div>
            <div style={{alignSelf: "start"}}>
                <p className={"labelText"}>Correo electrónico: </p>
                <p className={"valueText"}>{values.email}</p>
            </div>

            <p className={"labelText"}>Número de teléfono:</p>
            <input type={"text"} name="phone" placeholder="+52 55 **** ****" className={"regInp"}
                   defaultValue={values.phone}
                   onChange={handleChange('phone')}/>

            <p className={"labelText"}>Contraseña:</p>
            <input type={"password"} name="password" placeholder="Mínimo 8 dígitos" className={"regInp"}
                   defaultValue={values.password}
                   onChange={handleChange('password')}/>

            <p className={"labelText"}>Confirma contraseña:</p>
            <input type={"password"} name="password" placeholder="Mínimo 8 dígitos" className={"regInp"}
                   defaultValue={values.password}
                   onChange={handleChange('password')}/>

            <p className={"labelText"}>Fecha de nacimiento:</p>
            <input type={"date"} name="birthday" placeholder="DD / MM / AAAAA" className={"regInp"}
                   defaultValue={values.birthday}
                   onChange={handleChange('birthday')}/>

            <p className={"labelText"}>Pais:</p>
            <CustomDropdown
                name={"country"}
                placeholder={"Selecciona tu país"}
                value={values.country}
                list={countries}
                setValue={setValue}/>

            <br/>
            <div style={{display:"flex", flexDirection: "row"}}>
                <button type="submit" className={"backBtn"} onClick={back}>Anterior</button>
                <button type="submit" className={"enabledBtn"} onClick={next}>Continuar</button>
            </div>
        </>
    );
}

export default RegisterPro;