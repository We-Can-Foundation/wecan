import React from "react";

const StoresBtn = () => {

    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <h4>Disponible en:</h4>
            <div className={"storeCont"}>
                <img alt={"Store"} src={require('../../Assets/appStore.png')}/>
                <p>App Store</p>
            </div>
            <div className={"storeCont"}>
                <img alt={"Store"} src={require('../../Assets/playStore.png')}/>
                <p>Play Store</p>
            </div>
        </div>
    )
}

export default StoresBtn;