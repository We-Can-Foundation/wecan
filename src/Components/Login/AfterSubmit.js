import React from "react"
const AfterSubmit = props =>{
    const { companyName, companyAddress, name, phone, signupSuccess } = props.data;

    const succes = (
        <div>
            <h2>Success</h2>
            <p>Nombre: {name}</p>
            <p>Telefono: {phone}</p>
            <p>Empresa: {companyName}</p>
            <p>Dirección: {companyAddress}</p>
        </div>
    )

    const failure = (
        <div>
            <h2>Failed signup</h2>
        </div>
    )

    return(
        <>
            {signupSuccess ? succes : failure}
        </>
    )
}
export default AfterSubmit;