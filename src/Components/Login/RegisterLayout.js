import React, {useCallback} from "react";
import Logo from "../NavBar Header/Logo";
import {
    Switch,
    useHistory
} from "react-router-dom";

const RegisterLayout = (props) => {

    const history = useHistory();
    const handleOnClick = useCallback(() => history.push("/"), [history]);

    return (
        <Switch>
            <div className={"loginCont"}>
                <div className={"topBar"}>
                    <Logo/>
                    <button className={"resButton"} id="back" onClick={()=> handleOnClick()}>Regresar</button>
                </div>
                <div className={"resCont"}>
                    <div className={"regCont"}>
                        <h2>Registrarse</h2>
                        <form className={"regCard"}>
                            {props.children}
                        </form>
                    </div>
                    <div className={"resImgBox"}>
                        <img alt={"LogIn"} src={require('../../Assets/logIn_img.png')}/>
                    </div>
                </div>
            </div>
        </Switch>
    )
}

export default RegisterLayout;