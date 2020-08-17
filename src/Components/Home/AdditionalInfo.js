import React from "react";

const AdditionalInfo = () => {
    let date = new Date();
    let year = date.getFullYear();
    return(
        <div className={"additionalInfo"}>
            <h4>Información adicional</h4>
            <a href={"/#"}>Aviso de privacidad</a>
            <a href={"/#"}>Términos y condiciones</a>
            <a href={"/#"}>Legal</a>
            <a href={"/#"}>Soporte</a>
            <p className={"copyRight"}>&copy; We Can Foundation {year}</p>
        </div>
    );
}

export default AdditionalInfo;